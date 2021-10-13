import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'

import FaqAccordionItem from './FaqAccordionItem'

class FaqAccordion extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collapseIndex: [0],
        }

        this.handleExpand = this.handleExpand.bind(this)
    }

    handleExpand(value) {
        this.setState(prevState => {
            if (prevState.collapseIndex.includes(value)) {
                return {
                    collapseIndex: [],
                }
            } else {
                return {
                    collapseIndex: [value],
                }
            }
        })
    }

    render() {
        const { children, title } = this.props
        const { collapseIndex } = this.state

        return (
            <div className='apl-faq--accordion'>
                <div className='container'>
                    <h2>{title}</h2>
                    <div className='apl-faq--accordion--base apl-faq--accordion--compact'>
                        {Children.map(children, (item, index) => {
                            return (
                                <FaqAccordionItem
                                    key={index}
                                    index={index}
                                    collapseIndex={collapseIndex}
                                    title={item.props?.title}
                                    content={item.props?.content}
                                    onExpand={this.handleExpand}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

FaqAccordion.displayName = 'FaqAccordion'

FaqAccordion.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
}

FaqAccordion.defaultProps = {
    children: null,
    title: null,
}

export default FaqAccordion