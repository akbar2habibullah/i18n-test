import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const SocialImpactReport = ({ children, title, subtitle, buttonLabel, buttonLink }) => {
    const settings = {
        arrows: true,
        dots: true,
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
        <div className='apl-socialimpactreport'>
            <div className='container'>
                <h2>{title}</h2>
                <Slider {...settings}>
                    {children}
                </Slider>

                <h6>{subtitle}</h6>
                <a className='apl-socialimpactreport--link' href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
            </div>
        </div>
    )
}

SocialImpactReport.displayName = 'SocialImpactReport'

SocialImpactReport.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
}

SocialImpactReport.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
    buttonLabel: null,
    buttonLink: null,
}

export default SocialImpactReport