import React, { PureComponent, createRef } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

class Topbar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            translate: 0,
            toggle: false,
            show: false,
            showProduct: false,
            hash: props.location?.hash,
        }

        this.container = createRef()
        this.handleScroll = this.handleScroll.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleShowProduct = this.handleShowProduct.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false)
        document.addEventListener('mousedown', this.handleClose)
    }

    componentDidUpdate(_, prevState) {
        if (prevState.toggle === this.state.toggle) {
            if (prevState.show === this.state.show && prevState.showProduct === this.state.showProduct) {
                this.setState({
                    toggle: false,
                })
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        document.removeEventListener('mousedown', this.handleClose)
    }

    handleScroll() {
        this.setState({
            translate: window.pageYOffset
        })
    }

    handleToggle() {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }))
    }

    handleShow() {
        this.setState((prevState) => ({
            show: !prevState.show,
            showProduct: false
        }))
    }

    handleShowProduct() {
        this.setState((prevState) => ({
            showProduct: !prevState.showProduct,
            show: false,
        }))
    }

    handleClose(event) {
        if (
            this.container.current &&
            !this.container.current.contains(event.target)
        ) {
            this.setState({
                show: false,
                showProduct: false
            })
        }
    }

    render() {
        const { location, imageSrc, imageAlt, hash, setHash } = this.props
        const { translate, toggle, show, showProduct } = this.state

        const pathnameDropdownGroup = ['juragan-warung', 'juragan-grosir', 'distributor-fmcg', 'brand-supplier']
        const pathnameDropdownProdut = ['bantuan-pintar', 'bizzy-connect']
        const buttonInstallGroup = ['', 'juragan-warung', 'privacy-policy', 'blog']
        const buttonJoinGroup = ['juragan-grosir']
        const buttonContactGroup = ['distributor-fmcg', 'bizzy-connect']
        const buttonContactEngGroup = ['brand-supplier', 'tentang-perusahaan']
        const buttonCareerGroup = ['karir']
        const buttonLearnNow = ['bantuan-pintar']

        const otherPage = ['', 'tentang-perusahaan', 'distributor-fmcg', 'brand-supplier', 'karir', 'privacy-policy', 'bantuan-pintar','bizzy-connect']
        const juraganWarungPage = ['juragan-warung']
        const juraganGrosirPage = ['juragan-grosir']
        const bizzyConnectPage = []

        return (
            <div className={`apl-topbar ${toggle ? 'apl-topbar--active' : ''} ${translate > 1 ? 'apl-topbar--show' : ''}`}>
                <div className='container' ref={this.container}>
                    <div className='apl-topbar--wrapper'>
                        <div className='apl-topbar--brand'>
                            <Link to='/'>
                                <GatsbyImage image={getImage(imageSrc)} alt={imageAlt} />
                            </Link>
                        </div>
                        <div role='button' tabIndex='0' className='apl-topbar--toggle' aria-label='button-toggle' onClick={() => this.handleToggle()} onKeyDown={() => this.handleToggle()}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className={`apl-topbar--menu ${toggle ? 'apl-topbar--menu--show' : ''}`}>
                            {otherPage.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                <ul>
                                    <div className='apl-topbar--menu--dropdown'>
                                        <button type='button' className={`${pathnameDropdownGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) ? 'apl-topbar--menu--active' : ''}`} onClick={this.handleShow}>
                                            Solusi Kami
                                            <span />
                                        </button>
                                        <div className={`apl-topbar--menu--dropdown--content ${show ? 'apl-topbar--menu--dropdown--content--show' : ''}`}>
                                            <Link to='/juragan-warung/'>Juragan Warung & Kelontong</Link>
                                            <Link to='/juragan-grosir/'>Juragan Grosir</Link>
                                            <Link to='/distributor-fmcg/'>Distributor FMCG</Link>
                                            <Link to='/brand-supplier/'>Brand & Supplier</Link>
                                        </div>
                                    </div>
                                    <div className='apl-topbar--menu--dropdown'>
                                        <button type='button' className={`${pathnameDropdownProdut.includes(location.pathname.replace(/^\/|\/$/g, '')) ? 'apl-topbar--menu--active' : ''}`} onClick={this.handleShowProduct}>
                                            Produk
                                            <span />
                                        </button>
                                        <div className={`apl-topbar--menu--dropdown--content ${showProduct ? 'apl-topbar--menu--dropdown--content--show' : ''}`}>
                                            <Link to='/bantuan-pintar/'>Bantuan Pintar</Link>
                                            <Link to='/bizzy-connect/'>Bizzy Connect</Link>
                                        </div>
                                    </div>
                                    <li><Link activeClassName='apl-topbar--menu--active' to='/tentang-perusahaan/'>Tentang Perusahaan</Link></li>
                                    <li><Link activeClassName='apl-topbar--menu--active' to='/karir/'>Karir</Link></li>
                                    <li><Link activeClassName='apl-topbar--menu--active' to='/blog/'>Blog</Link></li>
                                    <li>
                                        {buttonInstallGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='https://play.google.com/store/apps/details?id=co.warungpintar.mitra' target='_blank' rel='nofollow noopener noreferrer'>
                                                Instal Sekarang
                                            </a>
                                        }
                                        {buttonJoinGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='https://play.google.com/store/apps/details?id=co.warungpintar.mitra' target='_blank' rel='nofollow noopener noreferrer'>
                                                Gabung Sekarang
                                            </a>
                                        }
                                        {buttonContactGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='mailto:partnership@warungpintar.co' target='_blank' rel='nofollow noopener noreferrer'>
                                                Hubungi Kami
                                            </a>
                                        }
                                        {buttonContactEngGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='mailto:partnership@warungpintar.co' target='_blank' rel='nofollow noopener noreferrer'>
                                                Contact Us Now
                                            </a>
                                        }
                                        {buttonCareerGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='https://warungpintar.freshteam.com/jobs' target='_blank' rel='nofollow noopener noreferrer'>
                                                Explore All Jobs
                                            </a>
                                        }
                                        {
                                            buttonLearnNow.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='https://drive.google.com/u/3/uc?id=1G2keuvj8wF2ENTFMFefAU65lu7Cw015e&export=download' target='_blank' rel='nofollow noopener noreferrer'>
                                                Pelajari Sekarang
                                            </a>
                                        }
                                    </li>
                                </ul>
                            }

                            {juraganWarungPage.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                <ul>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#keuntungan')} className={`${hash === '#keuntungan' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-warung/#keuntungan'>Keuntungan</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#sebaran')} className={`${hash === '#sebaran' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-warung/#sebaran'>Sebaran</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#pendaftaran')} className={`${hash === '#pendaftaran' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-warung/#pendaftaran'>Pendaftaran</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#testimoni')} className={`${hash === '#testimoni' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-warung/#testimoni'>Testimoni</AnchorLink></li>
                                    <li>
                                        {buttonInstallGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='https://play.google.com/store/apps/details?id=co.warungpintar.mitra' target='_blank' rel='nofollow noopener noreferrer'>
                                                Instal Sekarang
                                            </a>
                                        }
                                    </li>
                                </ul>
                            }

                            {juraganGrosirPage.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                <ul>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#manfaat')} className={`${hash === '#manfaat' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-grosir/#manfaat'>Manfaat</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#syarat')} className={`${hash === '#syarat' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-grosir/#syarat'>Syarat</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#testimoni')} className={`${hash === '#testimoni' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-grosir/#testimoni'>Testimoni</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#faq')} className={`${hash === '#faq' ? 'apl-topbar--menu--active' : ''}`} to='/juragan-grosir/#faq'>FAQ</AnchorLink></li>
                                    <li>
                                        {buttonJoinGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <AnchorLink onAnchorLinkClick={() => setHash('#gabung')} className='apl-topbar--menu--button' to='/juragan-grosir/#gabung'>
                                                Gabung Sekarang
                                            </AnchorLink>
                                        }
                                    </li>
                                </ul>
                            }

                            {bizzyConnectPage.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                <ul>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#sistem-bizzy')} className={`${hash === '#sistem-bizzy' ? 'apl-topbar--menu--active' : ''}`} to='/bizzy-connect/#sistem-bizzy'>Kenapa Bizzy Connect</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#fitur')} className={`${hash === '#fitur' ? 'apl-topbar--menu--active' : ''}`} to='/bizzy-connect/#fitur'>Fitur</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#partners')} className={`${hash === '#partners' ? 'apl-topbar--menu--active' : ''}`} to='/bizzy-connect/#partners'>Brand Partners</AnchorLink></li>
                                    <li><AnchorLink onAnchorLinkClick={() => setHash('#faq')} className={`${hash === '#faq' ? 'apl-topbar--menu--active' : ''}`} to='/bizzy-connect/#faq'>FAQ</AnchorLink></li>
                                    <li>
                                        {buttonContactGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) &&
                                            <a className='apl-topbar--menu--button' href='mailto:partnership@warungpintar.co' target='_blank' rel='nofollow noopener noreferrer'>
                                                Hubungi Kami
                                            </a>
                                        }
                                    </li>
                                </ul>
                            }

                            {location.pathname.indexOf('blog') === 1 &&
                                <ul>
                                    <li><Link activeClassName='apl-topbar--menu--active' to='/blog/'>Semua Artikel</Link></li>
                                    <div className='apl-topbar--menu--dropdown'>
                                        <button type='button' className={`${pathnameDropdownGroup.includes(location.pathname.replace(/^\/|\/$/g, '')) ? 'apl-topbar--menu--active' : ''}`} onClick={this.handleShow}>
                                            Artikel
                                            <span />
                                        </button>
                                        <div className={`apl-topbar--menu--dropdown--content ${show ? 'apl-topbar--menu--dropdown--content--show' : ''}`}>
                                            {this.props.categories && this.props.categories.filter((item) => item.slug !== 'tidak-berkategori' && item.posts.nodes.length > 0).map((item, index) => (
                                                <Link key={index} to={`/blog/${item.slug}/`}>{item.name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <li>
                                        <a className='apl-topbar--menu--button' href='https://play.google.com/store/apps/details?id=co.warungpintar.mitra' target='_blank' rel='nofollow noopener noreferrer'>
                                            Instal Sekarang
                                        </a>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Topbar.displayName = 'Topbar'

export default Topbar