import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BrandDistributorItem = ({ content, contentColor, imageSrc }) => {
    return (
        <>
            <div className='column is-4-desktop is-12-tablet'>
                <div className='apl-branddistributor--item' style={{ backgroundColor: contentColor }}>
                    <p>{content}</p>
                    <GatsbyImage image={imageSrc.image} alt='brand-distributor-icon' style={{ width: imageSrc.width }} />
                </div>
            </div>
        </>
    )
}

BrandDistributorItem.displayName = 'BrandDistributorItem'

BrandDistributorItem.propTypes = {
    content: PropTypes.string,
    contentColor: PropTypes.string,
    imageSrc: PropTypes.object,
}

BrandDistributorItem.defaultProps = {
    content: null,
    contentColor: null,
    imageSrc: null,
}

export default BrandDistributorItem