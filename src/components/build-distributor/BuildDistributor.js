import React from 'react'
import PropTypes from 'prop-types'

const BuildDistributor = ({ children, title }) => {
    return (
        <div className='apl-build-distributor'>
            <div className='container'>
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

BuildDistributor.displayName = 'BuildDistributor'

BuildDistributor.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

BuildDistributor.defaultProps = {
    children: null,
    title: null,
}

export default BuildDistributor