import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Market from '../components/market/Market'
import MarketItem from '../components/market/MarketItem'
import Campaign from '../components/campaign/Campaign'
import CampaignItem from '../components/campaign/CampaignItem'
import Channel from '../components/channel/Channel'
import Partner from '../components/partner/Partner'
import PartnerItem from '../components/partner/PartnerItem'
import FaqAccordion from '../components/faq-accordion/FaqAccordion'
import FaqAccordionItem from '../components/faq-accordion/FaqAccordionItem'
import ContactForm from '../components/contact-form/ContactForm'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const BrandSupplierPage = ({ data, location }) => {
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

      <section className='market-section'>
        <Market title='Akses terhadap pasar tidak pernah semudah ini!'>
          <MarketItem
            title='Dashboard Real Time'
            content="Pantau pasar produk Anda dan dapatkan laporan performa bisnis Anda"
            imageSrc={getImage(data.marketImages.nodes[0])}
            imageXsSrc={getImage(data.marketImages.nodes[3])}
            imageAlt='Real time dashboard'
          />
          <MarketItem
            title='Dapatkan lebih banyak titik distribusi secara numerik'
            content='Tingkatkan cakupan jumlah outlet bagi produk Anda tanpa melepaskan kanal distribusi yang sudah ada.'
            imageSrc={getImage(data.marketImages.nodes[1])}
            imageXsSrc={getImage(data.marketImages.nodes[4])}
            imageAlt='numeric distribution'
            isReverse={true}
          />
          <MarketItem
            title='Dapat insight pemasaran'
            content='Dapatkan insight terhadap pasar, peningkatan brand awareness produk Anda, buat promosi yang efektif, dan tingkatkan kesetiaan pengecer'
            imageSrc={getImage(data.marketImages.nodes[2])}
            imageXsSrc={getImage(data.marketImages.nodes[5])}
            imageAlt='promotion insight'
          />
        </Market>
      </section>

      <section className='campaign-section'>
        <Campaign title='Buat promosi dan pantau keberlangsungannya dengan Iklan Pintar' iconSrc={getImage(data.iklanPintarIcon)}>
          <CampaignItem content='Tingkatkan awareness retailer <b> dengan promosi in-app </b>' imageSrc={getImage(data.campaignImages.nodes[0])} imageAlt="boost awareness in app promotion"/>
          <CampaignItem content='Lebih dekat dengan pelanggan Anda <b> dengan promosi offline </b>' imageSrc={getImage(data.campaignImages.nodes[1])} imageAlt="get closer to customer"/>
        </Campaign>
      </section>

      <section className='channel-section'>
        <Channel
          title='Apa yang membuat kami berbeda?'
          content='"Visi Warung Pintar Group adalah merevolusi kanal distribusi tradisional, bukan mengganggunya. Kami bertujuan untuk mendemokratisasi teknologi yang kami miliki untuk menfasilitasi seluruh stakeholder dalam ekosistem bisnis warung. Sebuah ekosistem yang transparan untuk menciptakan inklusi ekonomi bagi brand, distributor, grosir dan yang paling utama adalah pemilik warung."'
          imageSrc={getImage(data.channelBackground)}
          isSecondary={true}
        />
      </section>

      <section className='partner-section'>
        <Partner title='Cerita Partner Kami' isSecondary={true}>
          <PartnerItem
            content='"Penjualan Reckitt meningkat sekitar 24% dari bulan ke bulan sejak akhir 2019. Dapat dilihat peningkatan transaksi bulanan di Aplikasi Warung Pintar yang meningkat 10 kali lipat dalam setahun terakhir, ini juga merupakan dampak ppositif dari peningkatan penetrasi internet yang stabil."'
            iconSrc={{ image: getImage(data.reckittIcon), width: '179px' }}
            imageSrc={getImage(data.partnerImages.nodes[0])}
            imageXsSrc={getImage(data.partnerImages.nodes[4])}
            imageAlt='wpg-illustrator'
            contentColor='#E50072'
          />
          <PartnerItem
            content='"Sejak Q1 2020, Coca-Cola Amatil Indonesia dan Warung Pintar berhasil menciptakan kanal penjualan baru yang meningkatkan omset dan memperluas jangkauan produk Coca-Cola Amatil Indonesia di segmen perdagangan umum."'
            iconSrc={{ image: getImage(data.cocaColaIcon), width: '216px' }}
            imageSrc={getImage(data.partnerImages.nodes[2])}
            imageXsSrc={getImage(data.partnerImages.nodes[6])}
            imageAlt='wpg-illustrator'
            contentColor='#E5000A'
          />
        </Partner>
      </section>

      <section className='faq-section'>
        <FaqAccordion title='Paling Sering Ditanyakan'>
          <FaqAccordionItem
            title="Seperti apa bisnis model Warung Pintar, dan bagaimana brand kami bisa bekerja sama?"
            content="Warung Pintar Group membantu brand menjangkau retailer di pasar dengan cara paling efisien dan transparan untuk memaksimalkan ketersediaan dan visibilitas brand di level retailer. <br /> <br />
            Untuk mencapai tujuan ini, setiap kerja sama membutuhkan pendekatan yang berbeda berdasarkan kebutuhan yang umumnya diklasifikasikan ke dalam 2 model utama: <br />
            1. Trading driven model melalui promosi yang disesuaikan, Warung Pintar melayani prinsipal sebagai mitra pelaksana mulai dari pembelian barang hingga menjangkau retailer melalui jaringan dan asset yang kami miliki. Setiap proses perdagangan dipantau melalui sistem yang didukung oleh teknologi kami. <br /> <br />
            2. Marketplace model - Warung Pintar menghubungkan asset mitra brand melalui platform digital kami yang diakses oleh ratusan ribu pedagang. Jaringan kami menciptakan solusi yang ramah iklan dan bebas hambatan bagi retailer. <br /> <br />
            Untuk mengetahui lebih lanjut, mohon jadwalkan sesi diskusi dengan tim Business Development Warung Pintar."
          />
          <FaqAccordionItem
            title="Di sisi retailer, target apa yang ingin dicapai oleh Warung Pintar saat ini? Dan sejauh mana jangkauan wilayah Warung Pintar?"
            content="Warung Pintar Group menggandeng semua jenis retailer di pasar supply FMCG. Tantangan yang dihadapi retailer seringkali berupa rantai pasok yang berlapis dan tidak efisien. Kami bertujuan untuk menyederhanakan rantai pasok bagi retailer dan menyediakan proses yang transparan bagi seluruh stakeholder dalam ekosistem kami. <br /> <br />
            Saat ini, kami sudah berada di banyak kota tier-1 di seluruh Indonesia dan terus melebarkan jangkauan. Di masa depan, kami bertujuan untuk merangkul lebih banyak jenis retailer di pasaran."
          />
          <FaqAccordionItem
            title="Seperti apa model pendekatan Warung Pintar dengan retailer?"
            content="Kami menggunakan pendekatan online-to-offline dalam hal onboarding dan retaining retailer. Retailer memesan barang melalui aplikasi kami, tapi untuk onboarding, pelatihan dan pengiriman barang dilakukan secara offline. Untuk mempertahankan kesetiaan user, kami mengombinasikan pendekatan inisiatif online dan offline sambil terus berinovasi."
          />
          <FaqAccordionItem
            title="Bagaimana Warung Pintar bekerja sama dengan brand dalam melebarkan cakupan pelanggan baru?"
            content="Tujuan utama Warung Pintar Group adalah untuk mendorong pemecahan masalah rantai pasok yang tidak efiesien antara brand dan retailer secara berkelanjutan.  Dengan demikian itu merupakan sebuah kerugian utnuk Warung Pintar, jika kita hanya fokus menjangkau warung-warung yang sudah ada dimana mereka sebetulnya tidak mengalami permasalahan apapun. Oleh karena itu, ketika semua brand sudah bergabung, kami menyediakan pendekatan kerangka kerja dan proses penyelesaian konflik yang bisa membantu kami menyiapkan kerja sama yang saling menguntungkan dengan brand untuk mengembangkan bisnis mereka secara menyeluruh. Hubungi kami untuk menjadwalkan sesi diskusi lebih lanjut!"
          />
          <FaqAccordionItem
            title="Bagaimana data brand dan distributor dikelola di Warung Pintar, dan bagaimana kami bisa memastikan kompetitor kami tidak mengambil keuntungan dari kerja sama dengan Warung Pintar?"
            content="Kami menjaga kerahasiaan data di setiap platform kami dan memiliki perjanjian serta protokol keamanan perusahaan yang ketat untuk memastikan kerahasiaan data masing-masing stakeholder. Di platform digital kami, setiap data brand dipisahkan satu sama lain. Setiap brand hanya bisa melihat data milik mereka sendiri. hal yang sama kami terapkan bagi distributor, di mana setiap distributor hanya akan memiliki akses terhadap datanya masing-masing. <br /> <br />
            Kami akan mengambil langkah ekstra untuk account management yang lebih strategis dengan menyediakan tingkat kerahasiaan yang lebih ekstra. Seperti menugaskan Account Manager yang berbeda untuk menjaga setiap kerahasiaan dan pemisahan informasi."
          />
          <FaqAccordionItem
            title="Bagaimana jika ingin menghubungi lebih lanjut?"
            content="Untuk pengajuan kerja sama, mohon hubungi Tim Business Development kami"
          />
        </FaqAccordion>
      </section>

      <section className='contactform-section'>
        <ContactForm
          title='Masih punya pertanyaan?'
          subtitle="Hubungi kami! Kami bantu meningkatkan bisnis Anda!"
          endpoint='https://getform.io/f/7c8dc4ec-a154-40b9-93ce-91dada5385c4'
          lang={true}
          imageSrc={getImage(data.contactBackgrounds.nodes[1])}
          imageXsSrc={getImage(data.contactBackgrounds.nodes[3])}
          imageAlt="Brand Supplier Contact Us"
        />
      </section>
    </Layout >
  )
}

export default BrandSupplierPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "brand-supplier"}) {
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
    
    marketImages: allFile(
      filter: {relativeDirectory: {eq: "banners/markets"}}
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
    campaignImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/campaigns"}}
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
    channelBackground: file(
      relativePath: {eq: "illustrations/channels/wpg-channel-illustration-02.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
      }
    }
    iklanPintarIcon: file(relativePath: {eq: "icons/wpg-icon-07.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
        )
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
          width: 800
        )
      }
    }
  }
`