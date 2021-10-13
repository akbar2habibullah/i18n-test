import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Channel = ({ title, content, imageSrc, imageAlt, isSecondary }) => {
    return (
        <BgImage className={`apl-channel ${isSecondary ? 'apl-channel--secondary' : ''}`} image={imageSrc} alt={imageAlt}>
            <div className='container'>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </BgImage>
    )
}

Channel.displayName = 'Channel'

Channel.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
    isSecondary: PropTypes.bool,
}

Channel.defaultProps = {
    title: null,
    content: null,
    imageSrc: null,
    isSecondary: false,
}

export default Channel