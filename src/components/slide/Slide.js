import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Slide = ({ children }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='apl-slide'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

Slide.displayName = 'Slide'

Slide.propTypes = {
    children: PropTypes.any,
}

Slide.defaultProps = {
    children: null,
}

export default Slide