import React, { PureComponent, Children } from 'react'
import { BgImage } from 'gbimage-bridge'
import PropTypes from 'prop-types'

import TimelineTopItem from './TimelineTopItem'
import TimelineBottomItem from './TimelineBottomItem'

class Timeline extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 3,
            imageIndex: props.imageSrcDefault,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(value) {
        this.setState({
            activeIndex: value.index,
            imageIndex: value.imageSrc,
        })
    }

    render() {
        const { children, titleTop, titleBottom, subtitleTop, subtitleBottom, contentTop, contentBottom } = this.props
        const { activeIndex, imageIndex } = this.state

        return (
            <div className='apl-timeline'>
                <div className='container'>
                    <div className='apl-timeline--top'>
                        <h2>{titleTop}</h2>
                        <p>{contentTop}</p>
                        <h3>{subtitleTop}</h3>
                        {Children.map(children, (item, index) => {
                            if (item.type?.displayName === 'TimelineTopItem') {
                                return (
                                    <TimelineTopItem
                                        key={index}
                                        title={item.props?.title}
                                        content={item.props?.content}
                                        imageSrc={item.props?.imageSrc}
                                        imageAlt={item.props?.imageAlt}
                                        isReverse={item.props?.isReverse}
                                        isFirstLine={item.props?.isFirstLine}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
                <BgImage className='apl-timeline--bottom' image={imageIndex ? imageIndex : null}>
                    <div className='container'>
                        <h3>{subtitleBottom}</h3>
                        <div className='apl-timeline--bottom--line'>
                            <span />
                            <span />
                        </div>
                        <div className='apl-timeline--bottom--wrapper'>
                            <h4>{titleBottom}</h4>
                            <p>{contentBottom}</p>
                            <div className='columns is-multiline is-mobile'>
                                {Children.map(children, (item, index) => {
                                    if (item.type?.displayName === 'TimelineBottomItem') {
                                        return (
                                            <TimelineBottomItem
                                                key={index}
                                                index={index}
                                                activeIndex={activeIndex}
                                                title={item.props?.title}
                                                content={item.props?.content}
                                                imageSrc={item.props?.imageSrc}
                                                isFull={item.props?.isFull}
                                                handleClick={this.handleClick}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </BgImage>
            </div>
        )
    }
}

Timeline.displayName = 'Timeline'

Timeline.propTypes = {
    children: PropTypes.any,
    titleTop: PropTypes.string,
    titleBottom: PropTypes.string,
    subtitleTop: PropTypes.string,
    subtitleBottom: PropTypes.string,
    contentTop: PropTypes.string,
    contentBottom: PropTypes.string,
    imageSrcDefault: PropTypes.object,
}

Timeline.defaultProps = {
    children: null,
    titleTop: null,
    titleBottom: null,
    subtitleTop: null,
    subtitleBottom: null,
    contentTop: null,
    contentBottom: null,
    imageSrcDefault: null,
}

export default Timeline