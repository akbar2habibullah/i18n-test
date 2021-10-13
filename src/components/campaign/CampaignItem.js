import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const CampaignItem = ({ content, imageSrc, imageAlt }) => {
    return (
        <div className='column is-6-desktop is-12-tablet'>
            <BgImage className='apl-campaign--item' image={imageSrc} alt={imageAlt}>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </BgImage>
        </div>
    )
}

CampaignItem.displayName = 'CampaignItem'

CampaignItem.propTypes = {
    content: PropTypes.string,
    contentColor: PropTypes.string,
    imageSrc: PropTypes.object,
}

CampaignItem.defaultProps = {
    content: null,
    contentColor: null,
    imageSrc: null,
}

export default CampaignItem