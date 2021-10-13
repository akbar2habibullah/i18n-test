import React, { PureComponent, Children } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

import QnaAccordionItem from './QnaAccordionItem'

class QnaAccordion extends PureComponent {
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
        const { children, title, imageSrc } = this.props
        const { collapseIndex } = this.state

        return (
            <BgImage className='apl-qna--accordion' image={imageSrc}>
                <div className='container'>
                    <h2 id='faq'>{title}</h2>
                    <GatsbyImage className='is-hidden-desktop' image={imageSrc} />
                    <div className='apl-qna--accordion--base apl-qna--accordion--compact'>
                        {Children.map(children, (item, index) => {
                            return (
                                <QnaAccordionItem
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
            </BgImage>
        )
    }
}

QnaAccordion.displayName = 'QnaAccordion'

QnaAccordion.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    imageSrc: PropTypes.object,
}

QnaAccordion.defaultProps = {
    children: null,
    title: null,
    imageSrc: null,
}

export default QnaAccordion