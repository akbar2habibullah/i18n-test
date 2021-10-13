import React from 'react'
import PropTypes from 'prop-types'

const QnaAccordionItem = ({ collapseIndex, index, title, content, onExpand }) => {
    return (
        <div className='apl-qna--accordion--item'>
            <div role='button' tabIndex='0' className='apl-qna--accordion--item--header' onClick={() => onExpand(index)} onKeyDown={() => onExpand(index)}>
                <h3>{title}</h3>
                <span className={`apl-qna--accordion--item--header--arrow ${!collapseIndex?.includes(index) ? 'apl-qna--accordion--item--header--arrow--down' : 'apl-qna--accordion--item--header--arrow--up'}`}></span>
            </div>
            <div className={`apl-qna--accordion--item--content ${collapseIndex?.includes(index) ? 'apl-qna--accordion--item--content--collapse' : ''}`}>
                <div className='apl-qna--accordion--item--content--wrapper'>
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
            </div>
        </div>
    )
}

QnaAccordionItem.displayName = 'QnaAccordionItem'

QnaAccordionItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

QnaAccordionItem.defaultProps = {
    title: null,
    content: null,
}

export default QnaAccordionItem