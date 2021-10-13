import React from 'react'
import { GatsbyImage, withArtDirection } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const PartnerItem = ({ content, contentColor, iconSrc, imageSrc, imageXsSrc, imageAlt }) => {
    const imagesSources = withArtDirection(imageXsSrc, [
        {
            media: `(min-width: 769px)`,
            image: imageSrc,
        },
    ])

    return (
        <div className='apl-partner--item' style={{ backgroundColor: contentColor }}>
            <div className='apl-partner--overlay' style={{ backgroundImage: `linear-gradient(to top, ${contentColor} 84%, transparent)` }}></div>
            <GatsbyImage image={imagesSources} alt={imageAlt} />
            <div className='apl-partner--item--content'>
                <p>{content}</p>
                <GatsbyImage image={iconSrc.image} alt='brand-distributor-icon' style={{ width: iconSrc.width }} />
            </div>
        </div>
    )
}

PartnerItem.displayName = 'PartnerItem'

PartnerItem.propTypes = {
    content: PropTypes.string,
    iconSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

PartnerItem.defaultProps = {
    content: null,
    iconSrc: null,
    imageSrc: null,
    imageXsSrc: null,
    imageAlt: null,
}

export default PartnerItem
