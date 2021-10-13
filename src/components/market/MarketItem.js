import React from 'react'
import { GatsbyImage, withArtDirection } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const MarketItem = ({ title, content, imageSrc, imageXsSrc, imageAlt, isReverse }) => {
    const imagesSources = withArtDirection(imageXsSrc, [
        {
            media: `(min-width: 769px)`,
            image: imageSrc,
        },
    ])

    return (
        <div className={`apl-market--item ${isReverse ? 'apl-market--item--reverse' : ''}`}>
            <GatsbyImage image={imagesSources} alt={imageAlt} />
            <div className='apl-market--item--meta'>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

MarketItem.displayName = 'MarketItem'

MarketItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isReverse: PropTypes.bool,
}

MarketItem.defaultProps = {
    title: null,
    content: null,
    imageSrc: null,
    imageXsSrc: null,
    imageAlt: null,
    isReverse: false,
}

export default MarketItem
