import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Community = ({ title, buttonLabel, buttonLink, imageSrc, imageAlt }) => {
    return (
        <BgImage className='apl-community' image={imageSrc} alt={imageAlt}>
            <div className='apl-community--overlay'></div>
            <div className='container'>
                <h5>{title}</h5>
                <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
            </div>
        </BgImage>
    )
}

Community.displayName = 'Community'

Community.propTypes = {
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    imageSrc: PropTypes.object,
}

Community.defaultProps = {
    title: null,
    buttonLabel: null,
    buttonLink: null,
    imageSrc: null,
}

export default Community