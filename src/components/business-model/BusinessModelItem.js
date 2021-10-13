import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BusinessModelItem = ({ title, subtitle, imageSrc, imageAlt }) => {
    return (
        <div className='apl-business-model--item'>
            <GatsbyImage className='image' image={imageSrc} alt={imageAlt} />
            <div className='content'>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

BusinessModelItem.displayName = 'BusinessModelItem'

BusinessModelItem.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

BusinessModelItem.defaultProps = {
    title: null,
    subtitle: null,
    imageSrc: null,
    imageAlt: null,
}

export default BusinessModelItem