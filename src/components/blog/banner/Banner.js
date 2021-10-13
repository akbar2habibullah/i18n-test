import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Banner = ({ title, iconSrc, imageSrc, imageXsSrc }) => {
    const imagesSources = [
        imageXsSrc,
        {
            ...imageSrc,
            media: `(min-width: 769px)`,
        },
    ]

    return (
        <BgImage className='apl-blog-banner' image={imagesSources}>
            <div className='container'>
                {iconSrc && <GatsbyImage image={iconSrc} alt='wpg-logo' />}
                <p>{title}</p>
            </div>
        </BgImage>
    )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
    title: PropTypes.string,
    iconSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
}

Banner.defaultProps = {
    title: null,
    iconSrc: null,
    imageSrc: null,
    imageXsSrc: null,
}

export default Banner