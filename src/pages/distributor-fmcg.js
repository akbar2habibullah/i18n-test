import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Feature from '../components/feature/Feature'
import FeatureItem from '../components/feature/FeatureItem'
import Ecosystem from '../components/ecosystem/Ecosystem'
import Modular from '../components/modular/Modular'
import Partner from '../components/partner/Partner'
import PartnerItem from '../components/partner/PartnerItem'
import ContactForm from '../components/contact-form/ContactForm'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const DistributorFMCGPage = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
  const seoData = data.wpgHeadlessQuery.seo

  return (
    <Layout location={location} logo={data.logoImage}>
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
          { property: 'og:image', content: seoData.opengraphImage !== null ? seoData.opengraphImage.localFile.publicURL : thumbnailImage },
          { name: 'twitter:title', content: seoData.twitterTitle },
          { name: 'twitter:description', content: seoData.twitterDescription },
          { name: 'twitter:image', content: seoData.twitterImage !== null ? seoData.twitterImage.localFile.publicURL : thumbnailImage },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@warungpintarco' },
        ]}
      />

      <section className='hero-section'>
        <Slide>
          {sliderData.map((itemData, index) => (
            <SlideItem
              key={index}
              title={itemData.title}
              content={itemData.content}
              buttonLabel={itemData.buttonLabel}
              buttonLink={itemData.buttonLink}
              imageSrc={getImage(itemData.imageSrc.localFile)}
              imageXsSrc={getImage(itemData.imageXsSrc.localFile)}
              imageAlt={itemData.imageSrc.altText}
              withButton={itemData.withButton}
            />
          ))}
        </Slide>
      </section>

      <section className='feature-section'>
        <Feature title='Berbagai Fitur Untuk Sistem Distribusi Yang Lebih Transparan'>
          <FeatureItem
            imageSrc={getImage(data.featureImages.nodes[0])}
            imageXsSrc={getImage(data.featureImages.nodes[4])}
            imageAlt='Bizzy Connect'
          >
            <h3><b>Bizzy Connect</b> <br /> Operasional Distribusi Digital Yang Terintegrasi</h3>
            <ul>
              <li>Holistic Inventory Visibility</li>
              <li>Demand Supply Planning</li>
              <li>Operational Finance Clearing</li>
            </ul>
          </FeatureItem>
          <FeatureItem
            imageSrc={getImage(data.featureImages.nodes[1])}
            imageXsSrc={getImage(data.featureImages.nodes[5])}
            imageAlt='Bizzy fieldforce'
            isReverse={true}
          >
            <h3>Kelola Salesman Anda Dengan <b>Bizzy Fieldforce</b></h3>
            <ul>
              <li>Assisted Purchases For Offline Outlets</li>
              <li>Salesman Management</li>
              <li>Digital Payments</li>
            </ul>
          </FeatureItem>
          <FeatureItem
            imageSrc={getImage(data.featureImages.nodes[2])}
            imageXsSrc={getImage(data.featureImages.nodes[6])}
            imageAlt='truckway'
          >
            <h3>Delivery Sistem Yang Efektif Dengan <b>Truckway</b></h3>
            <ul>
              <li>Control Tower</li>
              <li>Driver`s App</li>
              <li>Fleet Management</li>
              <li>Route Planning</li>
            </ul>
          </FeatureItem>
          <FeatureItem
            imageSrc={getImage(data.featureImages.nodes[3])}
            imageXsSrc={getImage(data.featureImages.nodes[7])}
            imageAlt='Bizzy Real time analytic '
            isReverse={true}
          >
            <h3><b>Real Time Analytic</b> Untuk Bisnis Anda</h3>
            <ul>
              <li>Real Time Dashboard</li>
              <li>Demand Forecasting</li>
            </ul>
          </FeatureItem>
        </Feature>
      </section>

      <section className='ecosystem-section'>
        <Ecosystem
          title='Bergabunglah Dengan <b>500.000 Warung Di Dalam Ekosistem Kami</b>'
          subtitle='Tak hanya transparansi di setiap proses distribusi, namun juga perluas sebaran distribusi anda ke 500.000 pemilik warung di dalam ekosistem kami di seluruh Indonesia.'
          imageSrc={getImage(data.ecosystemBackgrounds.nodes[0])}
          imageXsSrc={getImage(data.ecosystemBackgrounds.nodes[1])}
          imageAlt="Ekosistem Warung"
        />
      </section>

      <section className='modular-section'>
        <Modular
          title='Sistem Modular, Sesuai Kebutuhan Distribusi Anda'
          subtitle='Sistem modular kami memungkinkan Anda untuk dapat memilih fitur yang sesuai dengan kebutuhan perusahaan.'
          imageSrc={getImage(data.modularBackgrounds.nodes[0])}
          imageObjectSrc={getImage(data.modularBackgrounds.nodes[1])}
          imageAlt="sistem distribusi modular"
        />
      </section>

      <section className='partner-section'>
        <Partner title='Cerita Dari Partner Kami'>
          <PartnerItem
            content='Bersama Warung Pintar Group, Sinarmas Distribusi Nusantara mengalami peningkatan produktivitas kunjungan sales, frekuensi order oleh retailer, nilai order setiap transaksi, jumlah distribusi, serta meningkatkan penetrasi ke general trade.'
            imageSrc={getImage(data.partnerImages.nodes[3])}
            imageXsSrc={getImage(data.partnerImages.nodes[7])}
            imageAlt='Warung Pintar Partner Sinarmas'
            iconSrc={{ image: getImage(data.sinarmasIcon), width: '260px' }}
            contentColor='#FF0010'
          />
          <PartnerItem
            content='Penjualan Reckitt meningkat hingga 24% setiap bulannya sejak akhir 2019. Hal ini dapat dilihat dari meningkatnya transaksi bulanan di Aplikasi Warung Pintar yang meningkat 10 kali lipat selama setahun belakangan yang turut menandai peningkatan adopsi digital di kalangan pemilik warung.'
            imageSrc={getImage(data.partnerImages.nodes[0])}
            imageXsSrc={getImage(data.partnerImages.nodes[4])}
            imageAlt='Warung Pintar Partner Reckitt'
            iconSrc={{ image: getImage(data.reckittIcon), width: '179px' }}
            contentColor='#E50072'
          />
          <PartnerItem
            content='Merangkul Coca-Cola Europacific Partners sejak Q1 2020, Warung Pintar Group mengalami peningkatan jumlah distribusi lewat digitalisasi alur distribusi CCEP di general trade.'
            imageSrc={getImage(data.partnerImages.nodes[2])}
            imageXsSrc={getImage(data.partnerImages.nodes[6])}
            imageAlt='Warung Pintar Partner Coca Cola'
            iconSrc={{ image: getImage(data.cocaColaIcon), width: '216px' }}
            contentColor='#E5000A'
          />
        </Partner>
      </section>

      <section className='contactform-section'>
        <ContactForm
          title='Hubungi Kami'
          subtitle='Untuk menentukan modul terbaik bagi distribusi Anda!'
          endpoint='https://getform.io/f/85f42cb6-06ef-49e4-a47a-1e7665d69131'
          lang={false}
          imageSrc={getImage(data.contactBackgrounds.nodes[0])}
          imageXsSrc={getImage(data.contactBackgrounds.nodes[2])}
          imageAlt="Daftar Distributor Warung Pintar"
        />
      </section>
    </Layout >
  )
}

export default DistributorFMCGPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "distributor-fmcg"}) {
      id
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
      acfSlideBanner {
        slideBannerItem {
          buttonLabel
          buttonLink
          content
          fieldGroupName
          title
          withButton
          imageSrc {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                )
              }
            }
          }
          imageXsSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                )
              }
            }
          }
        }
      }
    }

    featureImages: allFile(
      filter: {relativeDirectory: {eq: "banners/features"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 1250
          )
        }
      }
    }
    ecosystemBackgrounds: allFile(
      filter: {relativeDirectory: {eq: "banners/ecosystems"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 1000
          )
        }
      }
    }
    modularBackgrounds: allFile(
      filter: {relativeDirectory: {eq: "illustrations/modulars"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 1200
          )
        }
      }
    }
    partnerImages: allFile(
      filter: {relativeDirectory: {eq: "banners/partners"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 1000
          )
        }
      }
    }
    contactBackgrounds: allFile(
      filter: {relativeDirectory: {eq: "illustrations/contact-forms"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 1000
          )
        }
      }
    }
    sinarmasIcon: file(relativePath: {eq: "icons/sinarmas-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 800
        )
      }
    }
    cocaColaIcon: file(relativePath: {eq: "icons/cocacola-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
    reckittIcon: file(relativePath: {eq: "icons/reckitt-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
    logoImage: file(relativePath: {eq: "warpin-logo-inverse.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
  }
`