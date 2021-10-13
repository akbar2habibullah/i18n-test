import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const SocialImpactCollaboratorItem = ({ content, contentColor, thumbnailSrc, imageSrc, imageAlt }) => {
    return (
        <>
            <div className='column is-3-widescreen is-6-desktop is-6-tablet is-6-mobile'>
                <div className='apl-socialimpactcollaborator--item' style={{ backgroundColor: contentColor }}>
                    <div className='apl-socialimpactcollaborator--overlay' style={{ backgroundImage: `linear-gradient(to top, ${contentColor} 84%, transparent)` }}></div>
                    <GatsbyImage image={thumbnailSrc} alt={imageAlt} />
                    <div className='apl-socialimpactcollaborator--item--content'>
                        <p>{content}</p>
                        <GatsbyImage className='is-hidden-mobile' image={imageSrc.image} alt='social-impact-collaborartor-icon' style={{ width: imageSrc.width }} />
                        <GatsbyImage className='is-hidden-tablet' image={imageSrc.image} alt='social-impact-collaborartor-icon' style={{ width: imageSrc.widthXs }} />
                    </div>
                </div>
            </div>
        </>
    )
}

SocialImpactCollaboratorItem.displayName = 'SocialImpactCollaboratorItem'

SocialImpactCollaboratorItem.propTypes = {
    content: PropTypes.string,
    contentColor: PropTypes.string,
    thumbnailSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

SocialImpactCollaboratorItem.defaultProps = {
    content: null,
    contentColor: null,
    thumbnailSrc: null,
    imageSrc: null,
    imageAlt: null,
}

export default SocialImpactCollaboratorItem