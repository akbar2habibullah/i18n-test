import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Values = ({ children, title, subtitle }) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <>
            <div className='apl-values'>
                <div className='container'>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <Slider {...settings}>
                        {children}
                    </Slider>
                </div>
            </div>
        </>
    )
}

Values.displayName = 'Values'

Values.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

Values.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
}

export default Values