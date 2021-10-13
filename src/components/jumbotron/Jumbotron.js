import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Jumbotron = ({ title, subtitle, description, buttonPrimaryLabel, buttonSecondaryLabel, buttonPrimaryLink, buttonSecondaryLink, imageSrc }) => {
    return (
        <BgImage className='apl-jumbotron' image={imageSrc}>
            <div className='container'>
                <h5>{title}</h5>
                {description && (
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                )}
                <div className='apl-jumbotron--column'>
                    <a href={buttonPrimaryLink} className='apl-jumbotron--button--primary' target='_blank' rel='nofollow noopener noreferrer'>{buttonPrimaryLabel}</a>
                </div>
                {subtitle && <p>{subtitle}</p>}
                {buttonSecondaryLabel && <a href={buttonSecondaryLink} className='apl-jumbotron--button--link' target='_blank' rel='nofollow noopener noreferrer'>{buttonSecondaryLabel}</a>}
            </div>
        </BgImage>
    )
}

Jumbotron.displayName = 'Jumbotron'

Jumbotron.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    buttonPrimaryLabel: PropTypes.string,
    buttonSecondaryLabel: PropTypes.string,
    buttonPrimaryLink: PropTypes.string,
    buttonSecondaryLink: PropTypes.string,
    imageSrc: PropTypes.object,
}

Jumbotron.defaultProps = {
    title: null,
    subtitle: null,
    description: null,
    buttonPrimaryLabel: null,
    buttonSecondaryLabel: null,
    buttonPrimaryLink: null,
    buttonSecondaryLink: null,
    imageSrc: null,
}

export default Jumbotron