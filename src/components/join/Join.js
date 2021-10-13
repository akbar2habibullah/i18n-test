import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Join = ({ children, title }) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className='apl-join'>
                <div className='container'>
                    <h2 id='syarat'>{title}</h2>
                    <div className='is-hidden-touch'>
                        <div className='columns is-multiline is-centered'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className='apl-join--mobile is-hidden-desktop'>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </>
    )
}

Join.displayName = 'Join'

Join.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

Join.defaultProps = {
    children: null,
    title: null,
}

export default Join