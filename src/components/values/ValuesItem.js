import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const ValuesItem = ({ title, titleMobile, content, imageSrc, imageAlt }) => {
    return (
        <div className='apl-values--item'>
            <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt={imageAlt} />
            <h4 className='is-hidden-touch' dangerouslySetInnerHTML={{ __html: title }}></h4>
            <h4 className='is-hidden-desktop'>{titleMobile}</h4>
            <p>{content}</p>
        </div>
    )
}

ValuesItem.displayName = 'ValuesItem'

ValuesItem.propTypes = {
    title: PropTypes.string,
    titleMobile: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

ValuesItem.defaultProps = {
    title: null,
    titleMobile: null,
    content: null,
    imageSrc: null,
    imageAlt: null,
}

export default ValuesItem