import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Download from '../components/download/Download.en'
import DownloadItem from '../components/download/DownloadItem'
import DownloadItemOther from '../components/download/DownloadItemOther'
import Testimonial from '../components/testimonial/Testimonial'
import TestimonialItem from '../components/testimonial/TestimonialItem'
import Jumbotron from '../components/jumbotron/Jumbotron'
import Ads from '../components/ads/Ads'
import JoinAccordion from '../components/join-accordion/JoinAccordion'
import JoinAccordionItem from '../components/join-accordion/JoinAccordionItem'
import Map from '../components/map/Map'
import Community from '../components/community/Community'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const JuraganWarungPage = ({ data, location }) => {
  const [hash, setHash] = useState(location?.hash)
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
  const mapData = data.wpgHeadlessQuery.acfMap.mapItem
  const testimonialData = data.wpgHeadlessQuery.acfTestimonial.testimonialItem
  const seoData = data.wpgHeadlessQuery.seo

  return (
    <Layout location={location} logo={data.logoImage} hash={hash} setHash={setHash}>
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

      <section className='download-section'>
        <Download
          title='Instal Aplikasi Warung Pintar'
          subtitle="Shop for warung's supplies at competitive prices from various brands and suppliers. Direct and free delivery service!"
          buttonLabel='Install Now'
          buttonLink='https://play.google.com/store/apps/details?id=co.warungpintar.mitra'
          iconSrc={getImage(data.googlePlayIcon)}
          imageSrc={getImage(data.appImage)}
          imageAlt='wpg-illustration'
          withOther={true}
        >
          <DownloadItem title='From nearest wholesalers' imageSrc={getImage(data.downloadImages.nodes[0])} />
          <DownloadItem title='From Warung Pintar Distribution' imageSrc={getImage(data.downloadImages.nodes[1])} />
          <DownloadItem title='From Official Distributors' imageSrc={getImage(data.downloadImages.nodes[2])} />

          <DownloadItemOther
            content="Whatever the transactions, <b> you'll always get discounts and vouchers. </b>"
            imageSrc={{ image: getImage(data.downloadIcons.nodes[0]), class: 'download-image-01' }}
            imageAlt='Fitur Warung Pintar Promo'
          />
          <DownloadItemOther
            content='Pay your orders on a flexible 14 days payment tenor!'
            imageSrc={{ image: getImage(data.downloadIcons.nodes[1]), class: 'download-image-02' }}
            imageAlt='Fitur Warung Pintar Bon'
          />
          <DownloadItemOther
            content="<b> Record your buyer's debt easily in-app </b> and remind them automatically via WhatsApp"
            imageSrc={{ image: getImage(data.downloadIcons.nodes[2]), class: 'download-image-03' }}
            imageAlt='Fitur Warung Pintar Catatan'
          />
          <DownloadItemOther
            content='<b> Find tips and tricks video </b> to develop your warung.'
            imageSrc={{ image: getImage(data.downloadIcons.nodes[3]), class: 'download-image-04' }}
            imageAlt='Fitur Warung Pintar Komunitas '
          />
        </Download>
      </section>

      <section className='ads-section'>
        <Ads
          title='Join now and <b> get additonal income </b> from brand advertisement in your warung!'
          iconSrc={getImage(data.iklanPintarIcon)}
          iconAlt="Layanan Iklan Pintar"
          imageSrc={getImage(data.adsBackground)}
          imageAlt="Iklan Pintar Warung Pintar"
          buttonLabel='Instal Sekarang'
          buttonLink='https://play.google.com/store/apps/details?id=co.warungpintar.mitra'
        />
      </section>

      <section className='map-section'>
        <Map
          title='500.000+ Warungs, 150+ Cities and Regencies. Find Warung Pintar in your region!'
          patternSrc={getImage(data.mapPattern)}
          imageSrc={getImage(data.mapBackground)}
          mapData={mapData}
        />
      </section>

      <section className='join-section'>
        <JoinAccordion title='Join now to enjoy our smart apps!' imageSrcDefault={getImage(data.joinBackground)}>
          <JoinAccordionItem title='Requirements' imageSrc={getImage(data.joinBackground)}>
            <ol>
              <li>Possess an android phone </li>
              <li>Possess real ID Card</li>
              <li>Possess a physical warung in acessible area for 2 cars and 1 motorcycle (there's an exception for warung in a small alley in some certain areas*)</li>
              <li>Warung in Warung Pintar's distributions areas r</li>
            </ol>
          </JoinAccordionItem>
          <JoinAccordionItem title='Registration' imageSrc={getImage(data.joinBackground)}>
            <ol>
              <li>Install Warung Pintar Apps from Playstore</li>
              <li>Insert your active WhatsApp number</li>
              <li>Check your WhatsApp and input OTP code into Warung Pintar Apps</li>
              <li>Complete your personal data based on your ID card</li>
              <li>Click "Register" and wait for the confirmation</li>
              <li>Complete your warung's data to start shopping</li>
            </ol>
          </JoinAccordionItem>
          <JoinAccordionItem title='Verification' imageSrc={getImage(data.joinBackground)}>
            <ol>
              <li>Complete your data such as self portrait and ID Card Selfie</li>
              <li>Complete Warung's data such as name, locations, and warung's pin point</li>
              <li>Attach warung's photos (front and side looks)</li>
              <li>Click "Send Data" and wait for the verification process.</li>
              <li>Congrats! Now you can start shopping!</li>
            </ol>
          </JoinAccordionItem>
        </JoinAccordion>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='500.000+ Warung Owners have #GrownTogether with Warung Pintar'
          subtitle={null}
          isInverse={false}
          isSecondary={false}
        >
          {testimonialData.map((itemData, index) => (
            <TestimonialItem
              key={index}
              content={itemData.content}
              name={itemData.name}
              description={itemData.description}
              iconSrc={getImage(data.grosirPintarIcon)}
              imageSrc={getImage(itemData.imageSrc.localFile)}
              imageAlt={itemData.imageAlt}
              isGrosirPintar={itemData.isGrosirPintar}
            />
          ))}
        </Testimonial>
      </section>

      <section className='community-section'>
        <Community
          title='Join thousands of Warung Owner across Indonesia to share the newest tips and promotions in our Facebook Group!'
          buttonLabel='Gabung Komunitas Warung'
          buttonLink='https://web.facebook.com/groups/komunitaswarungindonesia/'
          imageSrc={getImage(data.communityBackground)}
          imageAlt="Komunitas Warung Pintar"
        />
      </section>

      <section className='jumbotron-section'>
        <Jumbotron
          title='Install Our Apps and #GrowTogether with Warung Pintar Now!'
          subtitle='Butuh Bantuan?'
          buttonPrimaryLabel='Instal Sekarang'
          buttonPrimaryLink='https://play.google.com/store/apps/details?id=co.warungpintar.mitra'
          buttonSecondaryLabel='Hubungi CS Warpin'
          buttonSecondaryLink='https://wa.me/6285157577630'
          imageSrc={getImage(data.appBackground)}
        />
      </section>
    </Layout >
  )
}

export default JuraganWarungPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "juragan-warung-en"}) {
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
                  width: 800
                )
              }
            }
          }
        }
      }
      acfMap {
        mapItem {
          provinceName
          provinceItem {
            cityDistrictsName
          }
        }
      }
      acfTestimonial {
        testimonialItem {
          content
          name
          description
          isGrosirPintar
          imageAlt
          imageSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                )
              }
            }
          }
        }
      }
    }
    
    downloadImages: allFile(
      filter: {relativeDirectory: {eq: "banners/downloads"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 600
          )
        }
      }
    }
    downloadIcons: allFile(
      filter: {relativeDirectory: {eq: "icons/downloads"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 600
          )
        }
      }
    }
    appImage: file(relativePath: {eq: "apps/downloads/wpg-app-01.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    appBackground: file(relativePath: {eq: "apps/jumbotrons/wpg-app-01.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    adsBackground: file(
      relativePath: {eq: "illustrations/ads/wpg-ads-illustration-01.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    communityBackground: file(
      relativePath: {eq: "banners/communities/wpg-community-banner-01.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    joinBackground: file(relativePath: {eq: "apps/joins/wpg-join-app-01.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    mapBackground: file(
      relativePath: {eq: "illustrations/maps/wpg-map-illustration-01.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    mapPattern: file(relativePath: {eq: "illustrations/maps/wpg-line-pattern.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    grosirPintarIcon: file(relativePath: {eq: "icons/wpg-icon-06.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 600
        )
      }
    }
    iklanPintarIcon: file(relativePath: {eq: "icons/wpg-icon-05.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 600
        )
      }
    }
    googlePlayIcon: file(relativePath: {eq: "icons/google-play-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 200
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