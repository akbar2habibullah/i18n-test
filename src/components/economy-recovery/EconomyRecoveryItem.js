import React from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

const EconomyRecoveryItem = ({ title, description, imageSrc }) => {
    return (
        <div className='apl-economy-recovery--item'>
            <BgImage image={imageSrc}>
                <div className='apl-economy-recovery--item--content'>
                    <div dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </BgImage>
        </div>

    )
}

EconomyRecoveryItem.displayName = 'EconomyRecoveryItem'

EconomyRecoveryItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.object,
}

EconomyRecoveryItem.defaultProps = {
    title: null,
    description: null,
    imageSrc: null,
}

export default EconomyRecoveryItem