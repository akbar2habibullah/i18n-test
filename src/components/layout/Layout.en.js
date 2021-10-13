import React from 'react'
import PropTypes from 'prop-types'

import Topbar from '../topbar/Topbar.en'
import Footbar from '../footbar/Footbar.en'

import '../../styles/reset.scss'
import '../../styles/global.scss'
import '../../styles/main.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Layout = ({ children, logo, categories, location, hash, setHash }) => {
    return (
        <>
            <Topbar
                imageSrc={logo}
                imageAlt='warung-pintar-group-logo'
                location={location}
                hash={hash}
                setHash={setHash}
                categories={categories}
            />
            {children}
            <Footbar
                imageSrc={logo}
                imageAlt='warung-pintar-group-logo'
                location={location}
            />
        </>
    )
}

Layout.displayName = 'Layout'

Layout.propTypes = {
    children: PropTypes.any,
}

Layout.defaultProps = {
    children: null,
}

export default Layout