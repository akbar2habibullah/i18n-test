import React from 'react'
import PropTypes from 'prop-types'

const BlockText = ({ title, content }) => {
    return (
        <div className='apl-blocktext'>
            <div className='container'>
                <h5>{title}</h5>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    )
}

BlockText.displayName = 'BlockText'

BlockText.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

BlockText.defaultProps = {
    title: null,
    content: null,
}

export default BlockText