import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PageHeader = ({ title, breadcrumbs }) => {
    return (
        <div className='apl-blog-page-header'>
            <div className='apl-blog-page-header-breadcrumb'>
                {breadcrumbs.map((item, index) => {
                    if (item.link === null) {
                        return (
                            <span key={index}>
                                <span className='apl-blog-page-header-breadcrumb-link'>{item.title}</span>
                                <span className='apl-blog-page-header-breadcrumb-separator'>/</span>
                            </span>
                        )
                    } else {
                        return (
                            <span key={index}>
                                <span className='apl-blog-page-header-breadcrumb-link'>
                                    <Link to={`${item.link}/`}>{item.title}</Link>
                                </span>
                                <span className='apl-blog-page-header-breadcrumb-separator'>/</span>
                            </span>

                        )
                    }
                })}
            </div>

            <h4>{title}</h4>
        </div>
    )
}

PageHeader.displayName = 'PageHeader'

PageHeader.propTypes = {
    title: PropTypes.string,
    breadcrumbs: PropTypes.array,
}

PageHeader.defaultProps = {
    title: null,
    breadcrumbs: null,
}

export default PageHeader