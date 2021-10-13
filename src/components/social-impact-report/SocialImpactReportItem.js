import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const SocialImpactReportItem = ({ title, link, imageSrc, imageAlt }) => {
    return (
        <div className='apl-socialimpactreport--item'>
            <GatsbyImage image={imageSrc} alt={imageAlt} />
            <Link to={link}>
                <h4>{title}</h4>
            </Link>
        </div>
    )
}

SocialImpactReportItem.displayName = 'SocialImpactReportItem'

SocialImpactReportItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

SocialImpactReportItem.defaultProps = {
    title: null,
    link: null,
    imageSrc: null,
    imageAlt: null,
}

export default SocialImpactReportItem