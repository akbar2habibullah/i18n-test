import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const ThumbnailItem = ({ title, link, date, featuredImage, altText, isSticky, categories }) => {
    return (
        <div className={`column ${isSticky ? 'is-12' : 'is-6'}`}>
            <div className={`apl-blog-thumbnail-item ${isSticky ? 'apl-blog-thumbnail-item-sticky' : ''}`}>
                <div className='apl-blog-thumbnail-item-wrapper'>
                    <GatsbyImage image={featuredImage} alt={altText} />
                    <div className={`apl-blog-thumbnail-item-tag ${isSticky ? '' : 'is-hidden-touch'}`}>
                        {categories && categories.map((item, index) => (
                            <span key={index} className='apl-blog-thumbnail-item-tag-list'>
                                <Link to={`/blog/${item.slug}/`}>
                                    {item.name}
                                </Link>
                            </span>
                        ))}
                    </div>
                </div>
                <div className='apl-blog-thumbnail-item-content'>
                    <div className={`apl-blog-thumbnail-item-tag ${isSticky ? 'is-hidden' : 'is-hidden-desktop'}`}>
                        {categories && categories.map((item, index) => (
                            <span key={index} className='apl-blog-thumbnail-item-tag-list'>
                                <Link to={`/blog/${item.slug}/`}>
                                    {item.name}
                                </Link>
                            </span>
                        ))}
                    </div>
                    <Link to={`/blog/${link}/`}>
                        <h5>{title}</h5>
                    </Link>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

ThumbnailItem.displayName = 'ThumbnailItem'

ThumbnailItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string,
    featuredImage: PropTypes.object,
    altText: PropTypes.string,
    isSticky: PropTypes.bool,
    categories: PropTypes.array,
}

ThumbnailItem.defaultProps = {
    title: null,
    link: null,
    date: null,
    featuredImage: null,
    altText: null,
    isSticky: false,
    categories: null,
}

export default ThumbnailItem