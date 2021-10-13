import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BizzyFeatureItem = ({ index, title, content, imageSrc, imageAlt, expandIndex, onExpand }) => {
    return (
        <div className='apl-bizzy-feature--item columns is-gapless is-multiline is-desktop'>
            <div className={`column is-6-desktop text ${index === 3 && 'last'}`}>
                <div className='header' onClick={onExpand} onKeyDown={onExpand} role='button' tabIndex={0}>
                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                    <span className={`arrow ${expandIndex !== index && 'arrow-up'}`}></span>
                </div>
                <div className={`${expandIndex === index && 'is-collapse'} content`} dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            <div className={`column is-6-desktop image-container ${index === 3 && 'last'}`}>
                <GatsbyImage
                    className={`feature-image ${expandIndex === index && 'is-collapse'}`}
                    image={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </div>
    )
}

BizzyFeatureItem.displayName = 'BizzyFeatureItem'

BizzyFeatureItem.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    expandIndex: PropTypes.number,
    onExpand: PropTypes.func,
}

BizzyFeatureItem.defaultProps = {
    index: null,
    title: null,
    content: null,
    imageSrc: null,
    imageAlt: null,
    expandIndex: null,
}

export default BizzyFeatureItem