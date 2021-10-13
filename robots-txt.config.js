const config = require('./config/config')

module.exports = {
    host: `${config.BASE_URL}`,
    sitemap: `${config.BASE_URL}/sitemap/sitemap-index.xml`,
    policy: [
        {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/wp-content/plugins/',
                '/wp-admin/'
            ]
        }
    ]
}
