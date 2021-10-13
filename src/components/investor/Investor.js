import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const Investor = ({ title, subtitle, investorData }) => {
    return (
        <div className='apl-investor'>
            <div className='container'>
                <div className='apl-investor--wrapper'>
                    <h5>{title}</h5>
                    <h6 className='is-hidden-touch'>{subtitle}</h6>
                </div>

                <div className='apl-investor--icon'>
                    {investorData.map((itemData, index) => (
                        <a key={index} href={itemData.link} target='_blank' rel='nofollow noopener noreferrer'>
                            <GatsbyImage image={getImage(itemData.imageSrc.localFile)} alt={itemData.imageAlt} style={{ width: itemData.imageWidth }} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

Investor.displayName = 'Investor'

Investor.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    investorData: PropTypes.array,
}

Investor.defaultProps = {
    title: null,
    subtitle: null,
    investorData: null,
}

export default Investor