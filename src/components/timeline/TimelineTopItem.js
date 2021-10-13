import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const TimelineTopItem = ({ title, content, imageSrc, imageAlt, isReverse, isFirstLine }) => {
    return (
        <div className={`apl-timeline--top--item ${isReverse ? 'apl-timeline--top--item--reverse' : ''}`}>
            <div className='apl-timeline--top--item--image'>
                <GatsbyImage image={imageSrc} alt={imageAlt} />
            </div>
            <div className={`apl-timeline--top--item--line ${isFirstLine ? 'apl-timeline--top--item--line--firstline' : ''}`}>
                <span />
                <span />
            </div>
            <div className={`apl-timeline--top--item--content ${isReverse ? 'apl-timeline--top--item--content--reverse' : ''}`}>
                <div>
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

TimelineTopItem.displayName = 'TimelineTopItem'

TimelineTopItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isReverse: PropTypes.bool,
    isFirstLine: PropTypes.bool,
}

TimelineTopItem.defaultProps = {
    title: null,
    content: null,
    imageSrc: null,
    imageAlt: null,
    isReverse: false,
    isFirstLine: false,
}

export default TimelineTopItem