import React, { useState } from 'react'
import Pagination from 'bulma-pagination-react'
import { graphql, navigate } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Banner from '../components/blog/banner/Banner'
import Thumbnail from '../components/blog/thumbnail/Thumbnail'
import ThumbnailItem from '../components/blog/thumbnail/ThumbnailItem'
import Paginate from '../components/blog/paginate/Paginate'
import PageHeader from '../components/blog/page-header/PageHeader'

import useSiteMetadata from '../hooks/useSiteMetadata'

const Post = ({ data, location, pageContext }) => {
    const { name, slug, group, index, first, last, pageCount } = pageContext
    const [currentPage, setCurrentPage] = useState(index)
    const { siteUrl } = useSiteMetadata()

    const handlePaginate = (page, pageCount, first, last, slug) => {
        if (page === 1) {
            navigate(`/blog/${slug}`)
        } else {
            if (page < 1 && first) {
                return true
            } else if (page > pageCount && last) {
                return true
            } else {
                navigate(`/blog/${slug}/${page}`)
            }
        }

        setCurrentPage(page)
    }

    return (
        <Layout location={location} logo={data.logoImage} categories={data.allWpCategory.nodes}>
            <Seo
                title='Kategori Blog - Warung Pintar Group'
                canonical={`${siteUrl}${location.pathname}`}
                meta={[
                    { name: 'description', content: 'Warung Pintar adalah perusahaan teknologi yang mentransformasi bisnis mikro di Indonesia. Warung Pintar menciptakan ekosistem yang memungkinkan bisnis.' },
                    { name: 'keywords', content: '' },
                    { name: 'robots', content: 'index, follow' },
                ]}
            />

            <Banner
                title='Tempatnya Juragan Dapat Informasi Terbaru Seputar Bisnis Warung!'
                iconSrc={getImage(data.komunitasPintarIcon)}
                imageSrc={getImage(data.blogBackgrounds.nodes[0])}
                imageXsSrc={getImage(data.blogBackgrounds.nodes[1])}
            />

            <div className='apl-blog-content'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-8'>
                            <PageHeader
                                title={name}
                                breadcrumbs={[
                                    { title: 'Blog', link: '/blog' },
                                    { title: name, link: null }
                                ]}
                            />

                            <Thumbnail>
                                {group.map((node) => {
                                    return (
                                        <ThumbnailItem
                                            key={node.id}
                                            title={node.title}
                                            link={node.slug}
                                            date={node.date}
                                            isSticky={false}
                                            featuredImage={node.featuredImage ? getImage(node.featuredImage.node.localFile) : getImage(data.noImageIcon)}
                                            altText={node.featuredImage ? node.featuredImage.node.altText : 'wpg-noimage'}
                                            categories={node.categories.nodes.filter((item) => item.slug !== 'tidak-berkategori').map((item) => item)}
                                        />
                                    )
                                })}

                            </Thumbnail>

                            <Paginate>
                                <Pagination
                                    pages={pageCount}
                                    currentPage={currentPage}
                                    onChange={(page) => handlePaginate(page, pageCount, first, last, slug)}
                                />
                            </Paginate>
                        </div>

                        <div className='column is-4'></div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Post

export const queryData = graphql`
    {
        allWpCategory {
            nodes {
                id
                name
                slug
                posts {
                    nodes {
                        id
                    }
                }
            }
        }

        blogBackgrounds: allFile(filter: { relativeDirectory: { eq: "blogs" } }, sort: { fields: [name], order: ASC }) {
            nodes {
                childImageSharp {
                    gatsbyImageData(
                        width: 1000
                    )
                }
            }
        }
        komunitasPintarIcon: file(relativePath: { eq: "icons/wpg-icon-09.png" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 1000
                )
            }
        }
        noImageIcon: file(relativePath: { eq: "icons/no-image.png" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 1000
                )
            }
        }
        logoImage: file(relativePath: {eq: "warpin-logo-inverse.png"}) {
            childImageSharp {
                gatsbyImageData(
                    width: 600
                )
            }
        }
    }
`