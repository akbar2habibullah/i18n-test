import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const MediaItem = ({ content, buttonLabel, buttonLink, iconSrc, imageSrc, imageXsSrc, imageAlt }) => {
    const imagesSources = [
        imageXsSrc,
        {
            ...imageSrc,
            media: `(min-width: 769px)`,
        },
    ]

    return (
        <div className='apl-media--item'>
            <div className='apl-media--overlay'></div>
            <BgImage image={imagesSources} alt={imageAlt}>
                <div className='container'>
                    <div className='apl-media--meta'>
                        <GatsbyImage image={iconSrc} alt='media-icon' />
                        <h6>{content}</h6>
                        <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>
                            {buttonLabel}
                        </a>
                    </div>
                </div>
            </BgImage>
        </div>
    )
}

MediaItem.displayName = 'MediaItem'

MediaItem.propTypes = {
    content: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    iconSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
}

MediaItem.defaultProps = {
    content: null,
    buttonLabel: null,
    buttonLink: null,
    iconSrc: null,
    imageSrc: null,
    imageXsSrc: null,
}

export default MediaItem