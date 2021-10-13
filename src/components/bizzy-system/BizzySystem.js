import React from 'react'
import PropTypes from 'prop-types'

const BizzySystem = ({ children, title }) => {

    return (
        <div className='apl-bizzy-system'>
            <div className='container'>
                <h2 id='sistem-bizzy'>{title}</h2>
                {children}
            </div>
        </div>
    )
}

BizzySystem.displayName = 'BizzySystem'

BizzySystem.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

BizzySystem.defaultProps = {
    children: null,
    title: null,
}

export default BizzySystem