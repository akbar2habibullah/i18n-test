import React from 'react'
import PropTypes from 'prop-types'

const JoinAccordionItem = ({ children, collapseIndex, index, title, imageSrc, onExpand }) => {
    return (
        <div className='apl-join--accordion--item'>
            <div
                role='button'
                tabIndex='0'
                className='apl-join--accordion--item--header'
                onClick={() => onExpand({ index, imageSrc })}
                onKeyDown={() => onExpand({ index, imageSrc })}
            >
                <h3>{title}</h3>
                <span className={`apl-join--accordion--item--header--arrow ${!collapseIndex?.includes(index) ? 'apl-join--accordion--item--header--arrow--down' : 'apl-join--accordion--item--header--arrow--up'}`}></span>
            </div>
            <div className={`apl-join--accordion--item--content ${collapseIndex?.includes(index) ? 'apl-join--accordion--item--content--collapse' : ''}`}>
                <div className='apl-join--accordion--item--content--wrapper'>
                    {children}
                </div>
            </div>
        </div>
    )
}

JoinAccordionItem.displayName = 'JoinAccordionItem'

JoinAccordionItem.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    imageSrc: PropTypes.object,
}

JoinAccordionItem.defaultProps = {
    children: null,
    title: null,
    imageSrc: null,
}

export default JoinAccordionItem