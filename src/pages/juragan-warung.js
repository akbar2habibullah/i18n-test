import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Download from '../components/download/Download'
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
          subtitle='Bisa belanja ribuan Jenis barang harga kompetitif dari berbagai sumber, diantar tanpa perantara dan gratis ongkir!'
          buttonLabel='Instal Sekarang'
          buttonLink='https://play.google.com/store/apps/details?id=co.warungpintar.mitra'
          iconSrc={getImage(data.googlePlayIcon)}
          imageSrc={getImage(data.appImage)}
          imageAlt='wpg-illustration'
          withOther={true}
        >
          <DownloadItem title='Dari Toko Grosir Terdekat' imageSrc={getImage(data.downloadImages.nodes[0])} />
          <DownloadItem title='Dari Warung Pintar Distribusi' imageSrc={getImage(data.downloadImages.nodes[1])} />
          <DownloadItem title='Dari Distributor Resmi' imageSrc={getImage(data.downloadImages.nodes[2])} />

          <DownloadItemOther
            content='Apa pun transaksinya, <b> selalu ada voucher dan potongan harga. </b>'
            imageSrc={{ image: getImage(data.downloadIcons.nodes[0]), class: 'download-image-01' }}
            imageAlt='Fitur Warung Pintar Promo'
          />
          <DownloadItemOther
            content='<b> Bayar semua pesanan di belakang </b> secara fleksibel dengan tenor pembayaran 14 hari!'
            imageSrc={{ image: getImage(data.downloadIcons.nodes[1]), class: 'download-image-02' }}
            imageAlt='Fitur Warung Pintar Bon'
          />
          <DownloadItemOther
            content='<b> Catat hutang pembeli di aplikasi </b> dan ingatkan otomatis via WhatsApp.'
            imageSrc={{ image: getImage(data.downloadIcons.nodes[2]), class: 'download-image-03' }}
            imageAlt='Fitur Warung Pintar Catatan'
          />
          <DownloadItemOther
            content='<b> Temukan video tips dan trik </b> buat bikin warung cepat berkembang.'
            imageSrc={{ image: getImage(data.downloadIcons.nodes[3]), class: 'download-image-04' }}
            imageAlt='Fitur Warung Pintar Komunitas '
          />
        </Download>
      </section>

      <section className='ads-section'>
        <Ads
          title='Gabung Sekarang Dan <b> Dapat Penghasilan Tambahan </b> Dari Pasang Iklan Brand Di Warung Juragan!'
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
          title='500.000+ Warung, 200+ Kota dan Kabupaten. Temukan Warung Pintar di Daerahmu!'
          patternSrc={getImage(data.mapPattern)}
          imageSrc={getImage(data.mapBackground)}
          mapData={mapData}
        />
      </section>

      <section className='join-section'>
        <JoinAccordion title='Gabung Sekarang Buat Nikmatin Pintarnya Warung Pintar' imageSrcDefault={getImage(data.joinBackground)}>
          <JoinAccordionItem title='1. Persyaratan' imageSrc={getImage(data.joinBackground)}>
            <ol>
              <li>Punya handphone android</li>
              <li>Punya KTP asli</li>
              <li>Punya warung fisik dengan akses jalan 2 mobil + 1 motor (Ada pengecualian untuk warung gang di area tertentu*)</li>
              <li>Warung berada di lokasi jangkauan Warung Pintar</li>
            </ol>
          </JoinAccordionItem>
          <JoinAccordionItem title='2. Registrasi' imageSrc={getImage(data.joinBackground)}>
            <ol>
              <li>Pasang aplikasi Warung Pintar dari Play Store</li>
              <li>Masukkan nomor WhatsApp aktif</li>
              <li>Cek WhatsApp dan masukkan kode OTP di aplikasi</li>
              <li>Isi data diri lengkap sesuai KTP</li>
              <li>Klik daftar dan tunggu konfirmasinya</li>
              <li>Lengkapi data warung untuk belanja kebutuhan warung</li>
            </ol>
          </JoinAccordionItem>
          <JoinAccordionItem title='3. Verifikasi' imageSrc={getImage(data.joinBackground)}>
            <ol>
              <li>Lengkapi data seperti foto dan selfie KTP</li>
              <li>Lengkapi data warung seperti nama, lokasi, dan patokan warung</li>
              <li>Foto warung tampak depan dan samping</li>
              <li>Klik kirim data, lalu tunggu kabar dari tim Warung Pintar untuk verifikasi data</li>
              <li>Selamat! Sekarang Juragan udah bisa belanja stok warung gratis ongkir deh! Ada juga banyak promo tiap minggunya lho</li>
            </ol>
          </JoinAccordionItem>
        </JoinAccordion>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='500.000+ Juragan Sudah #TUMBUHBARENG Warung Pintar'
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
          title='Gabung dengan ribuan juragan warung se-Indonesia buat tukar tips hingga info promo terbaru di Grup Facebook Kami!'
          buttonLabel='Gabung Komunitas Warung'
          buttonLink='https://web.facebook.com/groups/komunitaswarungindonesia/'
          imageSrc={getImage(data.communityBackground)}
          imageAlt="Komunitas Warung Pintar"
        />
      </section>

      <section className='jumbotron-section'>
        <Jumbotron
          title='Instal Aplikasinya dan #TUMBUHBARENG Warung Pintar Sekarang!'
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
    wpgHeadlessQuery(slug: {eq: "juragan-warung"}) {
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