import React, { PureComponent, Children } from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

import JoinAccordionItem from './JoinAccordionItem'

class JoinAccordion extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collapseIndex: [0],
            imageIndex: props.imageSrcDefault,
        }
        this.handleExpand = this.handleExpand.bind(this)
    }

    handleExpand(value) {
        this.setState(prevState => {
            if (!prevState.collapseIndex.includes(value.index)) {
                return {
                    collapseIndex: [value.index],
                    imageIndex: value.imageSrc,
                }
            }
        })
    }

    render() {
        const { children, title } = this.props
        const { collapseIndex, imageIndex } = this.state

        return (
            <BgImage className='apl-join--accordion' image={imageIndex ? imageIndex : null}>
                <div className='container'>
                    <h2 id='pendaftaran'>{title}</h2>
                    <div className='apl-join--accordion--base apl-join--accordion--compact'>
                        {Children.map(children, (item, index) => {
                            return (
                                <JoinAccordionItem
                                    key={index}
                                    index={index}
                                    collapseIndex={collapseIndex}
                                    title={item.props?.title}
                                    imageSrc={item.props?.imageSrc}
                                    children={item.props?.children}
                                    onExpand={this.handleExpand}
                                />
                            )
                        })}
                    </div>
                </div>
            </BgImage>
        )
    }
}

JoinAccordion.displayName = 'JoinAccordion'

JoinAccordion.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    imageSrcDefault: PropTypes.object,
}

JoinAccordion.defaultProps = {
    children: null,
    title: null,
    imageSrcDefault: null,
}

export default JoinAccordion