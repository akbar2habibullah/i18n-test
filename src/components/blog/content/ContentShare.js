import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from 'react-share'
import PropTypes from 'prop-types'

const ContentShare = ({ url, title }) => {
    return (
        <div className='apl-blog-page-header'>
            <FacebookShareButton url={url}>
                <FacebookIcon size={20} round={true} /> <span className='is-hidden-touch'>Facebook</span>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={20} round={true} /> <span className='is-hidden-touch'>Twitter</span>
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title} separator=':: '>
                <WhatsappIcon size={20} round={true} /> <span className='is-hidden-touch'>Whatsapp</span>
            </WhatsappShareButton>
        </div>
    )
}

ContentShare.displayName = 'ContentShare'

ContentShare.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
}

ContentShare.defaultProps = {
    url: null,
    title: null,
}

export default ContentShare