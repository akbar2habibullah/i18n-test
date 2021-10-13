import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const BusinessEcosystem = ({ children, title }) => {
    
    const settings = {
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:'30px'
    }

    return (
        <div className='apl-business-ecosystem'>
            <div className='container'>
                <h2>{title}</h2>
                <div className='columns is-4 is-multiline is-hidden-touch'>
                    {children}
                </div>
                <div className='is-hidden-desktop'>
                    <Slider {...settings}>
                        {children}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

BusinessEcosystem.displayName = 'BusinessEcosystem'

BusinessEcosystem.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

BusinessEcosystem.defaultProps = {
    children: null,
    title: null,
}

export default BusinessEcosystem