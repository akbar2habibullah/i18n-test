import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const Benefit = ({ children, title }) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className='apl-benefit'>
                <div className='container'>
                    <h2 id='manfaat'>{title}</h2>
                    <div className='is-hidden-touch'>
                        <div className='columns is-multiline'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className='apl-benefit--mobile is-hidden-desktop'>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </>
    )
}

Benefit.displayName = 'Benefit'

Benefit.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

Benefit.defaultProps = {
    children: null,
    title: null,
}

export default Benefit