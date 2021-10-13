import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BenefitSmartItem = ({ title, content, imageSrc, imageAlt, classContent }) => {
    return (
        <div className='apl-smart-benefit--item'>
            <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt={imageAlt} />
            <h6 dangerouslySetInnerHTML={{ __html: title }}></h6>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    )
}

BenefitSmartItem.displayName = 'BenefitSmartItem'

BenefitSmartItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

BenefitSmartItem.defaultProps = {
    title: null,
    content: null,
    imageSrc: null,
    imageAlt: null,
}

export default BenefitSmartItem