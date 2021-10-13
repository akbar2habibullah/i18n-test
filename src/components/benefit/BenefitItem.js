import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BenefitItem = ({ title, content, imageSrc, imageAlt }) => {
    return (
        <>
            <div className='column is-3 is-hidden-touch'>
                <div className='apl-benefit--item'>
                    <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt={imageAlt} />
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
            <div className='apl-benefit--item--mobile is-hidden-desktop'>
                <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt={imageAlt} />
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </>
    )
}

BenefitItem.displayName = 'BenefitItem'

BenefitItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

BenefitItem.defaultProps = {
    title: null,
    content: null,
    imageSrc: null,
    imageAlt: null,
}

export default BenefitItem