import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import BuildDistributor from '../components/build-distributor/BuildDistributor'
import BuildDistributorItem from '../components/build-distributor/BuildDistributorItem'
import BusinessEcosystem from '../components/business-ecosystem/BusinessEcosystem'
import BusinessEcosystemItem from '../components/business-ecosystem/BusinessEcosystemIttem'
import BusinessModel from '../components/business-model/BusinessModel'
import BusinessModelItem from '../components/business-model/BusinessModelItem'
import ContactForm from '../components/contact-form/ContactForm'
import FaqAccordion from '../components/faq-accordion/FaqAccordion'
import FaqAccordionItem from '../components/faq-accordion/FaqAccordionItem'
import Partner from '../components/partner/Partner'
import PartnerItem from '../components/partner/PartnerItem'
import BizzySystem from '../components/bizzy-system/BizzySystem'
import BizzySystemItem from '../components/bizzy-system/BizzySystemItem'
import BizzyFeature from '../components/bizzy-feature/BizzyFeature'
import BizzyFeatureItem from '../components/bizzy-feature/BizzyFeatureItem'
import MediaBizzyPage from '../components/media/MediaBizzyPage'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const BizzyConnect = ({ data, location }) => {
  const [hash, setHash] = useState(location?.hash)
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
  const seoData = data.wpgHeadlessQuery.seo

  return (
    <Layout location={location} logo={data.logoImage} setHash={setHash} hash={hash}>
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

      <section className='slide-banner'>
        <Slide>
          {sliderData.map((itemData, index) => (
            <SlideItem
              key={index}
              title={itemData.title}
              content={itemData.content}
              buttonLabel={itemData.buttonLabel}
              buttonLink={itemData.buttonLink}
              logoSrc={getImage(itemData.logoSrc.localFile)}
              imageSrc={getImage(itemData.imageSrc.localFile)}
              imageXsSrc={getImage(itemData.imageXsSrc.localFile)}
              withButton={itemData.withButton}
              withLogo={true}
              logoSlim={true}
              bgPosition='center bottom'
            />
          ))}
        </Slide>
      </section>

      <section className='build-for-distributor'>
        <BuildDistributor title='Dibangun oleh distributor, untuk distributor'>
          <BuildDistributorItem
            title='Aplikasi berbasis penyimpanan tunggal'
            content='Kelola semua operasi bisnis Anda dalam aplikasi berbasis penyimpanan tunggal'
            lists={['Tidak ada lagi instalasi yang kacau', 'Tidak ada lagi sistem silo-ed, koneksi E2E dari brand ke pengecer Anda']}
            imageSrc={getImage(data.buildDistributor.nodes[0])}
            imageAlt='wpg-illustrator'
          />
          <BuildDistributorItem
            title='Kelola tim Anda<br/> dengan lebih<br/> percaya diri'
            content='Dapatkan visibilitas dan kontrol terhadap aktivitas tim Anda, dengan persetujuan yang bersangkutan'
            imageSrc={getImage(data.buildDistributor.nodes[1])}
            imageAlt='wpg-illustrator'
            isReverse={true}
          />
          <BuildDistributorItem
            title='Fokus pada distribusi Anda, bukan pada kompleksitas sistem'
            lists={['Daripada menggunakan banyak aplikasi untuk berbeda, lebih baik 1 aplikasi untuk semuanya', 'Lebih efektif, lebih mudah dikelola', 'Dengan bantuan Tim Kami, Anda bisa terhubung dengan sistem yang dimiliki brand']}
            imageSrc={getImage(data.buildDistributor.nodes[2])}
            imageAlt='wpg-illustrator'
          />
        </BuildDistributor>
      </section>

      <section className='bizzy-system'>
        <BizzySystem title='Sistem Bizzy Connect dibandingkan sistem distribusi lain'>
          <BizzySystemItem systemImages={data.bizzySystem.nodes} />
        </BizzySystem>
      </section>

      <section className='business-model'>
        <BusinessModel
          title='Model bisnis <i>FREEMIUM</i> dengan keamanan data yang terjamin'
          bgImageSrc={getImage(data.businessModel.nodes[0])}
        >
          <BusinessModelItem
            title='Fitur yang dikembangkan'
            subtitle='Sesuai kebutuhan distributor'
            imageSrc={getImage(data.businessModel.nodes[1])}
            imageAlt='wpg-illustrator'
          />
          <BusinessModelItem
            title='Fitur baru setiap kuarter'
            subtitle='Yang memfasilitasi distributor untuk pengelolaan yang lebih baik / otomatisasi operasional'
            imageSrc={getImage(data.businessModel.nodes[2])}
            imageAlt='wpg-illustrator'
          />
        </BusinessModel>
      </section>

      <section className='business-ecosystem'>
        <BusinessEcosystem title='Masuk ke dalam ekosistem bisnis ritel Warung Pintar'>
          <BusinessEcosystemItem
            title='Memungkinkan konektivitas penjualan dari <i>online-to-offline</i>'
            description='Bizzy Connect memungkinkan kerja sama online-to-offline tanpa celah antara distributor dan brand. Dengan platform digital kami, distributor bisa menggunakan strategi online-to-offline untuk meningkatkan produktivitas penjualan brand dan memungkinkan pengecer untuk berbelanja secara online untuk meningkatkan produktivitas Sales.'
            classImage='ecosystem-01'
            imageSrc={getImage(data.businessEcosystem.nodes[0])}
            imageXsSrc={getImage(data.businessEcosystem.nodes[4])}
            imageAlt='wpg-illustrator'
            imageXsAlt='wpg-illustrator'
            isColumn={true}
          />
          <BusinessEcosystemItem
            title='Terhubung dengan dompet digital (OVO<br/>& LINKAJA) / paylater'
            description='Bizzy Connect menawarkan sistem pembayaran yang menyediakan metode yang matang untuk mengelola pembayaran.'
            classImage='ecosystem-02'
            imageSrc={getImage(data.businessEcosystem.nodes[1])}
            imageXsSrc={getImage(data.businessEcosystem.nodes[7])}
            imageAlt='wpg-illustrator'
            imageXsAlt='wpg-illustrator'
          />
          <BusinessEcosystemItem
            title='Menghadirkan<br/> lebih banyak brand untuk Anda'
            description='Dengan menggunakan platform kami, distributor bisa meningkatkan visibilitas di lapangan dan memungkinkan distributor mendapatkan feedback pasar yang layak.'
            classImage='ecosystem-03'
            imageSrc={getImage(data.businessEcosystem.nodes[2])}
            imageXsSrc={getImage(data.businessEcosystem.nodes[5])}
            imageAlt='wpg-illustrator'
            imageXsAlt='wpg-illustrator'
          />
          <BusinessEcosystemItem
            title='Perdagangan digital dengan milestone<br/> yang terukur'
            lists={['Penjualan dengan rentang harga terukur', 'Meningkatkan efektivitas brand Anda melalui insight yang dibagi', 'Dapatkan pemasaran strategis untuk produk-produk Anda melalui pengecer']}
            classImage='ecosystem-04'
            imageSrc={getImage(data.businessEcosystem.nodes[3])}
            imageXsSrc={getImage(data.businessEcosystem.nodes[6])}
            imageAlt='wpg-illustrator'
            imageXsAlt='wpg-illustrator'
            isColumn={true}
          />
        </BusinessEcosystem>
      </section>

      <section className='bizzy-connect-feature'>
        <BizzyFeature title='Fitur Bizzy Connect'>
          <BizzyFeatureItem
            title='Perencanaan Rute dan Monitoring Operasional'
            content={`
              <ul>
                <li>Delivery App membantu supir melakukan pengiriman dan memudahkan COD dengan sistem yang terintegrasi dengan Head Office</li>
                <li>Control Tower Application</li>
                <li>Pemantauan secara rinci memungkinkan Anda untuk memvisualisasikan dan menyesuaikan jadwal pengiriman sesuai dengan metrics kunci seperti geografi, waktu dan kendaraan pengiriman</li>
              </ul>
            `}
            imageSrc={getImage(data.bizzyFeatures.nodes[0])}
            imageAlt='wpg-illustrator'
          />
          <BizzyFeatureItem
            title='Manajemen Keuangan in-transit'
            content={`<p>Memungkinkan pengumpulan tagihan pelanggan di hari yang sama</p>`}
            imageSrc={getImage(data.bizzyFeatures.nodes[1])}
            imageAlt='wpg-illustrator'
          />
          <BizzyFeatureItem
            title='Manajemen pembayaran tempo bagi Pengecer'
            content={`<p>Menentukan profil risiko yang berbeda dan mengelola kategori pelanggan secara dinamis</p>`}
            imageSrc={getImage(data.bizzyFeatures.nodes[2])}
            imageAlt='wpg-illustrator'
          />
          <BizzyFeatureItem
            title='Pantau tenaga penjualan Anda dengan BFF'
            content={`
              <ul>
                <li>Memantau tenaga penjualan di lapangan</li>
                <li>Pengumpulan tagihan jatuh tempo</li>
                <li>Integrasikan kunjungan pelanggan dengan insight bisnis untuk meningkatkan efisiensi penjualan
                  <ul>
                    <li>Rekomendasi produk</li>
                    <li>Detail riwayat pesanan</li>
                  </ul>
                </li>
                <li>Akses cepat terhadap data pelanggan memungkinkan Sales membuat keputusan yang tepat di lapangan
                  <ul>
                    <li>Jumlah pembayaran tempo yang masih tersisa untuk pelanggan</li>
                    <li>Tanggal pembelian terakhir</li>
                    <li>Produk yang paling sering dibeli</li>
                  </ul>
                </li>
              </ul>
            `}
            imageSrc={getImage(data.bizzyFeatures.nodes[3])}
            imageAlt='wpg-illustrator'
          />
        </BizzyFeature>
      </section>

      <section className='brand-and-distributor' id='partners'>
        <Partner title='BRAND & DISTRIBUTORS' isSecondary={true}>
          <PartnerItem
            content='Sejak Q1 2020, Coca-Cola Amatil Indonesia dan Warung Pintar berhasil menciptakan kanal penjualan baru yang meningkatkan omset dan memperluas jangkauan produk Coca-Cola Amatil Indonesia di segmen perdagangan umum.'
            iconSrc={{ image: getImage(data.cocaColaIcon), width: '216px' }}
            imageSrc={getImage(data.brandAndDistributor.nodes[2])}
            imageXsSrc={getImage(data.brandAndDistributor.nodes[6])}
            imageAlt='wpg-illustrator'
            contentColor='#E5000A'
          />
          <PartnerItem
            content='Penjualan Reckitt meningkat sekitar 24% dari bulan ke bulan sejak akhir 2019. Dapat dilihat peningkatan transaksi bulanan di Aplikasi Warung Pintar yang meningkat 10 kali lipat dalam setahun terakhir, ini juga merupakan dampak ppositif dari peningkatan penetrasi internet yang stabil.'
            iconSrc={{ image: getImage(data.reckittIcon), width: '179px' }}
            imageSrc={getImage(data.brandAndDistributor.nodes[0])}
            imageXsSrc={getImage(data.brandAndDistributor.nodes[4])}
            imageAlt='wpg-illustrator'
            contentColor='#E50072'
          />
        </Partner>
        <MediaBizzyPage images={data.mediaImages} />
      </section>

      <section className='faq' id='faq'>
        <FaqAccordion title='Faq'>
          <FaqAccordionItem
            title='Seperti apa bisnis model Warung Pintar, dan bagaimana brand kami bisa bekerja sama?'
            content='Warung Pintar Group membantu brand menjangkau retailer di pasar dengan cara paling efisien dan transparan untuk memaksimalkan ketersediaan dan visibilitas brand di level retailer.<br /><br />
            Untuk mencapai tujuan ini, setiap kerja sama membutuhkan pendekatan yang berbeda berdasarkan kebutuhan yang umumnya diklasifikasikan ke dalam 2 model utama:<br />
            1. Trading driven model melalui promosi yang disesuaikan, Warung Pintar melayani prinsipal sebagai mitra pelaksana mulai dari pembelian barang hingga menjangkau retailer melalui jaringan dan asset yang kami miliki. Setiap proses perdagangan dipantau melalui sistem yang didukung oleh teknologi kami.<br />
            2. Marketplace model - Warung Pintar menghubungkan asset mitra brand melalui platform digital kami yang diakses oleh ratusan ribu pedagang. Jaringan kami menciptakan solusi yang ramah iklan dan bebas hambatan bagi retailer.<br /><br />
            Untuk mengetahui lebih lanjut, mohon jadwalkan sesi diskusi dengan tim Business Development Warung Pintar. '
          />
          <FaqAccordionItem
            title='Di sisi retailer, target apa yang ingin dicapai oleh Warung Pintar saat ini? Dan sejauh mana jangkauan wilayah Warung Pintar?'
            content='Warung Pintar Group menggandeng semua jenis retailer di pasar supply FMCG. Tantangan yang dihadapi retailer seringkali berupa rantai pasok yang berlapis dan tidak efisien. Kami bertujuan untuk menyederhanakan rantai pasok bagi retailer dan menyediakan proses yang transparan bagi seluruh stakeholder dalam ekosistem kami.<br /><br />
            Saat ini, kami sudah berada di banyak kota tier-1 di seluruh Indonesia dan terus melebarkan jangkauan. Di masa depan, kami bertujuan untuk merangkul lebih banyak jenis retailer di pasaran. '
          />
          <FaqAccordionItem
            title='Seperti apa model pendekatan Warung Pintar dengan retailer?'
            content='Kami menggunakan pendekatan online-to-offline dalam hal onboarding dan retaining retailer. Retailer memesan barang melalui aplikasi kami, tapi untuk onboarding, pelatihan dan pengiriman barang dilakukan secara offline. Untuk mempertahankan kesetiaan user, kami mengombinasikan pendekatan inisiatif online dan offline sambil terus berinovasi.'
          />
          <FaqAccordionItem
            title='Bagaimana Warung Pintar bekerja sama dengan brand dalam melebarkan cakupan pelanggan baru?'
            content='Tujuan utama Warung Pintar Group adalah untuk mendorong pemecahan masalah rantai pasok yang tidak efiesien antara brand dan retailer secara berkelanjutan.  Dengan demikian itu merupakan sebuah kerugian utnuk Warung Pintar, jika kita hanya fokus menjangkau warung-warung yang sudah ada dimana mereka sebetulnya tidak mengalami permasalahan apapun. Oleh karena itu, ketika semua brand sudah bergabung, kami menyediakan pendekatan kerangka kerja dan proses penyelesaian konflik yang bisa membantu kami menyiapkan kerja sama yang saling menguntungkan dengan brand untuk mengembangkan bisnis mereka secara menyeluruh. Hubungi kami untuk menjadwalkan sesi diskusi lebih lanjut!'
          />
          <FaqAccordionItem
            title='Bagaimana data brand dan distributor dikelola di Warung Pintar, dan bagaimana kami bisa memastikan kompetitor kami tidak mengambil keuntungan dari kerja sama dengan Warung Pintar?'
            content='Kami menjaga kerahasiaan data di setiap platform kami dan memiliki perjanjian serta protokol keamanan perusahaan yang ketat untuk memastikan kerahasiaan data masing-masing stakeholder. Di platform digital kami, setiap data brand dipisahkan satu sama lain. Setiap brand hanya bisa melihat data milik mereka sendiri. hal yang sama kami terapkan bagi distributor, di mana setiap distributor hanya akan memiliki akses terhadap datanya masing-masing.<br /><br />
            Kami akan mengambil langkah ekstra untuk account management yang lebih strategis dengan menyediakan tingkat kerahasiaan yang lebih ekstra. Seperti menugaskan Account Manager yang berbeda untuk menjaga setiap kerahasiaan dan pemisahan informasi. '
          />
          <FaqAccordionItem
            title='Bagaimana jika ingin menghubungi lebih lanjut?'
            content='Hubungi kami! Kami bantu meningkatkan bisnis Anda!'
          />
        </FaqAccordion>
      </section>

      <section className='contact-form'>
        <ContactForm
          title='Masih punya pertanyaan?'
          subtitle='Hubungi kami! Kami bantu meningkatkan bisnis Anda!'
          endpoint='https://getform.io/f/7c8dc4ec-a154-40b9-93ce-91dada5385c4'
          imageSrc={getImage(data.contactBackgrounds.nodes[1])}
          imageXsSrc={getImage(data.contactBackgrounds.nodes[3])}
          maxWidth={true}
        />
      </section>
    </Layout>
  )
}

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "bizzy-connect"}) {
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
          title
          withButton
          logoSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                )
              }
            }
          }
          imageXsSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                )
              }
            }
          }
          imageSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1600
                )
              }
            }
          }
        }
      }
    }

    formImage: file(relativePath: {eq: "illustrations/forms/bizzy-form.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
        )
      }
    }
    buildDistributor: allFile(
      filter: {relativeDirectory: {eq: "illustrations/build-for-distributor"}}
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
    businessModel: allFile(
      filter: {relativeDirectory: {eq: "illustrations/business-model"}}
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
    businessEcosystem: allFile(
      filter: {relativeDirectory: {eq: "illustrations/business-ecosystem"}}
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
    brandAndDistributor: allFile(
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
    bizzySystem: allFile(
      filter: {relativeDirectory: {eq: "banners/bizzy-system"}}
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
    bizzyFeatures: allFile(
      filter: {relativeDirectory: {eq: "banners/bizzy-features"}}
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
    grabMartIcon: file(relativePath: {eq: "icons/grab-mart-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
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

export default BizzyConnect