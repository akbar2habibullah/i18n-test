import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Banner from '../components/blog/banner/Banner'
import PageHeader from '../components/blog/page-header/PageHeader'
import Thumbnail from '../components/blog/thumbnail/Thumbnail'
import ThumbnailItem from '../components/blog/thumbnail/ThumbnailItem'
import ThumbnaiReleted from '../components/blog/thumbnail/ThumbnaiReleted'
import Content from '../components/blog/content/Content'

import useSiteMetadata from '../hooks/useSiteMetadata'

const Post = ({ data, location }) => {
    const { siteUrl } = useSiteMetadata()

    const postId = data.wpPost.id
    const postData = data.wpPost
    const seoData = data.wpPost.seo

    const shares = {
        title: postData.title,
        url: `${siteUrl}${location.pathname}`,
    }

    let breadcrumbs = [
        { title: 'Blog', link: '/blog' },
        { title: postData.title, link: null }
    ]
    postData.categories.nodes.filter((item) => item.slug !== 'tidak-berkategori').map((item) => {
        breadcrumbs.splice(1, 0, {
            title: item.name,
            link: `/blog/${item.slug}`,
        })

        return true
    })

    return (
        <Layout location={location} logo={data.logoImage} categories={data.allWpCategory.nodes}>
            <Seo
                title={seoData.title}
                canonical={`${siteUrl}${location.pathname}`}
                meta={[
                    { name: 'description', content: seoData.metaDesc },
                    { name: 'keywords', content: seoData.metaKeywords },
                    { name: 'robots', content: `${seoData.metaRobotsNoindex}, ${seoData.metaRobotsNofollow}` },
                    { property: 'og:url', content: `${siteUrl}${location.pathname}` },
                    { property: 'og:title', content: seoData.opengraphTitle },
                    { property: 'og:description', content: seoData.opengraphDescription },
                    { property: 'og:type', content: seoData.opengraphType },
                    { property: 'og:site_name', content: seoData.opengraphSiteName },
                    { property: 'og:image', content: seoData.opengraphImage?.sourceUrl },
                    { name: 'twitter:title', content: seoData.twitterTitle },
                    { name: 'twitter:description', content: seoData.twitterDescription },
                    { name: 'twitter:image', content: seoData.twitterImage?.sourceUrl },
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:site', content: '@warungpintarco' },
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
                                breadcrumbs={breadcrumbs}
                            />

                            <Content
                                title={postData.title}
                                author={postData.author.node.name}
                                date={postData.date}
                                categories={[]}
                                content={postData.content}
                                featuredImage={postData.featuredImage ? getImage(postData.featuredImage.node.localFile) : getImage(data.noImageIcon)}
                                altText={postData.featuredImage ? postData.featuredImage.node.altText : 'wpg-noimage'}
                                shares={shares}
                            />

                            <ThumbnaiReleted title='Konten Terkait'>
                                <Thumbnail>
                                    {postData.categories.nodes[0].posts.nodes.filter(item => item.id !== postId).slice(0, 2).map((postData) => {
                                        return (
                                            <ThumbnailItem
                                                key={postData.id}
                                                title={postData.title}
                                                link={postData.slug}
                                                date={postData.date}
                                                isSticky={false}
                                                featuredImage={postData.featuredImage ? getImage(postData.featuredImage.node.localFile) : getImage(data.noImageIcon)}
                                                altText={postData.featuredImage ? postData.featuredImage.node.altText : 'wpg-noimage'}
                                                categories={postData.categories.nodes.filter((item) => item.slug !== 'tidak-berkategori').map((item) => item)}
                                            />
                                        )
                                    })}
                                </Thumbnail>
                            </ThumbnaiReleted>
                        </div>

                        <div className='column is-4'></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Post

export const queryData = graphql`
    query($id: String!) {
        wpPost(id: { eq: $id }) {
            id
            title
            slug
            seo {
                canonical
                title
                metaDesc
                metaKeywords
                metaRobotsNofollow
                metaRobotsNoindex
                opengraphDescription
                opengraphSiteName
                opengraphTitle
                opengraphType
                opengraphUrl
                opengraphImage {
                    sourceUrl
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    sourceUrl
                }
            }
            date(formatString: "DD MMMM YYYY")
            excerpt
            content
            author {
                node {
                    name
                }
            }
            featuredImage {
                node {
                    altText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                width: 1000
                            )
                        }
                    }
                }
            }
            categories {
                nodes {
                    id
                    name
                    slug
                    posts {
                        nodes {
                            id
                            title
                            slug
                            date(formatString: "DD MMMM YYYY")
                            featuredImage {
                                node {
                                    altText
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(
                                                width: 1000
                                            )
                                        }
                                    }
                                }
                            }
                            categories {
                                nodes {
                                    id
                                    name
                                    slug
                                }
                            }
                        }
                    }
                }
            }
            tags {
                nodes {
                    id
                    slug
                    name
                }
            }
        }
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
        blogBackgrounds: allFile(filter: { relativeDirectory: { eq: "blogs" } }, sort: { order: ASC, fields: [name] }) {
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