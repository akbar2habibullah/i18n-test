import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const DownloadItemOther = ({ content, imageSrc }) => {
    return (
        <div className='column is-3-desktop is-6-tablet is-12-mobile'>
            <div className='apl-download--other--item'>
                <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt='wpg-illustration' />
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    )
}

DownloadItemOther.displayName = 'DownloadItemOther'

DownloadItemOther.propTypes = {
    content: PropTypes.string,
    imageSrc: PropTypes.object,
}

DownloadItemOther.defaultProps = {
    content: null,
    imageSrc: null,
}

export default DownloadItemOther