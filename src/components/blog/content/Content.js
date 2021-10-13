import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

import ContentShare from './ContentShare'

const Content = ({ title, author, date, categories, featuredImage, altText, content, shares }) => {
    return (
        <div className='apl-blog-content-detail'>
            <div className='apl-blog-content-detail-tags'>
                {categories && categories.map((item, index) => (
                    <span key={index} className='apl-blog-content-detail-tags-list'>
                        <Link to={`/blog/${item.slug}/`}>
                            {item.name}
                        </Link>
                    </span>
                ))}
            </div>
            <h1>{title}</h1>
            <div className='apl-blog-content-detail-meta'>
                <div className='apl-blog-content-detail-meta-author'>
                    <span>
                        <span className='apl-blog-content-detail-meta-author-title'>Oleh {author}</span>
                        <span className='apl-blog-content-detail-meta-author-separator'>/</span>
                    </span>
                    <span>
                        <span className='apl-blog-content-detail-meta-author-title'>{date}</span>
                        <span className='apl-blog-content-detail-meta-author-separator'>/</span>
                    </span>
                </div>
                <div className='apl-blog-content-detail-meta-share'>
                    <span>
                        <span className='apl-blog-content-detail-meta-share-title'>Share</span>
                        <span className='apl-blog-content-detail-meta-share-separator'>:</span>
                    </span>
                    <ContentShare
                        url={shares.url}
                        title={shares.title}
                        via={shares.via}
                        hashtags={shares.hashtags}
                    />
                </div>
            </div>
            <div className='apl-blog-content-detail-body'>
                <GatsbyImage image={featuredImage} alt={altText} />
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            <div className='apl-blog-content-detail-meta'>
                <div className='apl-blog-content-detail-meta-share'>
                    <span>
                        <span className='apl-blog-content-detail-meta-share-title'>Share</span>
                        <span className='apl-blog-content-detail-meta-share-separator'>:</span>
                    </span>
                    <ContentShare
                        url={shares.url}
                        title={shares.title}
                        via={shares.via}
                        hashtags={shares.hashtags}
                    />
                </div>
            </div>
        </div>
    )
}

Content.displayName = 'Content'

Content.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    categories: PropTypes.array,
    featuredImage: PropTypes.object,
    altText: PropTypes.string,
    content: PropTypes.any,
}

Content.defaultProps = {
    title: null,
    author: null,
    date: null,
    categories: null,
    featuredImage: null,
    altText: null,
    content: null,
}

export default Content