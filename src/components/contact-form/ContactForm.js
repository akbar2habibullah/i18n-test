import React, { PureComponent } from 'react'
import { BgImage } from 'gbimage-bridge'
import axios from 'axios'
import PropTypes from 'prop-types'

import checkIcon from '../../images/icons/check-icon.png'
import errorIcon from '../../images/icons/error-icon.png'

class ContactForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            email: '',
            perusahaan: '',
            pesan: '',
            submitting: false,
            show: false,
            status: null,
        }

        this.handleServerResponse = this.handleServerResponse.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidUpdate(_, prevState) {
        const { show } = this.state

        if (show !== prevState.show) {
            const element = document.getElementsByTagName('HTML')[0]
            element.classList.remove('is-clipped')
        }
    }

    handleServerResponse = (ok, message, form) => {
        this.setState({
            submitting: false,
            show: true,
            status: { ok, message }
        })

        const element = document.getElementsByTagName('HTML')[0]
        element.classList.add('is-clipped')

        if (ok) {
            form.reset()
        }
    }

    handleOnSubmit = (event) => {
        const { endpoint } = this.props

        event.preventDefault()
        const form = event.target

        this.setState({
            submitting: true
        })

        axios({
            method: 'post',
            url: `${endpoint}`,
            data: new FormData(form)
        }).then(result => {
            this.handleServerResponse(true, result.response, form)
        }).catch(result => {
            this.handleServerResponse(false, result.response.data.error, form)
        })
    }

    render() {
        const { title, subtitle, lang, imageSrc, imageXsSrc, imageAlt, maxWidth } = this.props
        const { submitting, show, status } = this.state

        const imagesSources = [
            imageXsSrc,
            {
                ...imageSrc,
                media: `(min-width: 769px)`,
            },
        ]

        return (
            <>
                <BgImage className='apl-contactform' image={imagesSources} alt={imageAlt}>
                    <div className='container'>
                        <div className='apl-contactform--wrapper'>
                            <div className='apl-contactform--card'>
                                <h2 className={maxWidth && 'max-content'} dangerouslySetInnerHTML={{ __html: title }}></h2>
                                {subtitle && <h3 dangerouslySetInnerHTML={{ __html: subtitle }}></h3>}
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className='field'>
                                        <label className='label' htmlFor='nama'>{lang ? 'Name' : 'Nama'}</label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                                name='nama'
                                                placeholder={lang ? 'Type here...' : 'Ketik disini...'}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='field-body'>
                                        <div className='field'>
                                            <label className='label' htmlFor='email'>{lang ? 'Email' : 'Email'}</label>
                                            <div className='control'>
                                                <input
                                                    className='input'
                                                    type='email'
                                                    name='email'
                                                    placeholder={lang ? 'Type here...' : 'Ketik disini...'}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='field'>
                                            <label className='label' htmlFor='perusahaan'>{lang ? 'Company' : 'Perusahaan'}</label>
                                            <div className='control'>
                                                <input
                                                    className='input'
                                                    type='text'
                                                    name='perusahaan'
                                                    placeholder={lang ? 'Type here...' : 'Ketik disini...'}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label' htmlFor='pesan'>{lang ? 'Message' : 'Pesan'}</label>
                                        <div className='control'>
                                            <textarea
                                                className='textarea'
                                                type='text'
                                                name='pesan'
                                                placeholder={lang ? 'Type here...' : 'Ketik disini...'}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <button type='submit' disabled={submitting}>
                                            {submitting ? lang ? 'Sending...' : 'Mengirim...' : lang ? 'Send' : 'Kirim'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </BgImage>

                <div className={`modal ${show ? 'is-active' : ''}`}>
                    <div className='modal-background'></div>
                    <div className='modal-content'>
                        <div className='box'>
                            {status?.ok ? (
                                <>
                                    <img src={checkIcon} alt='check icon' />
                                    <h6 className='is-success'>{lang ? 'SUCCESS' : 'BERHASIL'}</h6>
                                    <p>{lang ? 'Your response has been recorded. We’ll get back to you soon!' : 'Data telah kami terima! Kami akan segera menghubungi Anda.'}</p>
                                </>
                            ) : (
                                <>
                                    <img src={errorIcon} alt='error icon' />
                                    <h6 className='is-fail'>{lang ? 'TRY AGAIN' : 'COBA LAGI'}</h6>
                                    <p>{status?.message ? status?.message : lang ? 'Server error, please contact admin!' : 'Kesalahan server, silahkan hubungi admin!'}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <button className='modal-close is-large' aria-label='close' onClick={() => this.setState({ show: false })}></button>
                </div>
            </>
        )
    }
}

ContactForm.displayName = 'ContactForm'

ContactForm.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
    endpoint: PropTypes.string,
}

ContactForm.defaultProps = {
    title: null,
    imageSrc: null,
    imageXsSrc: null,
    endpoint: null,
}

export default ContactForm