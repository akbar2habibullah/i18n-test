import React from 'react'
import PropTypes from 'prop-types'

const ThumbnaiReleted = ({ title, children }) => {
    return (
        <div className='apl-blog-thumbnail-releted'>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

ThumbnaiReleted.displayName = 'ThumbnaiReleted'

ThumbnaiReleted.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}

ThumbnaiReleted.defaultProps = {
    title: null,
    children: null,
}

export default ThumbnaiReleted