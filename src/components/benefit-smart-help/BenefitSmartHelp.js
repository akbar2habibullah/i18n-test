import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const BenefitSmartHelp = ({ children, title }) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className='apl-smart-benefit'>
            <div className='container'>
                <h5 id='benefit-bantuan-pintar'>{title}</h5>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

BenefitSmartHelp.displayName = 'BenefitSmartHelp'

BenefitSmartHelp.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

BenefitSmartHelp.defaultProps = {
    children: null,
    title: null,
}

export default BenefitSmartHelp