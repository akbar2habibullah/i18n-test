import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const BizzySystemItem = ({ systemImages }) => {
    const [systemIndex, setSystemIndex] = useState(1)

    const handleClickSystem = (index) => {
        setSystemIndex(index)
    }

    const buttonSystems = [
        { title: 'Sistem Lainya A', class: 'other-system' },
        { title: 'Bizzy Connect', class: 'bizzy-system' },
        { title: 'Sistem Lainya B', class: 'other-system' },
    ]

    const settings = {
        dots: true,
        arrows: false,
        centerMode: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    }

    return (
        <div className='apl-bizzy-system--item'>
            <div className='is-hidden-mobile'>
                <div>
                    {systemImages.map((imageSrc, index) => (
                        <GatsbyImage key={index} className={`banner-image ${systemIndex !== index && ' is-hidden'}`} image={getImage(imageSrc)} alt='wpg-illustrator'/>
                    ))}
                </div>
                <div className='button-container'>
                    {buttonSystems.map((buttonSystem, index) => (
                        <button key={index} onClick={() => handleClickSystem(index)} className={`${systemIndex === index && buttonSystem.class}`}>{buttonSystem.title}</button>
                    ))}
                </div>
            </div>
            <div className='is-hidden-tablet'>
                <Slider {...settings}>
                    {systemImages.map((imageXsrc, index) => {
                        if (index > 2) {
                            return (
                                <div key={index} className='apl-bizzy-system--item--mobile'>
                                    <GatsbyImage className='slide-image' image={getImage(imageXsrc)} alt='wpg-illustrator'/>
                                </div>
                            )
                        }
                        return true
                    })}
                </Slider>
            </div>
        </div>
    )
}

BizzySystemItem.displayName = 'BizzySystemItem'

BizzySystemItem.propTypes = {
    buttonTitle: PropTypes.string,
    imageSrc: PropTypes.object,
}

BizzySystemItem.defaultProps = {
    buttonTitle: null,
    imageSrc: null
}

export default BizzySystemItem