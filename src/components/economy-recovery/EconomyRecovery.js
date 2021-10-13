import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const EconomyRecovery = ({ children, title, subtitle }) => {
    const desktopSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
    }

    const mobileSettings = {
        ...desktopSettings,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className='container'>
                <div className='apl-economy-recovery'>
                    <h2>{title}</h2>
                    <p className='is-hidden-touch' dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                    <p className='is-hidden-desktop' dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                    <div className='is-hidden-touch'>
                        <Slider {...desktopSettings}>
                            {children}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='apl-economy-recovery--mobile is-hidden-desktop'>
                <Slider {...mobileSettings}>
                    {children}
                </Slider>
            </div>
        </>
    )
}

EconomyRecovery.displayName = 'EconomyRecovery'

EconomyRecovery.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

EconomyRecovery.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
}

export default EconomyRecovery