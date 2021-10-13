import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'
import Channel from '../components/channel/Channel'
import Contact from '../components/contact/Contact'
import Testimonial from '../components/testimonial/Testimonial'
import TestimonialItem from '../components/testimonial/TestimonialItem'
import BrandDistributor from '../components/brand-distributor/BrandDistributor'
import BrandDistributorItem from '../components/brand-distributor/BrandDistributorItem'
import SocialImpactCollaborator from '../components/social-impact-collaborator/SocialImpactCollaborator'
import SocialImpactCollaboratorItem from '../components/social-impact-collaborator/SocialImpactCollaboratorItem'
import SocialImpactReport from '../components/social-impact-report/SocialImpactReport'
import SocialImpactReportItem from '../components/social-impact-report/SocialImpactReportItem'
import Leadership from '../components/leadership/Leadership'
import LeadershipItem from '../components/leadership/LeadershipItem'
import Investor from '../components/investor/Investor'
import Media from '../components/media/Media'
import MediaItem from '../components/media/MediaItem'
import StatisticSlide from '../components/statistic-slide/StatisticSlide'
import StatisticSlideItem1 from '../components/statistic-slide/StatisticSlideItem1'
import StatisticSlideItem2 from '../components/statistic-slide/StatisticSlideItem2'
import Timeline from '../components/timeline/Timeline'
import TimelineTopItem from '../components/timeline/TimelineTopItem'
import TimelineBottomItem from '../components/timeline/TimelineBottomItem'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const TentangPerusahaanPage = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.acfSlideBanner.slideBannerItem
  const testimonialData = data.wpgHeadlessQuery.acfTestimonial.testimonialItem
  const investorData = data.wpgHeadlessQuery.acfInvestor.investorItem
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
              labelImage={getImage(data.labelImage)}
              withButton={false}
              isReverse={true}
              isRedirect={false}
              withIcon={true}
            />
          ))}
        </Slide>
      </section>

      <section className='statistic-slide-section'>
        <StatisticSlide>
          <StatisticSlideItem1
            title='Rantai Pasok Digital Terkemuka'
            subtitle='Memberdayakan inklusi digital dan ekonomi untuk seluruh masyarakat Indonesia'
            images={data.statisticImages.nodes}
          />
          <StatisticSlideItem2
            title='Bring Impact To Warung Owners'
            subtitle='Democratizing technology and improving hundred thousands of warung owners life'
            images={data.milestoneImages.nodes}
          />
        </StatisticSlide>
      </section>

      <section className='channel-section'>
        <Channel
          title='Tantangan Besar Bagi Sistem Distribusi Tradisional'
          content='Warung menjadi pusat kegiatan bagi 270 juta populasi masyarakat Indonesia. Sedangkan, Warung sebagai kanal distribusi tradisional, bentuknya masih sangat asimetris dan terfragmentasi, membatasi keseluruhan elemen dalam ekosistem bisnis warung, mulai dari produsen, distributor, grosir hingga pengecer.'
          imageSrc={getImage(data.channeBackground)}
        />
      </section>

      <section className='timeline-section'>
        <Timeline
          titleTop='Mendigitalisasi Kanal Distribusi Terbesar di Indonesia'
          titleBottom='Aplikasi Warung Pintar'
          subtitleTop='Mulai dari Solusi Rantai Pasok:'
          subtitleBottom='Hingga Solusi bagi Pemilik Warung:'
          contentTop='Dengan mendigitalisasi sistem distribusi, Warung Pintar Group mampu menciptakan transparansi informasi bagi seluruh stakeholder. Saat ini, kami menjadi satu-satunya pemain yang terlengkap dan dapat diandalkan sebagai solusi dari hulu ke hilir dalam ekosistem bisnis warung. '
          contentBottom='Solusi lengkap bagi pemilik warung mengelola bisnis mereka'
          imageSrcDefault={getImage(data.timelineAppImages.nodes[0])}
        >
          <TimelineTopItem
            title='Bizzy Connect'
            content='Sistem distibusi terigrasi yang menghubungkan pemilik warung, sales, transportasi pengiriman, gudang dan brand. Dengan Bizzy Connect, Distributor bisa mendapatkan visibilitas dan prediksi pasar ritel yang jelas. Sedangkan Brand  bsia mendapatkan real-time update, akses distribusi lebih luas dan aktivitas pemasaran langsung.'
            imageSrc={getImage(data.timelineBannerImages.nodes[0])}
            imageAlt='wpg-illustrator'
            isFirstLine={true}
          />
          <TimelineTopItem
            title='Warung Pintar Distribusi'
            content='Akses terhadap 500 lebih SKU rantai pasok di gudang Warung Pintar yang didukung dengan proses pengiriman kurang dari 24 jam.'
            imageSrc={getImage(data.timelineBannerImages.nodes[1])}
            imageAlt='wpg-illustrator'
            isReverse={true}
          />
          <TimelineTopItem
            title='Aplikasi Grosir Pintar'
            content='Menghubungkan grosir dengan ratusan pemilik warung baru dengan akses pengiriman barang di hari yang sama. Ditunjang dengan Bisnis Pintar sebagai solusi memperoleh stok barang.'
            imageSrc={getImage(data.timelineBannerImages.nodes[2])}
            imageAlt='wpg-illustrator'
          />

          <TimelineBottomItem
            title='FMCG Commerce'
            content='Kategori barang terlengkap dari berbagai supplier'
            imageSrc={getImage(data.timelineAppImages.nodes[0])}
          />
          <TimelineBottomItem
            title='Paket promosi'
            content='Promosi yang ditargetkan ke pemilik warung'
            imageSrc={getImage(data.timelineAppImages.nodes[1])}
          />
          <TimelineBottomItem
            title='Produk digital'
            content='Memungkinkan pemilik warung menjual  kebutuhan harian produk digital'
            imageSrc={getImage(data.timelineAppImages.nodes[2])}
          />
          <TimelineBottomItem
            title='Pembukuan Digital '
            content='Alternatif pencatatan keuangan fisik '
            imageSrc={getImage(data.timelineAppImages.nodes[3])}
          />
          <TimelineBottomItem
            title='Iklan digital'
            content='Program yang melibatkan pemilik warung untuk meningkatan pemasaran produk'
            imageSrc={getImage(data.timelineAppImages.nodes[4])}
            isFull={true}
          />
        </Timeline>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='Cerita Mitra Warung Pintar'
          subtitle='Pemilik Warung dan Grosir'
          isInverse={true}
          isSecondary={true}
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

      <section className='brand-distributor-section'>
        <BrandDistributor title='Brand dan Distributor' images={data.mediaImages}>
          <BrandDistributorItem
            content='"Sejak Q1 2020, Coca-Cola Amatil Indonesia dan Warung Pintar berhasil menciptakan kanal penjualan baru yang meningkatkan omset dan memperluas jangkauan produk Coca-Cola Amatil Indonesia di segmen perdagangan umum."'
            contentColor='#E5000A'
            imageSrc={{ image: getImage(data.cocaColaIcon), width: '140px' }}
          />
          <BrandDistributorItem
            content='"Penjualan Reckitt meningkat sekitar 24% dari bulan ke bulan sejak akhir 2019. Dapat dilihat peningkatan transaksi bulanan di Aplikasi Warung Pintar yang meningkat 10 kali lipat dalam setahun terakhir, ini juga merupakan dampak ppositif dari peningkatan penetrasi internet yang stabil."'
            contentColor='#E50072'
            imageSrc={{ image: getImage(data.reckittIcon), width: '117px' }}
          />
          <BrandDistributorItem
            content='"Sejak bekerja sama di awal Juni 2020, eksposur Juragan terhadap perdagangan online jauh meningkat. Hal ini mendukung perbaikan di berbagai sisi. Pendapatan rata-rata Juragan WArung Pintar meningkat hingga 50% dengan rata-rata 360 pelanggan per bulan."'
            contentColor='#01A92E'
            imageSrc={{ image: getImage(data.grabMartIcon), width: '196px' }}
          />
        </BrandDistributor>
      </section>

      <section className='social-impact-collaborator-section'>
        <SocialImpactCollaborator
          title='Kolaborator Dampak Sosial'
          subtitle='Ingin tahu lebih lanjut terkait potensi kerja sama dengan kami?'
          buttonLabel='Hubungi Kami'
          buttonLink='mailto:partnership@warungpintar.co'
          images={data.mediaImages}
        >
          <SocialImpactCollaboratorItem
            content='"Kami telah menyalurkan stimulus bisnis dan pendampingan usaha bagi 3000 pemilik warung."'
            contentColor='#1A489E'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[0])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.bankIndonesiaIcon), width: '200px', widthXs: '104px' }}
          />
          <SocialImpactCollaboratorItem
            content='"Kami telah melaksanakan berbagai inisiatif bantuan sosial dan modal usaha senilai Rp 500 Juta dan berdampak pada lebih dari 30.000 orang."'
            contentColor='#0067AA'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[1])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.rumahYatimIcon), width: '86px', widthXs: '50px' }}
          />
          <SocialImpactCollaboratorItem
            content='"Kami berhasil menggalang bantuan sosial bagi karyawan Kompas Group dan masyarakat sekitar. Menjangkau lebih dari 6.000 orang dengan total bantuan mencapai Rp 350 juta."'
            contentColor='#3FA8CC'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[2])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.kompasIcon), width: '202px', widthXs: '114px' }}
          />
          <SocialImpactCollaboratorItem
            content='"Kami berhasil menyediakan akses terhadap fasilitas bisnis dan pendampingan finansial berupa gerobak, perlengkapan warung, dan kios di berbagai Kecamatan di Kabupaten Sumedang."'
            contentColor='#7FB742'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[3])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.insunMedalIcon), width: '86px', widthXs: '33px' }}
          />
        </SocialImpactCollaborator>
      </section>

      <section className='leadership-section'>
        <Leadership title='Founder Kami'>
          <LeadershipItem
            name='Agung Bezharie'
            position='Chief Executive Officer'
            content='"Warung Pintar Group bertujuan memberi dampak kepada masyarakat sekitar dengan warung sebagai pintu gerbang utama bagi perkembangan konsumen di Indonesia untuk turut berpartisipasi dalam ekonomi digital."'
            imageSrc={getImage(data.leaderImages.nodes[0])}
            imageAlt="Warung Pintar Group Agung Bezharie"
          />
          <LeadershipItem
            name='Andrew Mawikere'
            position='President'
            content='"Pendekatan kami memungkinkan kami untuk malayani seluruh stakeholder dalam ekosistem bisnis warung dengan strategi berbasis data dan nilai tambah yang belum pernah dilakukan dalam skla besar."'
            imageSrc={getImage(data.leaderImages.nodes[1])}
            imageAlt="Warung Pintar Group Andrew Mawikere"
          />
          <LeadershipItem
            name='Harya Putra'
            position='Chief Product Officer'
            content='"Di Warung Pintar Group, kami berinvestasi pada keterhubungan di seluruh ekosistem dengan menyediakan layanan terlengkap."'
            imageSrc={getImage(data.leaderImages.nodes[4])}
            imageAlt="Warung Pinar Group Harya Putra"
          />
          <LeadershipItem
            name='Sofian Hadiwijaya'
            position='Chief Technology Officer'
            content='"Pasar yang ada sangat besar, kami tidak mungkin melakukannya sendiri. Tidak menutup kemungkinan untuk berkolaborasi untuk memajukan perekonomian Indonesia melalui transformasi digital."'
            imageSrc={getImage(data.leaderImages.nodes[5])}
            imageAlt="Warung Pintar Group Sofian Hadiwijaya"
          />
          <LeadershipItem
            name='Christian Winata'
            position='Chief Commercial Officer (Network)'
            content='"Tujuan utama kami adalah menciptakan ekosistem di mana seluruh stakeholder mendapatkan manfaat dari proses yang lebih sederhana dan transparan."'
            imageSrc={getImage(data.leaderImages.nodes[2])}
            imageAlt="Warung Pintar Group Christian Winata"
          />
          <LeadershipItem
            name='Glenn Lai'
            position='Chief Commercial Officer (Business Services)'
            content='"Dengan Warung Pintar Group, kami terus berinovasi dalam pendekatan kemitraan kami untuk membantu mendorong perkembangan dan hasil yang saling menguntungkan bagi pihak yang berpartisipasi dalam ekosistem."'
            imageSrc={getImage(data.leaderImages.nodes[3])}
            imageAlt="Warung Pintar Group Glen Lai"
          />
        </Leadership>
      </section>

      <section className='investor-section'>
        <Investor title='Investor Kami' subtitle='Our visions supported by some of the most respectable investors' investorData={investorData} />
      </section>

      <section className='social-impact-report-section'>
        <SocialImpactReport
          title='Temukan Laporan Dampak Sosial Kami'
          subtitle='Download our social impact report'
          buttonLabel='Download Now'
          buttonLink='http://bit.ly/impactwarung'
        >
          <SocialImpactReportItem
            title='2018 - One year, thousand of achievements'
            link='/'
            imageSrc={getImage(data.socialImpactReportImages.nodes[0])}
            imageAlt='wpg-illustrator'
          />
          <SocialImpactReportItem
            title='2019 - We support women`s equality for business'
            link='/'
            imageSrc={getImage(data.socialImpactReportImages.nodes[1])}
            imageAlt='wpg-illustrator'
          />
          <SocialImpactReportItem
            title='Contribute to Nation, When Our Digital Ecosystem Supoorting Social Aid Initiatives'
            link='/bantuan-pintar/'
            imageSrc={getImage(data.socialImpactReportImages.nodes[2])}
            imageAlt='wpg-illustrator'
          />
          <SocialImpactReportItem
            title='2020 - We turn tough times into stronger collaboration'
            link='/'
            imageSrc={getImage(data.socialImpactReportImages.nodes[3])}
            imageAlt='wpg-illustrator'
          />
        </SocialImpactReport>
      </section>

      <section className='media-section'>
        <Media
          title='Ulasan Media Tentang Kami'
          subtitle='Discover stories, inspiration, and history in the making from our friends in media'
          images={data.mediaImages}
          isSecondary={true}
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
            />
          ))}
        </Media>
      </section>

      <section className='contact-section'>
        <Contact
          title="Ayo Tumbuh Bersama Kami untuk Masa Depan Ekonomi Indonesia!"
          imageSrc={getImage(data.contactBackground)}
          buttonLabel='Contact Us'
          buttonLink='mailto:partnership@warungpintar.co'
        />
      </section>
    </Layout>
  )
}

