import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Testimonial = ({ children, title, subtitle, isInverse, isSecondary, helpPage }) => {
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
        <div className={`apl-testimonial ${isInverse ? 'apl-testimonial--inverse' : ''} ${isSecondary ? 'apl-testimonial--secondary' : ''} ${helpPage ? 'apl-testimonial--help-page' : ''} `}>
            <div className='container'>
                <h2 id='testimoni'>{title}</h2>
                {subtitle && <h3>{subtitle}</h3>}
            </div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

Testimonial.displayName = 'Testimonial'

Testimonial.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    isInverse: PropTypes.bool,
    isSecondary: PropTypes.bool,
    helpPage: PropTypes.bool
}

Testimonial.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
    isInverse: false,
    isSecondary: false,
    helpPage: false
}

export default Testimonial