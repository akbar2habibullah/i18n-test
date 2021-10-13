import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Campaign = ({ children, title, iconSrc }) => {
    const settings = {
        arrows: false,
        dots: true,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='apl-campaign'>
            <div className='container'>
                <GatsbyImage image={iconSrc} alt='wpg-icon' />
                <h2>{title}</h2>
                <div className='is-hidden-touch columns'>
                    {children}
                </div>
                <Slider className='is-hidden-desktop' {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

Campaign.displayName = 'Campaign'

Campaign.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    iconSrc: PropTypes.object,
}

Campaign.defaultProps = {
    children: null,
    title: null,
    iconSrc: null,
}

export default Campaign