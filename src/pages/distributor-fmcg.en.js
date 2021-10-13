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
        <Feature title='Various features for more transparent distribution system '>
          <FeatureItem
            imageSrc={getImage(data.featureImages.nodes[0])}
            imageXsSrc={getImage(data.featureImages.nodes[4])}
            imageAlt='Bizzy Connect'
          >
            <h3><b>Bizzy Connect</b> <br /> Integrated digital distributing operation</h3>
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
            <h3>Manage your salesman using <b>Bizzy Fieldforce</b></h3>
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
            <h3>Effective delivery system using <b>Truckway</b></h3>
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
            <h3><b>Real time analytic</b> for your business </h3>
            <ul>
              <li>Real Time Dashboard</li>
              <li>Demand Forecasting</li>
            </ul>
          </FeatureItem>
        </Feature>
      </section>

      <section className='ecosystem-section'>
        <Ecosystem
          title='Join <b>500.000 Warungs in our ecosystem</b>'
          subtitle='Not only transparent in each distribution process, but also widen your distribution channels to 500.000 warung owner in our ecosytem across Indonesia'
          imageSrc={getImage(data.ecosystemBackgrounds.nodes[0])}
          imageXsSrc={getImage(data.ecosystemBackgrounds.nodes[1])}
          imageAlt="Ekosistem Warung"
        />
      </section>

      <section className='modular-section'>
        <Modular
          title='Modular sytem, based on your distribution needs'
          subtitle='Our modular system enables you to choose the most suitable features for your company needs'
          imageSrc={getImage(data.modularBackgrounds.nodes[0])}
          imageObjectSrc={getImage(data.modularBackgrounds.nodes[1])}
          imageAlt="sistem distribusi modular"
        />
      </section>

      <section className='partner-section'>
        <Partner title="Our Partner's Story">
          <PartnerItem
            content='"Along with Warung Pintar Group, Sinarmas Distribusi Nusantara has increased the productivity of sales visits, the orders frequencies of retailers, order valuation in each transaction, distribution numbers, and increased general trade penetration."'
            imageSrc={getImage(data.partnerImages.nodes[3])}
            imageXsSrc={getImage(data.partnerImages.nodes[7])}
            imageAlt='Warung Pintar Partner Sinarmas'
            iconSrc={{ image: getImage(data.sinarmasIcon), width: '260px' }}
            contentColor='#FF0010'
          />
          <PartnerItem
            content='"Reckitt sales increase around 24% from month to month since late 2019. It can be seen from the growth of the monthly transactions in Warung Pintar Application that have increased 10 times over the past year, which is also the result of the steadily increasing internet penetration."'
            imageSrc={getImage(data.partnerImages.nodes[0])}
            imageXsSrc={getImage(data.partnerImages.nodes[4])}
            imageAlt='Warung Pintar Partner Reckitt'
            iconSrc={{ image: getImage(data.reckittIcon), width: '179px' }}
            contentColor='#E50072'
          />
          <PartnerItem
            content='"Embracing Coca-Cola Europacific Partners since Q1 2020, Warung Pintar Group has increased the distribution numbers through digitizing CCEP general trade channel."'
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
          title='Contact us'
          subtitle='to define your best distribution module!'
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
    wpgHeadlessQuery(slug: {eq: "distributor-fmcg-en"}) {
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