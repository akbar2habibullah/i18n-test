import React from 'react'
import PropTypes from 'prop-types'

const FaqAccordionItem = ({ collapseIndex, index, title, content, onExpand }) => {
    return (
        <div className='apl-faq--accordion--item'>
            <div role='button' tabIndex='0' className='apl-faq--accordion--item--header' onClick={() => onExpand(index)} onKeyDown={() => onExpand(index)}>
                <p>{title}</p>
                <span className={`apl-faq--accordion--item--header--arrow ${!collapseIndex?.includes(index) ? 'apl-faq--accordion--item--header--arrow--down' : 'apl-faq--accordion--item--header--arrow--up'}`}></span>
            </div>
            <div className={`apl-faq--accordion--item--content ${collapseIndex?.includes(index) ? 'apl-faq--accordion--item--content--collapse' : ''}`}>
                <div className='apl-faq--accordion--item--content--wrapper'>
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
            </div>
        </div>
    )
}

FaqAccordionItem.displayName = 'FaqAccordionItem'

FaqAccordionItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

FaqAccordionItem.defaultProps = {
    title: null,
    content: null,
}

export default FaqAccordionItem