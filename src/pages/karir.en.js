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
          title='Technology and Economic Inclusion for All Indonesians'
          content='We believe that everyone <br /> has the same opportunity to grow. <br />  <br /> Therefore, Warung Pintar Group brings the most complete digital solutions for warung business ecosystem as a way to accelerate technology and economic inclusion for all Indonesians.'
          imageSrc={getImage(data.channeBackground)}
          imageAlt="Warung Pintar inklusi ekonomi"
        />
      </section>

      <section className='benefit-section'>
        <Values title='Our Core Values' subtitle='We call ourselves AnWar, shorten from Anak Warung. We always give our best to be the one who lead the change in strengthening warung business ecosystem'>
          <ValuesItem
            title='Always Listen, Always Question'
            titleMobile='Always Listen, Always Question'
            content='We believe that the best solutions are made through iterations and feedbacks.'
            imageSrc={{ image: getImage(data.valueImages.nodes[0]), class: 'values-image-01' }}
            imageAlt='Warung Pintar Core Values 1'
          />
          <ValuesItem
            title='Work <br /> Hand-in-hand'
            titleMobile='Work Hand-in-hand'
            content='We embrace different perspectives that eventuate in every facet of the company as it will sparks the best ideas.'
            imageSrc={{ image: getImage(data.valueImages.nodes[1]), class: 'values-image-02' }}
            imageAlt='Warung Pintar Core Values 2'
          />
          <ValuesItem
            title='Strive to Create <br /> Real Impact'
            titleMobile='Strive to Create Real Impact'
            content='For us, having an idea is one thing, but fast and well-planned execution is everything.'
            imageSrc={{ image: getImage(data.valueImages.nodes[2]), class: 'values-image-03' }}
            imageAlt='Warung Pintar Core Values 3'
          />
          <ValuesItem
            title='Find Your Way <br /> <br />'
            titleMobile='Find Your Way'
            content='We cultivate curiosity to get us closer to creativity and innovation.'
            imageSrc={{ image: getImage(data.valueImages.nodes[3]), class: 'values-image-04' }}
            imageAlt='Warung Pintar Core Values 4'
          />
          <ValuesItem
            title='Growth Mindset <br /> <br />'
            titleMobile='Growth Mindset'
            content='We believe that learning is a lifelong journey, where we see failure and changes as a means to improve.'
            imageSrc={{ image: getImage(data.valueImages.nodes[4]), class: 'values-image-05' }}
            imageAlt='Warung Pintar Core Values 5'
          />
          <ValuesItem
            title='Data-driven <br /> <br />'
            titleMobile='Data-driven'
            content='We analyze and solve problems based on data.'
            imageSrc={{ image: getImage(data.valueImages.nodes[5]), class: 'values-image-06' }}
            imageAlt='Warung Pintar Core Values 6'
          />
        </Values>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='Anwar Story In Warung Pintar'
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
          title="Let's #growtogether"
          subtitle='Take your chance to develop yourself and make an impact with Warung Pintar Group based on your field of interest!'
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
    wpgHeadlessQuery(slug: {eq: "karir-en"}) {
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