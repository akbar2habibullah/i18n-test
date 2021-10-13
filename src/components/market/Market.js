import React from 'react'
import PropTypes from 'prop-types'

const Market = ({ children, title }) => {
    return (
        <div className='apl-market'>
            <div className='container'>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}

Market.displayName = 'Market'

Market.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

Market.defaultProps = {
    children: null,
    title: null,
}

export default Market