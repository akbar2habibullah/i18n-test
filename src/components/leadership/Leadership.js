import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Leadership = ({ children, title }) => {
    const settings = {
        arrows: true,
        dots: false,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1216,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className='apl-leadership'>
            <div className='container'>
                <h2>{title}</h2>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

Leadership.displayName = 'Leadership'

Leadership.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

Leadership.defaultProps = {
    children: null,
    title: null,
}

export default Leadership