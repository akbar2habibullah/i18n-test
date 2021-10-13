const path = require('path')
const { slash } = require('gatsby-core-utils')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allWpPost (sort: {fields: date, order: DESC}) {
                edges {
                    node {
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
                                localFile {
                                    publicURL
                                }
                            }
                            twitterTitle
                            twitterDescription
                            twitterImage {
                                localFile {
                                    publicURL
                                }
                            }
                        }
                        date(formatString: "DD MMMM YYYY")
                        modifiedGmt
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
            allWpCategory {
                edges {
                    node {
                        id
                        name
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
                                localFile {
                                    publicURL
                                }
                            }
                            twitterTitle
                            twitterDescription
                            twitterImage {
                                localFile {
                                    publicURL
                                }
                            }
                        }
                        posts {
                            nodes {
                                id
                                title
                                slug
                                date(formatString: "DD/MM/YYYY")
                                modifiedGmt
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
            }
        }
    `)

    if (result.errors) {
        console.log(result.errors)
    }

    const { allWpPost, allWpCategory } = result.data

    const blogTemplate = path.resolve(`./src/templates/blog.js`)
    const postTemplate = path.resolve(`./src/templates/post.js`)
    const categoryTemplate = path.resolve(`./src/templates/category.js`)

    createPaginatedPages({
        edges: allWpPost.edges,
        createPage: createPage,
        pageTemplate: slash(blogTemplate),
        pageLength: 9,
        pathPrefix: 'blog',
        context: {},
        buildPath: (index, pathPrefix) => index > 1 ? `/${pathPrefix}/${index}/` : `/${pathPrefix}/`,
    })

    allWpPost.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.slug}/`,
            component: slash(postTemplate),
            context: {
                id: node.id,
                lastmoddate: node.modifiedGmt,
            },
        })
    })

    allWpCategory.edges.forEach(({ node }) => {
        createPaginatedPages({
            edges: node.posts.nodes,
            createPage: createPage,
            pageTemplate: slash(categoryTemplate),
            pageLength: 9,
            pathPrefix: `blog/${node.slug}`,
            context: {
                id: node.id,
                slug: node.slug,
                name: node.name,
            },
            buildPath: (index, pathPrefix) => index > 1 ? `/${pathPrefix}/${index}/` : `/${pathPrefix}/`,
        })
    })
}