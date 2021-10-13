import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const SlideItem = ({ title, content, buttonLabel, buttonLink, logoSrc, logoSlim, imageSrc, imageXsSrc, imageAlt, labelImage, withIcon, withButton, withLogo, isReverse, isRedirect, isVariation, setHash, hideLogoMobile, bgPosition }) => {
    return (
        <div className='apl-slide--item'>
            <BgImage image={imageSrc} style={{ backgroundPosition: bgPosition ?? 'center' }} alt={imageAlt}>
                <div className='container'>
                    <GatsbyImage className='is-hidden-desktop' image={imageXsSrc} alt={imageAlt} />
                    <div className={`apl-slide--meta ${isVariation ? 'apl-slide--meta--variation' : ''}`}>
                        {withLogo ? (
                            <>
                                <h1 className={`${isReverse ? 'apl-slide--title--inverse' : ''} ${hideLogoMobile ? 'is-hidden-desktop yellow-title' : 'is-hidden'}`}>{title}</h1>
                                <GatsbyImage className={`apl-slide--logo ${logoSlim ? 'logo-slim' : ''} ${hideLogoMobile ? 'is-hidden-touch' : ''}`} image={logoSrc} alt='media-icon' />
                            </>
                        ) : (
                            <h5 className={`${isReverse ? 'apl-slide--title--inverse' : ''}`}>{title}</h5>
                        )}
                        <div className={`${logoSlim ? 'large-content' : ''}`} dangerouslySetInnerHTML={{ __html: content }}></div>
                        {withButton ? isRedirect ? (
                            <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
                        ) : (
                            <AnchorLink onAnchorLinkClick={() => setHash('#gabung')} to={buttonLink}>{buttonLabel}</AnchorLink>
                        ) : (
                            <></>
                        )}
                        {withIcon && <GatsbyImage image={labelImage} alt='media-icon' style={{ width: '320px' }} />}
                    </div>
                </div>
            </BgImage>
        </div>
    )
}

SlideItem.displayName = 'SlideItem'

SlideItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    logoSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
    withIcon: PropTypes.bool,
    withButton: PropTypes.bool,
    withLogo: PropTypes.bool,
    isReverse: PropTypes.bool,
    isRedirect: PropTypes.bool,
    isVariation: PropTypes.bool,
    logoSlim: PropTypes.bool,
    setHash: PropTypes.func,
    hideLogoMobile: PropTypes.bool,
    bgPosition: PropTypes.string
}

SlideItem.defaultProps = {
    title: null,
    content: null,
    buttonLabel: null,
    buttonLink: null,
    logoSrc: null,
    imageSrc: null,
    imageXsSrc: null,
    withIcon: false,
    withButton: false,
    withLogo: false,
    isReverse: false,
    isRedirect: true,
    logoSlim: false,
    isVariation: false,
    hideLogoMobile: false,
    bgPosition: null
}

export default SlideItem