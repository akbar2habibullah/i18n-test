const config = require('./config/config')

module.exports = {
    siteMetadata: {
        siteUrl: config.BASE_URL,
        title: `Warung Pintar Group`,
        description: `Warung Pintar adalah perusahaan teknologi yang mentransformasi bisnis mikro di Indonesia. Warung Pintar menciptakan ekosistem yang memungkinkan bisnis.`,
        author: `dirga.prakesha@bizzy.co.id`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        {
            resolve: `gatsby-plugin-anchor-links`,
            options: {
                offset: 0,
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    breakpoints: [750, 1080, 1366, 1920],
                    quality: 50,
                }
            }
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: config.GATSBY_WORDPRESS_GRAPHQL_URL,
                schema: {
                    timeout: 600000,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-112929627-1`,
                head: true,
                anonymize: true,
                respectDNT: true,
                pageTransitionDelay: 0,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: config.BASE_URL,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    {
                        allSitePage {
                            nodes {
                                path
                            }
                        }
                        allWpContentNode(filter: {nodeType: {in: ["Post"]}}) {
                            nodes {
                            ... on WpPost {
                                    uri
                                    modifiedGmt
                                }
                            }
                        }
                    }
                `,
                resolveSiteUrl: () => config.BASE_URL,
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allWpContentNode: { nodes: allWpNodes },
                }) => {
                    const wpNodeMap = allWpNodes.reduce((acc, node) => {
                        const { uri } = node
                        acc[uri] = node

                        return acc
                    }, {})

                    return allPages.map(page => {
                        return { ...page, ...wpNodeMap[page.path] }
                    })
                },
                serialize: ({ path, modifiedGmt }) => {
                    return {
                        url: path,
                        lastmod: modifiedGmt,
                    }
                }
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `wpg-website`,
                short_name: `WPG`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                theme_color: `#FFFFFF`,
                display: `minimal-ui`,
                icon: `src/images/warpin-favicon.png`,
            }
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                configFile: `robots-txt.config.js`,
            }
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {        
              langKeyDefault: 'id',
              useLangKeyLayout: false,
              langKeyForNull: 'en',
            }
        }
    ]
}