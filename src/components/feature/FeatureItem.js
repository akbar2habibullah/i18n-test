import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const FeatureItem = ({ children, imageSrc, imageXsSrc, imageAlt, isReverse }) => {
    return (
        <>
            <div className='column is-12 is-hidden-touch'>
                <div className={`apl-feature--item ${isReverse ? 'apl-feature--item--reverse' : ''}`}>
                    <GatsbyImage image={imageSrc} alt={imageAlt} />
                    <div className='apl-feature--item--meta'>
                        {children}
                    </div>
                </div>
            </div>
            <div className='apl-feature--mobile--item is-hidden-desktop'>
                <GatsbyImage image={imageXsSrc} alt={imageAlt} />
                <div className='apl-feature--mobile--item--meta'>
                    {children}
                </div>
            </div>
        </>
    )
}

FeatureItem.displayName = 'FeatureItem'

FeatureItem.propTypes = {
    children: PropTypes.any,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isReverse: PropTypes.bool,
}

FeatureItem.defaultProps = {
    children: null,
    imageSrc: null,
    imageAlt: null,
    isReverse: false,
}

export default FeatureItem