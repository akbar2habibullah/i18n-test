import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Service from '../components/service/Service'
import ServiceItem from '../components/service/ServiceItem'
import Download from '../components/download/Download'
import DownloadItem from '../components/download/DownloadItem'
import Testimonial from '../components/testimonial/Testimonial'
import TestimonialItem from '../components/testimonial/TestimonialItem'
import Statistic from '../components/statistic/Statistic'
import StatisticItem from '../components/statistic/StatisticItem'
import Media from '../components/media/Media'
import MediaItem from '../components/media/MediaItem'
import Jumbotron from '../components/jumbotron/Jumbotron'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const IndexPage = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
  const testimonialData = data.wpgHeadlessQuery.acfTestimonial.testimonialItem
  const mediaData = data.wpgHeadlessQuery.acfMedia.mediaItem
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
          { property: 'og:url', content: seoData.opengraphUrl },
          { property: 'og:title', content: `${siteUrl}${location.pathname}` },
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
        <Service
          title='Apa Bisnis Juragan?'
          subtitle='Di Warung Pintar Group, kami menyediakan solusi yang sesuai dengan bisnis Juragan.'
        >
          <ServiceItem
            title='Juragan Warung / Toko Kelontong'
            buttonLabel='Cek Aplikasi Kami'
            buttonLink='/juragan-warung/'
            imageSrc={{ image: getImage(data.serviceImages.nodes[0]), width: '380px', widthXs: '190px' }}
            imageAlt='Juragan Warung Pintar'
            isPrimary={false}
          />
          <ServiceItem
            title='Juragan Toko Grosir'
            buttonLabel='Cek Grosir Pintar'
            buttonLink='/juragan-grosir/'
            imageSrc={{ image: getImage(data.serviceImages.nodes[1]), width: '288px', widthXs: '200px' }}
            imageAlt='Juragan Grosir Warung Pintar'
            isPrimary={true}
          />
          <ServiceItem
            title='Distributor Produk FMCG'
            buttonLabel='Cek Bizzy Connect'
            buttonLink='/distributor-fmcg/'
            imageSrc={{ image: getImage(data.serviceImages.nodes[2]), width: '343px', widthXs: '200px' }}
            imageAlt='Distributor Warung Pintar'
            isPrimary={true}
          />
          <ServiceItem
            title='Brand & Supplier'
            buttonLabel='Cek Dashboard Kami'
            buttonLink='/brand-supplier/'
            imageSrc={{ image: getImage(data.serviceImages.nodes[3]), width: '283px', widthXs: '192px' }}
            imageAlt='Brand and supplier warung pintar'
            isPrimary={true}
          />
        </Service>
      </section>

      <section className='download-section'>
        <Download
          title='Instal Aplikasi Warung Pintar'
          subtitle='Bisa belanja ribuan Jenis barang harga kompetitif dari berbagai sumber, diantar tanpa perantara dan gratis ongkir!'
          buttonLabel='Instal Sekarang'
          buttonLink='https://play.google.com/store/apps/details?id=co.warungpintar.mitra'
          iconSrc={getImage(data.googlePlayIcon)}
          imageSrc={getImage(data.appImage)}
          imageAlt='wpg-illustration'
          withOther={false}
        >
          <DownloadItem title='Dari Toko Grosir Terdekat' imageSrc={getImage(data.downloadImages.nodes[0])} imageAlt="Belanja di Toko grosir terdekat"/>
          <DownloadItem title='Dari Warung Pintar Distribusi' imageSrc={getImage(data.downloadImages.nodes[1])} imageAlt="Belanja di Warung Pintar Distribusi"/>
          <DownloadItem title='Dari Distributor Resmi' imageSrc={getImage(data.downloadImages.nodes[2])} imageAlt="Belanja dari distributor resmi"/>
        </Download>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='Apa Kata Juragan Yang Sudah Bergabung?'
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

      <section className='statistic-section'>
        <Statistic
          title='Sejak 2017, Warung Pintar Group Tumbuh Ke Seluruh Indonesia'
        >
          <div className='columns is-multiline'>
            <div className='column is-12-widescreen is-12-desktop is-12-tablet'>
              <StatisticItem
                title='500.000+'
                subtitle='Warung Terdaftar'
                subtitleMobile='Warung Terdaftar'
                imageSrc={{ image: getImage(data.statisticImages.nodes[0]), class: 'statistic-image-01' }}
                imageAlt='500.000+ warung gabung warung pintar'
                isFit={false}
              />
            </div>
            <div className='column is-8-widescreen is-12-desktop is-12-tablet'>
              <StatisticItem
                title='500+'
                subtitle='Brand dan Supplier'
                subtitleMobile='Brand dan Supplier'
                imageSrc={{ image: getImage(data.statisticImages.nodes[1]), class: 'statistic-image-02' }}
                imageAlt='500+ brand gabung warung pintar'
                isFit={false}
              />
            </div>
            <div className='column is-4-widescreen is-12-desktop is-12-tablet'>
              <StatisticItem
                title='600+'
                subtitle='Grosir <br /> Pintar'
                subtitleMobile='Grosir Pintar'
                imageSrc={{ image: getImage(data.statisticImages.nodes[2]), class: 'statistic-image-03' }}
                imageAlt='600+ grosir gabung warung pintar'
                isFit={true}
              />
            </div>
            <div className='column is-6-widescreen is-12-desktop is-12-tablet'>
              <StatisticItem
                title='200+'
                subtitle='Kota dan Kabupaten'
                subtitleMobile='Kota dan Kabupaten'
                imageSrc={{ image: getImage(data.statisticImages.nodes[3]), class: 'statistic-image-04' }}
                imageAlt='200+ titik jangkauan warung pintar'
                isFit={false}
              />
            </div>
            <div className='column is-6-widescreen is-12-desktop is-12-tablet'>
              <StatisticItem
                subtitle='52 Gudang <br /> dan 5 Depo'
                subtitleMobile='52 Gudang dan 5 Depo'
                imageSrc={{ image: getImage(data.statisticImages.nodes[4]), class: 'statistic-image-05' }}
                imageAlt='gudang warung pintar'
                isFit={true}
              />
            </div>
          </div>
        </Statistic>
      </section>

      <section className='media-section'>
        <Media
          title='Tentang Kami di Media'
          images={data.mediaImages}
          isSecondary={false}
        >
          {mediaData.map((itemData, index) => (
            <MediaItem
              key={index}
              content={itemData.content}
              buttonLabel={itemData.buttonLabel}
              buttonLink={itemData.buttonLink}
              iconSrc={getImage(itemData.iconSrc.localFile)}
              imageSrc={getImage(itemData.imageSrc.localFile)}
              imageXsSrc={getImage(itemData.imageXsSrc.localFile)}
              imageAlt={"warung pintar media banner " + (index + 1)} 
            />
          ))}
        </Media>
      </section>

      <section className='jumbotron-section'>
        <Jumbotron
          title='Instal Aplikasi Warung Pintar Sekarang'
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

export default IndexPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "beranda"}) {
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
      acfMedia {
        mediaItem {
          content
          buttonLabel
          buttonLink
          iconSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                )
              }
            }
          }
          imageSrc {
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
                  width: 600
                )
              }
            }
          }
        }
      }
    }

    serviceImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/services"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 400
          )
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
            width: 400
          )
        }
      }
    }
    statisticImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/statistics"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 800
          )
        }
      }
    }
    mediaImages: allFile(
      filter: {relativeDirectory: {eq: "medias"}}
      sort: {order: ASC, fields: [name]}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 200
            transformOptions: {
              grayscale: true
            }
          )
        }
      }
    }
    appImage: file(relativePath: {eq: "apps/downloads/wpg-app-01.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 800
        )
      }
    }
    appBackground: file(relativePath: {eq: "apps/jumbotrons/wpg-app-01.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 800
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
          width: 800
        )
      }
    }
  }
`