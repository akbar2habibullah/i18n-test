import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Ads = ({ title, buttonLabel, buttonLink, iconSrc, iconAlt, imageSrc, imageAlt, isRedirect, setHash }) => {
    return (
        <BgImage className='apl-ads' image={imageSrc} alt={imageAlt}>
            <div className='container'>
                {iconSrc && <GatsbyImage image={iconSrc} alt={iconAlt} />}
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                {isRedirect ? (
                    <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
                ) : (
                    <AnchorLink onAnchorLinkClick={() => setHash('#gabung')} to={buttonLink}>{buttonLabel}</AnchorLink>
                )}
            </div>
        </BgImage>
    )
}

Ads.displayName = 'Ads'

Ads.propTypes = {
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    iconSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    isRedirect: PropTypes.bool,
}

Ads.defaultProps = {
    title: null,
    buttonLabel: null,
    buttonLink: null,
    iconSrc: null,
    imageSrc: null,
    isRedirect: true,
}

export default Ads