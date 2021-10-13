import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Apply = ({ title, subtitle, buttonPrimaryLabel, buttonPrimaryLink, buttonSecondaryLabel, buttonSecondaryLink, imageSrc, imageAlt, isFixed, isCompact }) => {
    return (
        <BgImage className={`apl-apply ${isFixed ? 'apl-apply--fixed' : ''} ${isCompact ? 'apl-apply--compact' : ''}`} image={imageSrc} alt={imageAlt}>
            <div className='container'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <div>
                    <a href={buttonPrimaryLink} className='apl-apply--button--primary' target='_blank' rel='nofollow noopener noreferrer'>{buttonPrimaryLabel}</a>
                </div>
                <div>
                    <a href={buttonSecondaryLink} className='apl-apply--button--secondary' target='_blank' rel='nofollow noopener noreferrer'>{buttonSecondaryLabel}</a>
                </div>
            </div>
        </BgImage>
    )
}

Apply.displayName = 'Apply'

Apply.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonPrimaryLabel: PropTypes.string,
    buttonPrimaryLink: PropTypes.string,
    buttonSecondaryLabel: PropTypes.string,
    buttonSecondaryLink: PropTypes.string,
    imageSrc: PropTypes.object,
    isFixed: PropTypes.bool,
    isCompact: PropTypes.bool,
}

Apply.defaultProps = {
    title: null,
    subtitle: null,
    buttonPrimaryLabel: null,
    buttonPrimaryLink: null,
    buttonSecondaryLabel: null,
    buttonSecondaryLink: null,
    imageSrc: null,
    isFixed: false,
    isCompact: false,
}

export default Apply