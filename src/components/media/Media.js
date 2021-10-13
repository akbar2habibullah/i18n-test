import React from 'react'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const ImageRender = ({ image, href, className, width }) => (
    <a className={className} href={href} target='_blank' rel='nofollow noopener noreferrer'>
        <GatsbyImage image={getImage(image)} alt='media-icon' style={{ width: width }} />
    </a>
)

const Media = ({ children, title, subtitle, images, isSecondary }) => {
    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const links = [
        { title: 'techinasia', href: 'https://www.techinasia.com/indonesian-microretail-firm-warung-pintar-partners-fmcg-major-reckitt' },
        { title: 'techcrunch', href: 'https://techcrunch.com/2019/01/21/warung-pintar-raises-27-5m/?guccounter=1&guce_referrer=aHR0cHM6Ly93YXJ1bmdwaW50YXIuY28uaWQv&guce_referrer_sig=AQAAAExuyrJBkc2gK060jorP_zCRr_AjOzqIiSBI5KGjH2wSJ6cBHC4o_6VbdhxukSEr8GyFUgqT-_koRoObi4lsSDba-pbTDOxgPDjsM5o7vpN80Tb4sdtn89JwltFA6EbkNPZj9z_V8QssWYn1n64wP-CuU6m5UTvefGQiOKHLE6BH' },
        { title: 'dealstreetasia', href: 'https://www.dealstreetasia.com/partner-content/warung-pintar-end-to-end-digital-solution-retail/' },
        { title: 'e27', href: 'https://e27.co/warung-pintar-launches-online-platform-for-mom-and-pop-stores-to-directly-order-from-distributors-20210122/' },
        { title: 'businesstimes', href: 'https://www.businesstimes.com.sg/garage/warung-pintar-acquires-b2b-logistic-startup-bizzy-digital-for-us45m' },
        { title: 'financeasia', href: 'https://www.financeasia.com/article/ovo-partnered-indo-startup-charts-street-stalls-path-to-online-success/458550' },
        { title: 'kompas', href: 'https://www.kompas.id/baca/ekonomi/2021/04/26/teknologi-digital-warung-era-kini/' },
        { title: 'metrotvnews', href: 'https://www.metrotvnews.com/play/KZmCgQPg-dorong-usaha-mikro-melek-teknologi-lewat-warung-pintar' },
        { title: 'thejakartapost', href: 'https://www.thejakartapost.com/news/2019/03/01/adaptability-more-useful-than-math-for-microentrepreneurs-study.html' },
        { title: 'kumparan', href: 'https://kumparan.com/kumparanbisnis/belanja-di-warung-pintar-kini-bisa-dilakukan-online-via-grabmart-1uF90a9JUND' },
        { title: 'katadata', href: 'https://katadata.co.id/desysetyowati/digital/5ec3abf587d4b/warung-pintar-sediakan-layanan-penyaluran-bansos-berbasis-digital' },
        { title: 'dailysocial', href: 'https://dailysocial.id/post/misi-warung-pintar-group-perkuat-ekosistem-bisnis-warung' },
    ]

    return (
        <div className={`apl-media ${isSecondary ? 'apl-media--secondary' : ''}`}>
            <div className='container'>
                <h2>{title}</h2>
                {subtitle && <h4>{subtitle}</h4>}
            </div>
            <Slider {...settings}>
                {children}
            </Slider>
            <div className='container'>
                <div className='apl-media--icon'>
                    <ImageRender image={images.nodes[9]} href={links[0].href} className='is-hidden-touch' width='230px' />
                    <ImageRender image={images.nodes[0]} href={links[1].href} className='is-hidden-touch' width='198px' />
                    <ImageRender image={images.nodes[1]} href={links[2].href} className='is-hidden-touch' width='69px' />
                    <ImageRender image={images.nodes[6]} href={links[3].href} className='is-hidden-touch' width='69px' />
                    <ImageRender image={images.nodes[8]} href={links[4].href} className='is-hidden-touch' width='233px' />
                    <ImageRender image={images.nodes[10]} href={links[5].href} className='is-hidden-touch' width='216px' />
                    <ImageRender image={images.nodes[3]} href={links[6].href} className='is-hidden-touch' width='134px' />
                    <ImageRender image={images.nodes[11]} href={links[7].href} className='is-hidden-touch' width='159px' />
                    <ImageRender image={images.nodes[7]} href={links[8].href} className='is-hidden-touch' width='204px' />
                    <ImageRender image={images.nodes[4]} href={links[9].href} className='is-hidden-touch' width='140px' />
                    <ImageRender image={images.nodes[5]} href={links[10].href} className='is-hidden-touch' width='210px' />
                    <ImageRender image={images.nodes[2]} href={links[11].href} className='is-hidden-touch' width='168px' />

                    <ImageRender image={images.nodes[9]} href={links[0].href} className='is-hidden-desktop' width='154px' />
                    <ImageRender image={images.nodes[0]} href={links[1].href} className='is-hidden-desktop' width='133px' />
                    <ImageRender image={images.nodes[1]} href={links[2].href} className='is-hidden-desktop' width='46px' />
                    <ImageRender image={images.nodes[6]} href={links[3].href} className='is-hidden-desktop' width='46px' />
                    <ImageRender image={images.nodes[8]} href={links[4].href} className='is-hidden-desktop' width='155px' />
                    <ImageRender image={images.nodes[10]} href={links[5].href} className='is-hidden-desktop' width='149px' />
                    <ImageRender image={images.nodes[3]} href={links[6].href} className='is-hidden-desktop' width='122px' />
                </div>
                <p>and many more...</p>
            </div>
        </div >
    )
}

Media.displayName = 'Media'

Media.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    isSecondary: PropTypes.bool,
}

Media.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
    isSecondary: false,
}

export default Media