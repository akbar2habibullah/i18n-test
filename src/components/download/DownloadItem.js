import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const DownloadItem = ({ title, imageSrc, imageAlt }) => {
    return (
        <BgImage className='apl-download--item' image={imageSrc} alt={imageAlt}>
            <div className='apl-download--overlay'></div>
            <div className='apl-download--content'>
                <h4>{title}</h4>
            </div>
        </BgImage>
    )
}

DownloadItem.displayName = 'DownloadItem'

DownloadItem.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.object,
}

DownloadItem.defaultProps = {
    title: null,
    imageSrc: null,
}

export default DownloadItem