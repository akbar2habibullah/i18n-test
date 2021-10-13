import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Partner = ({ children, title, isSecondary }) => {
    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className={`apl-partner ${isSecondary ? 'apl-partner--secondary' : ''}`}>
            <div className='container'>
                <div className='apl-partner--wrapper'>
                    <h2>{title}</h2>
                </div>
            </div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

Partner.displayName = 'Partner'

Partner.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    isSecondary: PropTypes.bool,
}

Partner.defaultProps = {
    children: null,
    title: null,
    isSecondary: false,
}

export default Partner