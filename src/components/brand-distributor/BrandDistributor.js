import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

const ImageRender = ({ image, className, width }) => (
    <GatsbyImage className={className} image={getImage(image)} alt='media-icon' style={{ width: width }} />
)

const BrandDistributor = ({ children, title, images }) => {
    const settings = {
        arrows: false,
        dots: true,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='apl-branddistributor'>
            <div className='container'>
                <div className='apl-branddistributor--wrapper'>
                    <h2>{title}</h2>
                    <div className='is-hidden-touch columns'>
                        {children}
                    </div>
                    <Slider className='is-hidden-desktop' {...settings}>
                        {children}
                    </Slider>
                </div>

                <div className='apl-branddistributor--icon'>
                    <ImageRender image={images.nodes[12]} className='is-hidden-touch' width='88px' />
                    <ImageRender image={images.nodes[13]} className='is-hidden-touch' width='141px' />
                    <ImageRender image={images.nodes[14]} className='is-hidden-touch' width='82px' />
                    <ImageRender image={images.nodes[19]} className='is-hidden-touch' width='145px' />
                    <ImageRender image={images.nodes[16]} className='is-hidden-touch' width='88px' />
                    <ImageRender image={images.nodes[15]} className='is-hidden-touch' width='78px' />
                    <ImageRender image={images.nodes[17]} className='is-hidden-touch' width='99px' />
                    <ImageRender image={images.nodes[18]} className='is-hidden-touch' width='109px' />
                    <ImageRender image={images.nodes[20]} className='is-hidden-touch' width='81px' />

                    <ImageRender image={images.nodes[27]} className='is-hidden-touch' width='85px' />
                    <ImageRender image={images.nodes[23]} className='is-hidden-touch' width='164px' />
                    <ImageRender image={images.nodes[25]} className='is-hidden-touch' width='145px' />
                    <ImageRender image={images.nodes[22]} className='is-hidden-touch' width='109px' />
                    <ImageRender image={images.nodes[21]} className='is-hidden-touch' width='147px' />
                    <ImageRender image={images.nodes[28]} className='is-hidden-touch' width='64px' />
                    <ImageRender image={images.nodes[26]} className='is-hidden-touch' width='122px' />
                    <ImageRender image={images.nodes[24]} className='is-hidden-touch' width='144px' />

                    <ImageRender image={images.nodes[12]} className='is-hidden-desktop' width='57px' />
                    <ImageRender image={images.nodes[13]} className='is-hidden-desktop' width='90px' />
                    <ImageRender image={images.nodes[14]} className='is-hidden-desktop' width='53px' />
                    <ImageRender image={images.nodes[19]} className='is-hidden-desktop' width='98px' />
                    <ImageRender image={images.nodes[16]} className='is-hidden-desktop' width='57px' />
                    <ImageRender image={images.nodes[15]} className='is-hidden-desktop' width='50px' />
                    <ImageRender image={images.nodes[17]} className='is-hidden-desktop' width='64px' />
                    <ImageRender image={images.nodes[18]} className='is-hidden-desktop' width='70px' />
                    <ImageRender image={images.nodes[20]} className='is-hidden-desktop' width='52px' />
                </div>
                <p>and many more...</p>
            </div>
        </div>
    )
}

BrandDistributor.displayName = 'BrandDistributor'

BrandDistributor.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    images: PropTypes.object,
}

BrandDistributor.defaultProps = {
    children: null,
    title: null,
    images: null,
}

export default BrandDistributor