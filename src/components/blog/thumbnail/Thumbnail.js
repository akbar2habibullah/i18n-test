import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({ children }) => {
    return (
        <div className='apl-blog-thumbnail'>
            <div className='columns is-multiline'>
                {children}
            </div>
        </div>
    )
}

Thumbnail.displayName = 'Thumbnail'

Thumbnail.propTypes = {
    children: PropTypes.any,
}

Thumbnail.defaultProps = {
    children: null,
}

export default Thumbnail