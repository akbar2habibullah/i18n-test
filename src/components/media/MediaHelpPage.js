import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ImageRender = ({ image, width }) => (
    <GatsbyImage className='mobile-media' image={getImage(image)} alt='media-icon' style={{ width: width }} />
)

const MediaHelpPage = ({ imageSrc, images }) => {
    return (
        <div className='apl-media-help-page' style={{ backgroundColor: '#F6F5F5' }}>
            <div className='container'>
                <GatsbyImage className='is-hidden-mobile' image={imageSrc} alt='media-icon' />
                <div className='is-hidden-tablet'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginInline: 15, marginBottom: 20 }}>
                        <ImageRender image={images.nodes[1]} width='97px' />
                        <ImageRender image={images.nodes[2]} width='101px' />
                        <ImageRender image={images.nodes[3]} width='71px' />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginInline: 15, marginBottom: 1 }}>
                        <ImageRender image={images.nodes[4]} width='117px' />
                        <ImageRender image={images.nodes[5]} width='90px' />
                        <ImageRender image={images.nodes[6]} width='62px' />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginInline: 15 }}>
                        <ImageRender image={images.nodes[7]} width='120px' />
                        <ImageRender image={images.nodes[8]} width='63px' />
                        <ImageRender image={images.nodes[9]} width='68px' />
                    </div>
                </div>
                <p
                    className='is-hidden-tablet'
                    style={{
                        marginTop: 20,
                        fontSize: 14,
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    and many more...
                </p>
            </div>
        </div>
    )
}

export default MediaHelpPage