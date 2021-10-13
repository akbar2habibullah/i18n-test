import React, { PureComponent } from 'react'
import Slider from 'react-slick'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

class Map extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0,
            mapData: props.mapData,
            infoData: [],
        }

        this.handleSlide = this.handleSlide.bind(this)
    }

    handleSlide(index) {
        this.setState({ slideIndex: index })
    }

    renderMapInfo() {
        const { mapData, slideIndex } = this.state

        let xIndex, jIndex, tempParentData, tempChildData, tempParentTemplate = [], tempChildTemplate = [], chunkParentData = 12
        for (xIndex = 0, jIndex = mapData[slideIndex].provinceItem.length; xIndex < jIndex; xIndex += chunkParentData) {
            tempParentData = mapData[slideIndex].provinceItem.slice(xIndex, xIndex + chunkParentData)

            let yIndex, kIndex, chunkChildData = 3
            for (yIndex = 0, kIndex = tempParentData.length; yIndex < kIndex; yIndex += chunkChildData) {
                tempChildData = tempParentData.slice(yIndex, yIndex + chunkChildData)
                tempChildTemplate.push(
                    <ul key={yIndex}>
                        {tempChildData.map((itemData, index) => (
                            <li key={(index)}>{itemData.cityDistrictsName}</li>
                        ))}
                    </ul>
                )
            }

            tempParentTemplate.push(
                <div key={xIndex} className='apl-map--info--list'>
                    {tempChildTemplate}
                </div>
            )
            tempChildTemplate = []
        }

        return tempParentTemplate
    }

    render() {
        const { title, patternSrc, imageSrc } = this.props
        const { slideIndex, mapData } = this.state

        const imagesSources = [
            imageSrc,
            patternSrc,
        ]

        const settings = {
            dots: true,
            arrows: true,
            centerMode: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        }

        return (
            <BgImage className='apl-map' image={imagesSources}>
                <div className='container'>
                    <h2 id='sebaran'>{title}</h2>
                </div>
                <div className='apl-map--info'>
                    <div className='apl-map--tab'>
                        <div className='container'>
                            <div className='tabs is-boxed'>
                                <ul>
                                    {mapData.map((itemData, index) => (
                                        <li
                                            key={index}
                                            role='presentation'
                                            className={`${slideIndex === index ? 'is-active' : ''}`}
                                            onClick={() => this.handleSlide(index)}
                                            onKeyDown={() => this.handleSlide(index)}
                                        >
                                            {itemData.provinceName}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <Slider {...settings}>
                            {this.renderMapInfo()}
                        </Slider>
                    </div>
                </div>
            </BgImage>
        )
    }
}

Map.displayName = 'Map'

Map.propTypes = {
    title: PropTypes.string,
    patternSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    mapData: PropTypes.array,
    handleSlide: PropTypes.func,
}

Map.defaultProps = {
    title: null,
    patternSrc: null,
    imageSrc: null,
    mapData: null,
    handleSlide: null,
}

export default Map