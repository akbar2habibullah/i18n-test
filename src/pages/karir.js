import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Channel from '../components/channel/Channel'
import Testimonial from '../components/testimonial/Testimonial'
import TestimonialItem from '../components/testimonial/TestimonialItem'
import Apply from '../components/apply/Apply'
import Values from '../components/values/Values'
import ValuesItem from '../components/values/ValuesItem'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const KarirPage = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
  const testimonialData = data.wpgHeadlessQuery.acfTestimonial.testimonialItem
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
              isVariation={true}
            />
          ))}
        </Slide>
      </section>

      <section className='channel-section'>
        <Channel
          title='Inklusi Ekononomi dan Teknologi bagi seluruh Masyarakat Indonesia'
          content='Kami percaya bahwa setiap <br /> orang punya kesempatan yang sama <br /> <br /> untuk tumbuh. Oleh karena itu, Warung Pintar Group menyediakan solusi digital terlengkap bagi ekosistem bisnis warung untuk akselerasi inklusi ekonomi dan teknologi bagi seluruh masyarakat Indonesia.'
          imageSrc={getImage(data.channeBackground)}
          imageAlt="Warung Pintar inklusi ekonomi"
        />
      </section>

      <section className='benefit-section'>
        <Values title='Nilai Yang Kami Bawa ' subtitle='Kami menyebut diri kami AnWar, singkatan dari Anak Warung. Kami ingin selalu menjadi garda terdepan untuk membawa perubahan dalam memperkuat ekosistem bisnis warung.'>
          <ValuesItem
            title='Selalu Mendengar, Selalu Mempertanyakan'
            titleMobile='Selalu Mendengar, Selalu Mempertanyakan'
            content='Kami percaya, solusi terbaik tercipta dari iterasi dan feedback yang membangun.'
            imageSrc={{ image: getImage(data.valueImages.nodes[0]), class: 'values-image-01' }}
            imageAlt='Warung Pintar Core Values 1'
          />
          <ValuesItem
            title='Bekerja <br /> sama'
            titleMobile='Bekerja sama'
            content='Kami merangkul perbedaan pandang yang muncul di setiap aspek perusahaan, karena akan memunculkan ide-ide terbaik.'
            imageSrc={{ image: getImage(data.valueImages.nodes[1]), class: 'values-image-02' }}
            imageAlt='Warung Pintar Core Values 2'
          />
          <ValuesItem
            title='Berusaha Keras <br /> untuk Menciptakan Dampak Nyata '
            titleMobile='Berusaha Keras untuk Menciptakan Dampak Nyata '
            content='Bagi kami memiliki ide itu penting, tapi, eksekusi yang sepat dan terencana adalah segalanya. '
            imageSrc={{ image: getImage(data.valueImages.nodes[2]), class: 'values-image-03' }}
            imageAlt='Warung Pintar Core Values 3'
          />
          <ValuesItem
            title='Temukan Caramu! <br /> <br />'
            titleMobile='Temukan Caramu!'
            content='Kami membudayakan keingintahuan untuk membantu kami lebih dekat dengan kreativitas dan dan inovasi'
            imageSrc={{ image: getImage(data.valueImages.nodes[3]), class: 'values-image-04' }}
            imageAlt='Warung Pintar Core Values 4'
          />
          <ValuesItem
            title='Pola Pikir Berkembang <br /> <br />'
            titleMobile='Pola Pikir Berkembang'
            content='Kami percaya bahwa belajar adalah perjalanan seumur hidup, dimana kita melihat kegagalan dan perubahan sebagai sebuah cara untuk terus memperbaiki'
            imageSrc={{ image: getImage(data.valueImages.nodes[4]), class: 'values-image-05' }}
            imageAlt='Warung Pintar Core Values 5'
          />
          <ValuesItem
            title='Data-driven <br /> <br />'
            titleMobile='Data-driven'
            content='Kami menganalisis dan memecahkan permasalahan berdasarkan data'
            imageSrc={{ image: getImage(data.valueImages.nodes[5]), class: 'values-image-06' }}
            imageAlt='Warung Pintar Core Values 6'
          />
        </Values>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='Cerita AnWar di Warung Pintar'
          subtitle={null}
          isInverse={true}
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

      <section className='contact-section'>
        <Apply
          title="Ayo #tumbuhbareng"
          subtitle='Raih kesempatan untuk mengembangkan diri dan berdampak bersama Warung Pintar Group!'
          imageSrc={getImage(data.contactBackground)}
          imageAlt="Warung Pintar Karir Ilustrasi"
          buttonPrimaryLabel='Apply Now'
          buttonPrimaryLink='https://warungpintar.freshteam.com/jobs'
          buttonSecondaryLabel='Contact Us'
          buttonSecondaryLink='mailto:hr@warungpintar.co'
        />
      </section>
    </Layout>
  )
}

export default KarirPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "karir"}) {
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

    valueImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/values"}}
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
    channeBackground: file(
      relativePath: {eq: "illustrations/channels/wpg-channel-illustration-03.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
        )
      }
    }
    contactBackground: file(
      relativePath: {eq: "illustrations/contacts/wpg-contact-illustration-02.png"}
    ) {
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