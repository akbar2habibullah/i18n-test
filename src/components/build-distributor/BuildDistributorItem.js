import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BuildDistributorItem = ({ title, content, lists, imageSrc, imageAlt, isReverse }) => {
    return (
        <>
            <div className='apl-build-distributor--item columns is-multiline is-hidden-mobile'>
                <div className='column is-6 is-centered'>
                    {isReverse ? (
                        <GatsbyImage className='image-build reverse' image={imageSrc} alt={imageAlt} />
                    ) : (
                        <>
                            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                            <p dangerouslySetInnerHTML={{ __html: content }}></p>
                            <div className='list'>
                                <ul>{lists?.map((list, index) => <li key={index}>{list}</li>)}</ul>
                            </div>
                        </>
                    )}
                </div>
                <div className='column is-6 is-centered'>
                    {isReverse ? (
                        <div className={'is-reverse'}>
                            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                            <p dangerouslySetInnerHTML={{ __html: content }}></p>
                            <div className='list'>
                                <ul>{lists?.map((list, index) => <li key={index}>{list}</li>)}</ul>
                            </div>
                        </div>
                    ) : (
                        <GatsbyImage className='image-build' image={imageSrc} alt={imageAlt} />
                    )}
                </div>
            </div>
            <div className='apl-build-distributor--item columns is-multiline is-hidden-tablet'>
                <div className='column'>
                    <GatsbyImage className='image-build' image={imageSrc} alt={imageAlt} />
                </div>
                <div className='column content is-centered'>
                    <h3 dangerouslySetInnerHTML={{ __html: title.replace('<br/>', '').replace('<br/>', '') }}></h3>
                    <p dangerouslySetInnerHTML={{ __html: content?.replace('<br/>', '') }}></p>
                    <div className='list'>
                        <ul>{lists?.map((list, index) => <li key={index}>{list}</li>)}</ul>
                    </div>
                </div>
            </div>
        </>
    )
}

BuildDistributorItem.displayName = 'BuildDistributorItem'

BuildDistributorItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    lists: PropTypes.array,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    isReverse: PropTypes.bool,
}

BuildDistributorItem.defaultProps = {
    title: null,
    content: null,
    lists: [],
    imageSrc: null,
    imageAlt: null,
    isReverse: null,
}

export default BuildDistributorItem