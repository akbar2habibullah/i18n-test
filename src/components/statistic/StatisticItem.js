import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const StatisticItem = ({ title, subtitle, subtitleMobile, imageSrc, imageAlt, isFit, isHelpPage, description }) => {
    return (
        <div className={`apl-statistic--item ${isFit ? 'apl-statistic--item--fit' : ''} ${isHelpPage ? 'apl-statistic--item--help-page' : ''} `}
        >
            { isHelpPage ? <h3 className={description ? 'title-with-description' : ''}>{title}</h3> : <h5>{title}</h5> }
            <p className='is-hidden-widescreen' dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            <p className={`is-hidden-until-widescreen ${description ? 'is-description' : ''}`} dangerouslySetInnerHTML={{ __html: subtitleMobile }}></p>
            <GatsbyImage
                className={`apl-statistic--item--image ${imageSrc.class}`}
                image={imageSrc.image}
                alt={imageAlt}
            />
        </div>
    )
}

StatisticItem.displayName = 'StatisticItem'

StatisticItem.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    subtitleMobile: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isFit: PropTypes.bool,
    isHelpPage: PropTypes.bool,
}

StatisticItem.defaultProps = {
    title: null,
    subtitle: null,
    subtitleMobile: null,
    imageSrc: null,
    imageAlt: null,
    isFit: false,
    isHelpPage: false,
}

export default StatisticItem