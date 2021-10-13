import React, { PureComponent } from 'react'
import { BgImage } from 'gbimage-bridge'
import axios from 'axios'
import PropTypes from 'prop-types'

import checkIcon from '../../images/icons/check-icon.png'
import errorIcon from '../../images/icons/error-icon.png'

class Form extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            nama_juragan: '',
            kabupaten_kota: '',
            nomor_whatsapp: '',
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
        event.preventDefault()
        const form = event.target

        this.setState({
            submitting: true
        })

        axios({
            method: 'post',
            url: 'https://getform.io/f/ae3ef7c0-cda9-4e70-9c96-812267e6642c',
            data: new FormData(form)
        }).then(result => {
            this.handleServerResponse(true, result.response, form)
        }).catch(result => {
            this.handleServerResponse(false, result.response.data.error, form)
        })
    }

    render() {
        const { title, imageSrc, imageAlt } = this.props
        const { submitting, show, status } = this.state

        return (
            <>
                <BgImage className='apl-form' image={imageSrc} alt={imageAlt}>
                    <div className='container'>
                        <div className='apl-form--wrapper'>
                            <div className='apl-form--card'>
                                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className='field'>
                                        <label className='label' htmlFor='nama_juragan'>Nama Juragan (sesuai KTP)</label>
                                        <div className='control'>
                                            <input className='input' type='text' name='nama_juragan' placeholder='Ketik disini. . .' required />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label' htmlFor='kabupaten_kota'>Kabupaten/kota</label>
                                        <div className='control'>
                                            <input className='input' type='text' name='kabupaten_kota' placeholder='Ketik disini. . .' required />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label' htmlFor='nomor_whatsapp'>Nomor Whatsapp Aktif</label>
                                        <div className='field has-addons'>
                                            <p className='control'>
                                                <a href='/' className='button is-static'>+62</a>
                                            </p>
                                            <div className='control is-expanded'>
                                                <input className='input' type='number' name='nomor_whatsapp' placeholder='89283929021' required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <button type='submit' disabled={submitting}>
                                            {submitting ? 'Mengirim...' : 'Kirim'}
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
                                    <h6 className='is-success'>BERHASIL</h6>
                                    <p>Data Juragan telah kami terima! Kami akan segera menghubungi Anda.</p>
                                </>
                            ) : (
                                <>
                                    <img src={errorIcon} alt='error icon' />
                                    <h6 className='is-fail'>GAGAL</h6>
                                    <p>{status?.message ? status?.message : 'Kesalahan server, silahkan hubungi admin!'}</p>
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

Form.displayName = 'Form'

Form.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.object,
}

Form.defaultProps = {
    title: null,
    imageSrc: null,
}

export default Form