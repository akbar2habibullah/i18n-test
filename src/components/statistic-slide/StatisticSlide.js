import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const StatisticSlide = ({ children }) => {
    const settings = {
        arrows: true,
        dots: true,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='apl-statisticslide'>
            <div className='container'>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

StatisticSlide.displayName = 'StatisticSlide'

StatisticSlide.propTypes = {
    children: PropTypes.any,
}

StatisticSlide.defaultProps = {
    children: null,
}

export default StatisticSlide