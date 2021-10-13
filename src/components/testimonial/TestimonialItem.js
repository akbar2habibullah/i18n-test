import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const TestimonialItem = ({ content, name, description, iconSrc, imageSrc, imageAlt, isGrosirPintar, isHelpPage }) => {
    return (
        <div className='apl-testimonial--item'>
            <div className='columns is-reverse-columns'>
                <div className='column is-6-widescreen is-12-tablet'>
                    {isGrosirPintar && <GatsbyImage className='apl-testimonial--item--icon' image={iconSrc} alt='grosir-pintar-icon' />}
                    {isHelpPage ? <p className={'content'} dangerouslySetInnerHTML={{ __html: content }}></p> : <p className={'non-help'} dangerouslySetInnerHTML={{ __html: content }}></p>}
                    <div className='apl-testimonial--item--fixed'>
                        <p>{name}</p>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='column is-6-widescreen is-12-tablet'>
                    {isHelpPage ?
                        <div style={{ display: 'flex' }}><GatsbyImage className='apl-testimonial--item--image' image={imageSrc} alt={imageAlt} /></div>
                        : <GatsbyImage className='apl-testimonial--item--image' image={imageSrc} alt={imageAlt} />
                    }
                </div>
            </div>
        </div>
    )
}

TestimonialItem.displayName = 'TestimonialItem'

TestimonialItem.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    iconSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isGrosirPintar: PropTypes.bool,
    isHelpPage: PropTypes.bool
}

TestimonialItem.defaultProps = {
    content: null,
    name: null,
    description: null,
    iconSrc: null,
    imageSrc: null,
    imageAlt: null,
    isGrosirPintar: false,
    isHelpPage: false
}

export default TestimonialItem
