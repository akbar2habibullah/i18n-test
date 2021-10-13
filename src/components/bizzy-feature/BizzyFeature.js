import React, { useState } from 'react'
import PropTypes from 'prop-types'

import BizzyFeatureItem from './BizzyFeatureItem'

const BizzyFeature = ({ children, title }) => {
    const [expandIndex, setExpandIndex] = useState(0)

    const handleExpand = (i) => {
        if (expandIndex === i) {
            setExpandIndex(null)
        } else {
            setExpandIndex(i)
        }
    }

    return (
        <div className={'apl-bizzy-feature'}>
            <div className={'container'}>
                <h2 id={'fitur'}>{title}</h2>
                <div>
                    {children.map((value, index) => {
                        return (
                            <BizzyFeatureItem
                                key={index}
                                expandIndex={expandIndex}
                                index={index}
                                title={value.props.title}
                                content={value.props.content}
                                imageSrc={value.props.imageSrc}
                                imageAlt={value.props.imageAlt}
                                onExpand={() => handleExpand(index)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

BizzyFeature.displayName = 'BizzyFeature'

BizzyFeature.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

BizzyFeature.defaultProps = {
    children: null,
    title: null,
}

export default BizzyFeature