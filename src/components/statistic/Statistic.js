import React from 'react'
import PropTypes from 'prop-types'

const Statistic = ({ children, title, isTitleYellow, isHelpPage }) => {
    return (
        <div className='apl-statistic'>
            <div className='container'>
                {isHelpPage ? (<h2 className={isTitleYellow ? 'is-yellow' : ''}>{title}</h2>) : (<h2 className={isTitleYellow ? 'is-yellow' : ''}>{title}</h2>)}
                {children}
            </div>
        </div>
    )
}

Statistic.displayName = 'Statistic'

Statistic.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    isTitleYellow: PropTypes.bool,
    isHelpPage: PropTypes.bool,
}

Statistic.defaultProps = {
    children: null,
    title: null,
    isTitleYellow: false,
    isHelpPage: false,
}

export default Statistic