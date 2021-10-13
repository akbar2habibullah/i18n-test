import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Feature = ({ children, title }) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        ],
    }

    return (
        <>
            <div className='apl-feature'>
                <div className='container'>
                    <h2>{title}</h2>
                    <div className='is-hidden-touch'>
                        <div className='columns is-multiline'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className='apl-feature--mobile is-hidden-desktop'>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </>
    )
}

Feature.displayName = 'Feature'

Feature.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

Feature.defaultProps = {
    children: null,
    title: null,
}

export default Feature