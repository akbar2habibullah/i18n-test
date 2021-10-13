import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const Modular = ({ title, subtitle, imageSrc, imageObjectSrc, imageAlt }) => {
    return (
        <BgImage className='apl-modular' image={imageSrc}>
            <div className='container'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <GatsbyImage image={imageObjectSrc} alt={imageAlt} />
            </div>
        </BgImage>
    )
}

Modular.displayName = 'Modular'

Modular.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageSrc: PropTypes.object,
    imageObjectSrc: PropTypes.object,
}

Modular.defaultProps = {
    title: null,
    subtitle: null,
    imageSrc: null,
    imageObjectSrc: null,
}

export default Modular