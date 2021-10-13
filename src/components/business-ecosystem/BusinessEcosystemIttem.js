import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const BusinessEcosystemItem = ({ title, description, lists, classImage, imageSrc, imageAlt, imageXsSrc, imageXsAlt, isColumn }) => {
    return (
        <>
            <div className={`column is-hidden-touch ${isColumn ? 'is-12' : 'is-6'}`}>
                <div className={`apl-business-ecosystem--item ${isColumn ? 'card-column' : 'card-multiline'}`}>
                    <div className='columns is-4 is-multiline'>
                        <div className={`column ${isColumn ? 'is-6' : 'is-12'}`}>
                            <div className='content'>
                                <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                                {lists.length > 0 ? (
                                    <ul>{lists.map((list, index) => <li key={index}>{list}</li>)}</ul>
                                ) : (
                                    <p>{description}</p>
                                )}
                            </div>
                        </div>
                        <div className={`column ${isColumn ? 'is-6' : 'is-12'}`}>
                            <div style={{ display: 'flex', height: '100%' }}>
                                <GatsbyImage
                                    className={`${classImage}`}
                                    image={imageSrc}
                                    alt={imageAlt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='is-hidden-desktop column'>
                <div className='apl-business-ecosystem--item card-multiline'>
                    <div className='columns is-4 is-multiline is-gapless'>
                        <div className='column is-12'>
                            <div className='content'>
                                <h3 dangerouslySetInnerHTML={{ __html: title.replace('<br/>', '') }}></h3>
                                {lists.length > 0 ? (
                                    <ul>{lists.map((list, index) => <li key={index}>{list}</li>)}</ul>
                                ) : (
                                    <p>{description}</p>
                                )}
                            </div>
                        </div>
                        <div className='is-12 column image-container'>
                                <GatsbyImage
                                    className={`${classImage}`}
                                    image={imageXsSrc ?? imageSrc}
                                    alt={imageXsAlt}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

BusinessEcosystemItem.displayName = 'BusinessEcosystemItem'

BusinessEcosystemItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    lists: PropTypes.array,
    classImage: PropTypes.string,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    imageXsSrc: PropTypes.object,
    imageXsAlt: PropTypes.string,
    isColumn: PropTypes.bool,
}

BusinessEcosystemItem.defaultProps = {
    title: null,
    description: null,
    lists: [],
    classImage: null,
    imageSrc: null,
    imageAlt: null,
    imageXsSrc: null,
    imageXsAlt: null,
    isColumn: null,
}

export default BusinessEcosystemItem