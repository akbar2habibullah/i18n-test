import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ImageRender = ({ className, image, style }) => (
    <GatsbyImage className={className} image={getImage(image)} alt='media-icon' style={style} />
)

const SocialImpactCollaborator = ({ children, title, subtitle, buttonLabel, buttonLink, images }) => {
    return (
        <div className='apl-socialimpactcollaborator'>
            <div className='container'>
                <div className='apl-socialimpactcollaborator--wrapper'>
                    <h2>{title}</h2>
                    <div className='columns is-multiline is-mobile'>
                        {children}
                    </div>
                </div>

                <div className='apl-socialimpactcollaborator--icon'>
                    <ImageRender className='is-hidden-touch' image={images.nodes[29]} style={{ width: '225px' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[30]} style={{ width: '82px' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[31]} style={{ width: '267px' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[32]} style={{ width: '154px' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[33]} style={{ width: '143px' }} />

                    <ImageRender className='is-hidden-touch' image={images.nodes[34]} style={{ width: '139px' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[35]} style={{ width: '218px', mixBlendMode: 'multiply' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[36]} style={{ width: '209px' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[37]} style={{ width: '197px', mixBlendMode: 'multiply' }} />
                    <ImageRender className='is-hidden-touch' image={images.nodes[38]} style={{ width: '238px' }} />

                    <ImageRender className='is-hidden-desktop' image={images.nodes[29]} style={{ width: '138px' }} />
                    <ImageRender className='is-hidden-desktop' image={images.nodes[35]} style={{ width: '114px', mixBlendMode: 'multiply' }} />
                    <ImageRender className='is-hidden-desktop' image={images.nodes[38]} style={{ width: '124px' }} />
                    <ImageRender className='is-hidden-desktop' image={images.nodes[31]} style={{ width: '139px' }} />
                    <ImageRender className='is-hidden-desktop' image={images.nodes[33]} style={{ width: '78px' }} />
                    <ImageRender className='is-hidden-desktop' image={images.nodes[34]} style={{ width: '69px' }} />
                    <ImageRender className='is-hidden-desktop' image={images.nodes[36]} style={{ width: '113px' }} />
                </div>
                <p>and many more...</p>

                <h3>{subtitle}</h3>
                <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
            </div>
        </div>
    )
}

SocialImpactCollaborator.displayName = 'SocialImpactCollaborator'

SocialImpactCollaborator.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    images: PropTypes.object,
}

SocialImpactCollaborator.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
    buttonLabel: null,
    buttonLink: null,
    images: null,
}

export default SocialImpactCollaborator