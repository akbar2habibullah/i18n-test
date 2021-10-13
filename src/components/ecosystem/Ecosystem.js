import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Ecosystem = ({ title, subtitle, imageSrc, imageXsSrc, imageAlt }) => {
    const imagesSources = [
        imageXsSrc,
        {
            ...imageSrc,
            media: `(min-width: 769px)`,
        },
    ]

    return (
        <BgImage className='apl-ecosystem' image={imagesSources} alt={imageAlt}>
            <div className='apl-ecosystem--overlay'></div>
            <div className='container'>
                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                <p>{subtitle}</p>
            </div>
        </BgImage>
    )
}

Ecosystem.displayName = 'Ecosystem'

Ecosystem.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageSrc: PropTypes.object,
    imageXsSrc: PropTypes.object,
}

Ecosystem.defaultProps = {
    title: null,
    subtitle: null,
    imageSrc: null,
    imageXsSrc: null,
}

export default Ecosystem