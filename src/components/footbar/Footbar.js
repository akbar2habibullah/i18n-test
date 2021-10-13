import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

import facebookIcon from '../../images/icons/facebook-icon.svg'
import instagramIcon from '../../images/icons/instagram-icon.svg'
import twitterIcon from '../../images/icons/twitter-icon.svg'
import linkedinIcon from '../../images/icons/linkedin-icon.svg'

const Footbar = ({ imageSrc, imageAlt }) => {
    return (
        <div className='apl-footbar'>
            <div className='container'>
                <div className='apl-footbar--brand'>
                    <GatsbyImage image={getImage(imageSrc)} alt={imageAlt} />
                </div>
                <div className='apl-footbar--list'>
                    <ul className='is-hidden-touch'>
                        <h5>Perusahaan</h5>
                        <li><Link to='/'>Beranda</Link></li>
                        <li><Link to='/tentang-perusahaan/'>Tentang Perusahaan</Link></li>
                        <li><Link to='/karir/'>Karir</Link></li>
                        <li><Link to='/privacy-policy/'>Kebijakan Privasi</Link></li>
                    </ul>
                    <ul className='is-hidden-touch'>
                        <h5>Solusi Kami</h5>
                        <li><Link to='/juragan-warung/'>Juragan Warung dan Kelontong</Link></li>
                        <li><Link to='/juragan-grosir/'>Juragan Grosir</Link></li>
                        <li><Link to='/distributor-fmcg/'>Distributor FMCG</Link></li>
                        <li><Link to='/brand-supplier/'>Brand dan Supplier</Link></li>
                    </ul>
                    <ul>
                        <h5 className='is-hidden-touch'>Hubungi Kami</h5>
                        <li><a href='mailto:partnership@warungpintar.co' target='_blank' rel='nofollow noopener noreferrer'>partnership@warungpintar.co</a></li>
                    </ul>
                    <ul>
                        <li><h6>Warung Pintar HQ 2</h6></li>
                        <li><p>Jl. Lauser No. 28, Gunung, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12120</p></li>
                    </ul>
                </div>
                <div className='apl-footbar--copyright'>
                    <ul>
                        <li><p>©2021 by Warung Pintar. All Right Reserved</p></li>
                    </ul>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/warungpintar.co.id/' target='_blank' rel='nofollow noopener noreferrer'>
                                <img src={facebookIcon} alt='facebook-icon' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/warungpintar.co/' target='_blank' rel='nofollow noopener noreferrer'>
                                <img src={instagramIcon} alt='instagram-icon' />
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/warungpintarco/' target='_blank' rel='nofollow noopener noreferrer'>
                                <img src={twitterIcon} alt='twitter-icon' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/company/warungpintar/' target='_blank' rel='nofollow noopener noreferrer'>
                                <img src={linkedinIcon} alt='linkedin-icon' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Footbar.displayName = 'Footbar'

Footbar.propTypes = {
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

Footbar.defaultProps = {
    imageSrc: null,
    imageAlt: null,
}

export default Footbar