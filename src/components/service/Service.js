import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Service = ({ children, title, subtitle }) => {
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    }

    return (
        <>
            <div className='apl-service'>
                <div className='container'>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                    <div className='is-hidden-touch'>
                        <div className='columns is-multiline'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className='apl-service--mobile is-hidden-desktop'>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </>
    )
}

Service.displayName = 'Service'

Service.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

Service.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
}

export default Service