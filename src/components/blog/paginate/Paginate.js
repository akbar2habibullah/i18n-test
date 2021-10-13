import React from 'react'
import PropTypes from 'prop-types'

const Paginate = ({ children }) => {
    return (
        <div className='apl-blog-paginate'>
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

Paginate.displayName = 'Paginate'

Paginate.propTypes = {
    children: PropTypes.any,
}

Paginate.defaultProps = {
    children: null,
}

export default Paginate