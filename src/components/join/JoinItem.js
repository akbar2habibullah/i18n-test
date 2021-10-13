import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const JoinItem = ({ title, imageSrc, imageAlt }) => {
    return (
        <>
            <div className='column is-4 is-hidden-touch'>
                <div className='apl-join--item'>
                    <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt={imageAlt} />
                    <div className='apl-join--item--wrapper'>
                        <h6>{title}</h6>
                    </div>
                </div>
            </div>
            <div className='apl-join--item--mobile is-hidden-desktop'>
                <GatsbyImage className={imageSrc.class} image={imageSrc.image} alt={imageAlt} />
                <div className='apl-join--item--mobile--wrapper'>
                    <h6>{title}</h6>
                </div>
            </div>
        </>
    )
}

JoinItem.displayName = 'JoinItem'

JoinItem.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

JoinItem.defaultProps = {
    title: null,
    imageSrc: null,
    imageAlt: null,
}

export default JoinItem