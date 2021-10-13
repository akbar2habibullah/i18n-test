import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Testimonial from '../components/testimonial/Testimonial'
import TestimonialItem from '../components/testimonial/TestimonialItem'
import Ads from '../components/ads/Ads'
import QnaAccordion from '../components/qna-accordion/QnaAccordion'
import QnaAccordionItem from '../components/qna-accordion/QnaAccordionItem'
import Benefit from '../components/benefit/Benefit'
import BenefitItem from '../components/benefit/BenefitItem'
import Join from '../components/join/Join'
import JoinItem from '../components/join/JoinItem'
import Form from '../components/form/Form'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const JuraganGrosirPage = ({ data, location }) => {
  const [hash, setHash] = useState(location?.hash)
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
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
              isRedirect={false}
              setHash={setHash}
            />
          ))}
        </Slide>
      </section>

      <section className='benefit-section'>
        <Benefit title='Benefits of Joining Grosir Pintar'>
          <BenefitItem
            title='Increasing Turnover'
            content='Karena ratusan pelanggan baru bisa belanja ke toko grosir Juragan lewat aplikasi kami.'
            imageSrc={{ image: getImage(data.benefitImages.nodes[0]), class: 'benefit-image-01' }}
            imageAlt='Keuntungan Grosir Pintar 1'
          />
          <BenefitItem
            title='Supported with mobile courier and sales '
            content='Untuk bantuan pengiriman, penyetoran hingga jemput bola cari pelanggan, semua bisa kita bantu!'
            imageSrc={{ image: getImage(data.benefitImages.nodes[1]), class: 'benefit-image-02' }}
            imageAlt='Keuntungan Grosir Pintar 2'
          />
          <BenefitItem
            title='Various Bonuses and Cashbacks'
            content='Dapetin voucher, cashback, dan bonus lainnya tiap transaksi di aplikasi.'
            imageSrc={{ image: getImage(data.benefitImages.nodes[2]), class: 'benefit-image-03' }}
            imageAlt='Keuntungan Grosir Pintar 3'
          />
          <BenefitItem
            title='Save time and energy'
            content='Dari orderan masuk, penyiapan barang, pengiriman, sampai setoran, semua cukup dari aplikasi.'
            imageSrc={{ image: getImage(data.benefitImages.nodes[3]), class: 'benefit-image-04' }}
            imageAlt='Keuntungan Grosir Pintar 4'
          />
        </Benefit>
      </section>

      <section className='ads-section'>
        <Ads
          title='Enjoy Bisnis Pintar for procurement service with the best price to complete your wholesale stocks'
          iconSrc={null}
          imageSrc={getImage(data.adsBackground)}
          imageAlt="Daftar Grosir Pintar"
          buttonLabel='Join Now!'
          buttonLink='/en/juragan-grosir#gabung'
          isRedirect={false}
          setHash={setHash}
        />
      </section>

      <section className='join-section'>
        <Join title='Check the requirements:'>
          <JoinItem
            title="1. Possess physical wholesale stall/semi-wholesale seen by the stock's display"
            imageSrc={{ image: getImage(data.joinImages.nodes[0]), class: 'join-image-01' }}
            imageAlt='Syarat Grosir Pintar 1'
          />
          <JoinItem
            title='2. Possess android phone'
            imageSrc={{ image: getImage(data.joinImages.nodes[1]), class: 'join-image-02' }}
            imageAlt='Syarat Grosir Pintar 2'
          />
          <JoinItem
            title='3. Understand and agree with the Grosir Pintar regulations'
            imageSrc={{ image: getImage(data.joinImages.nodes[2]), class: 'join-image-03' }}
            imageAlt='Syarat Grosir Pintar 3'
          />
          <JoinItem
            title='4. Possess a qualified product capacity'
            imageSrc={{ image: getImage(data.joinImages.nodes[3]), class: 'join-image-04' }}
            imageAlt='Syarat Grosir Pintar 4'
          />
          <JoinItem
            title='5. Must serve all orders from Grosir Pintar apps'
            imageSrc={{ image: getImage(data.joinImages.nodes[4]), class: 'join-image-05' }}
            imageAlt='Syarat Grosir Pintar 5'
          />
        </Join>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='Thousands of Wholesaler Owner already enjoyed the benefits!'
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

      <section id='gabung' className='form-section'>
        <Form
          title='Interested in joining Grosir Pintar? Fill this form.'
          imageSrc={getImage(data.formBackground)}
          imageAlt="Form Grosir Pintar"
        />
      </section>

      <section className='qna-section'>
        <QnaAccordion title='Frequestly Asked Questions about Registration Process' imageSrc={getImage(data.qnaformBackground)}>
          <QnaAccordionItem
            title='I have filled the form, what should I do then?'
            content="Don't worry, our teams are currently checking on your data. You'll be contacted in 1-5 working days"
          />
          <QnaAccordionItem
            title='Is there any registration fee to join Grosir Pintar?'
            content='There is NO registration fee. If our team ask for some payments, please report to our <a href="https://wa.me/6285157577630" target="_blank" rel="noopener noreferrer">Customer Service</a>.'
          />
          <QnaAccordionItem
            title='Why should I have android smartphone?'
            content='For now, Grosir Pintar apps only available in Android services'
          />
          <QnaAccordionItem
            title='How is ditribution mechanism in Grosir Pintar?'
            content='Stocks will be delivered by our logistic team and proceed in the same day if the orders are made within the operational hour. If the orders exceed the operational hour, the stocks will delivered next day,'
          />
          <QnaAccordionItem
            title='When is Grosir Pintar operational hour?'
            content='Monday-Saturday at 08.00-16.00. Grosir Pintar do not operate on Sunday and holiday.'
          />
          <QnaAccordionItem
            title='How far is the delivery service range?'
            content="The range is around 5 KM from Grosir Pintar's location"
          />
        </QnaAccordion>
      </section>
    </Layout >
  )
}

export default JuraganGrosirPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "juragan-grosir-en"}) {
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
    
    benefitImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/benefits"}}
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
    joinImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/joins"}}
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
    adsBackground: file(
      relativePath: {eq: "illustrations/ads/wpg-ads-illustration-02.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    formBackground: file(
      relativePath: {eq: "illustrations/forms/wpg-form-illustration-01.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    qnaformBackground: file(
      relativePath: {eq: "illustrations/qnas/wpg-qna-illustration-01.png"}
    ) {
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
    logoImage: file(relativePath: {eq: "warpin-logo-inverse.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 800
        )
      }
    }
  }
`