import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BusinessAssistanceItem = ({ content, imageSrc1, imageSrc2, imageAlt1, imageAlt2 }) => {
    return (
        <div className='apl-business-assistance--item'>
            <div className='columns'>
                <div className='column iz-6'>
                    <GatsbyImage className='image-01' image={imageSrc1} alt={imageAlt1} />
                </div>
                <div className='column is-6 apl-business-assistance--item--content'>
                    <GatsbyImage className='image-02' image={imageSrc2} alt={imageAlt2} />
                    <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>

    )
}

BusinessAssistanceItem.displayName = 'BusinessAssistanceItem'

BusinessAssistanceItem.propTypes = {
    content: PropTypes.string,
    imageSrc1: PropTypes.object,
    imageSrc2: PropTypes.object,
    imageAlt1: PropTypes.string,
    imageAlt2: PropTypes.string,
}

BusinessAssistanceItem.defaultProps = {
    content: null,
    imageSrc1: null,
    imageSrc2: null,
    imageAlt1: null,
    imageAlt2: null,
}

export default BusinessAssistanceItem