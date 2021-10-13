import React from 'react'
import Slider from 'react-slick'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const BusinessModel = ({ children, title, bgImageSrc }) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    }

    return (
        <BgImage image={bgImageSrc}>
            <div className='apl-business-model'>
                <div className='container'>
                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                    <div className='cards-container is-hidden-widescreen'>
                        {children}
                    </div>
                    <div className='is-hidden-until-widescreen'>
                        <Slider {...settings}>
                            {children}
                        </Slider>
                    </div>
                </div>
            </div>
        </BgImage>
    )
}

BusinessModel.displayName = 'BusinessModel'

BusinessModel.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    bgImageSrc: PropTypes.object,
}

BusinessModel.defaultProps = {
    children: null,
    title: null,
    bgImageSrc: null,
}

export default BusinessModel