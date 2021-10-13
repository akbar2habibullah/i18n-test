import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const ServiceItem = ({ title, buttonLabel, buttonLink, imageSrc, imageAlt, isPrimary }) => {
    return (
        <>
            <div className={`column ${isPrimary ? 'is-4' : 'is-12'}`}>
                <div className={`apl-service--item is-hidden-touch ${isPrimary ? 'apl-service--item--primary' : ''}`}>
                    <GatsbyImage
                        image={imageSrc.image}
                        alt={imageAlt}
                        style={{ width: `${imageSrc.width}` }}
                    />
                    <h4>{title}</h4>
                    <Link to={buttonLink}>{buttonLabel}</Link>
                </div>
            </div>
            <div className='apl-service--item--mobile is-hidden-desktop'>
                <GatsbyImage
                    image={imageSrc.image}
                    alt={imageAlt}
                    style={{ width: `${imageSrc.widthXs}` }}
                />
                <h4>{title}</h4>
                <Link to={buttonLink}>{buttonLabel}</Link>
            </div>
        </>
    )
}

ServiceItem.displayName = 'ServiceItem'

ServiceItem.propTypes = {
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isPrimary: PropTypes.bool,
}

ServiceItem.defaultProps = {
    title: null,
    buttonLabel: null,
    buttonLink: null,
    imageSrc: null,
    imageAlt: null,
    isPrimary: null,
}

export default ServiceItem