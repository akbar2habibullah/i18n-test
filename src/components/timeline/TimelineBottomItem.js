import React from 'react'
import PropTypes from 'prop-types'

const TimelineBottomItem = ({ activeIndex, index, title, content, imageSrc, isFull, handleClick }) => {
    return (
        <div className={`column ${isFull ? 'is-12' : 'is-6'}`}>
            <div
                role='button'
                tabIndex='0'
                className={`apl-timeline--bottom--item ${activeIndex === index ? 'apl-timeline--bottom--item--active' : ''}`}
                onClick={() => handleClick({ index, imageSrc })}
                onKeyDown={() => handleClick({ index, imageSrc })}
            >
                <b>{title}</b>
                <p>{content}</p>
            </div>
        </div>
    )
}

TimelineBottomItem.displayName = 'TimelineBottomItem'

TimelineBottomItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    isFull: PropTypes.bool,
}

TimelineBottomItem.defaultProps = {
    title: null,
    content: null,
    imageSrc: null,
    isFull: false,
}

export default TimelineBottomItem