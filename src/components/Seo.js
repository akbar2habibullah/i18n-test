import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Seo = ({ title, canonical, meta, lang }) => {
    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            link={[
                { rel: 'canonical', href: canonical }
            ]}
            meta={[
                { name: 'google-site-verification', content: '0zMErrtwLZacSVJ065nWxby3iGbl2cydDj4vdZkXwAo' },
            ].concat(meta)}
        />
    )
}

Seo.displayName = 'Seo'

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
    meta: PropTypes.arrayOf(PropTypes.object),
    lang: PropTypes.string,
}

Seo.defaultProps = {
    title: null,
    canonical: null,
    meta: [],
    lang: 'id',
}

export default Seo