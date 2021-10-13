import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const BusinessAssistance = ({ children, title, subtitle,  }) => {
    
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    }

    return (
        <div className='container'>
            <div className={'apl-business-assistance'}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

BusinessAssistance.displayName = 'BusinessAssistance'

BusinessAssistance.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.any,
}

BusinessAssistance.defaultProps = {
    title: null,
    subtitle: null,
    children: null,
}

export default BusinessAssistance