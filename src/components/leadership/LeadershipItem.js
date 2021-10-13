import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const LeadershipItem = ({ name, position, content, imageSrc, imageAlt }) => {
    return (
        <div className='apl-leadership--item'>
            <GatsbyImage image={imageSrc} alt={imageAlt} />
            <div className='apl-leadership--item--content'>
                <p>{content}</p>
                <div className='apl-leadership--item--content--lower'>
                    <h4>{name}</h4>
                    <b dangerouslySetInnerHTML={{ __html: position }}></b>
                </div>
            </div>
        </div>
    )
}

LeadershipItem.displayName = 'LeadershipItem'

LeadershipItem.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
    imageSrc: PropTypes.object,
}

LeadershipItem.defaultProps = {
    name: null,
    position: null,
    content: null,
    imageSrc: null,
}

export default LeadershipItem