import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const CovidRespondItem = ({ title, subtitle, imageSrc, imageAlt }) => {
    return (
        <div className={'column apl-covidrespond--item'}>
            <GatsbyImage image={imageSrc.image} className={imageSrc.class ?? 'covid-image-01'} alt={imageAlt} />
            <div>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            </div>
        </div>
    )
}

CovidRespondItem.displayName = 'CovidRespondItem'

CovidRespondItem.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
}

CovidRespondItem.defaultProps = {
    title: null,
    subtitle: null,
    imageSrc: null,
    imageAlt: null,
}

export default CovidRespondItem