export default TentangPerusahaanPage

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "tentang-perusahaan"}) {
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
      acfInvestor {
        investorItem {
          link
          imageAlt
          imageWidth
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
    
    statisticImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/statistics"}}
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
    milestoneImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/milestones"}}
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
    timelineBannerImages: allFile(
      filter: {relativeDirectory: {eq: "banners/timelines"}}
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
    timelineAppImages: allFile(
      filter: {relativeDirectory: {eq: "apps/timelines"}}
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
    leaderImages: allFile(
      filter: {relativeDirectory: {eq: "leaders"}}
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
    socialImpactReportImages: allFile(
      filter: {relativeDirectory: {eq: "banners/social-impact-reports"}}
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
    socialImpactCollaboratorImages: allFile(
      filter: {relativeDirectory: {eq: "banners/social-impact-collaborators"}}
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
    channeBackground: file(
      relativePath: {eq: "illustrations/channels/wpg-channel-illustration-01.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
        )
      }
    }
    contactBackground: file(
      relativePath: {eq: "illustrations/contacts/wpg-contact-illustration-01.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
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
    bankIndonesiaIcon: file(relativePath: {eq: "icons/bank-indonesia-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
    rumahYatimIcon: file(relativePath: {eq: "icons/rumah-yatim-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
    kompasIcon: file(relativePath: {eq: "icons/kompas-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
    insunMedalIcon: file(relativePath: {eq: "icons/insun-medal-icon.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 300
        )
      }
    }
    labelImage: file(relativePath: {eq: "icons/wpg-icon-08.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 400
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