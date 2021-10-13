import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const CovidRespond = ({ children, title, subtitle }) => {
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='apl-covidrespond'>
            <div className='container'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <div className='columns is-8 is-hidden-touch'>
                    {children}
                </div>
            </div>
            <div className='is-hidden-desktop'>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

CovidRespond.displayName = 'CovidRespond'

CovidRespond.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

CovidRespond.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
}

export default CovidRespond