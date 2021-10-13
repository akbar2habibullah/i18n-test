import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Contact = ({ title, subtitle, buttonLabel, buttonLink, imageSrc, isFixed, isCompact }) => {
    return (
        <BgImage className={`apl-contact ${isFixed ? 'apl-contact--fixed' : ''} ${isCompact ? 'apl-contact--compact' : ''}`} image={imageSrc}>
            <div className='container'>
                <h2>{title}</h2>
                {isCompact && <h6>{subtitle}</h6>}
                <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
            </div>
        </BgImage>
    )
}

Contact.displayName = 'Contact'

Contact.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    imageSrc: PropTypes.object,
    isFixed: PropTypes.bool,
    isCompact: PropTypes.bool,
}

Contact.defaultProps = {
    title: null,
    subtitle: null,
    buttonLabel: null,
    buttonLink: null,
    imageSrc: null,
    isFixed: false,
    isCompact: false,
}

export default Contact