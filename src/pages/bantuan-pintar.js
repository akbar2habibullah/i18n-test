import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Slide from '../components/slide/Slide'
import SlideItem from '../components/slide/SlideItem'

import BenefitSmartHelp from '../components/benefit-smart-help/BenefitSmartHelp'
import CovidRespond from '../components/covid-respond/CovidRespond'
import Statistic from '../components/statistic/Statistic'
import StatisticItem from '../components/statistic/StatisticItem'
import CovidRespondItem from '../components/covid-respond/CovidRespondItem'
import EconomyRecovery from '../components/economy-recovery/EconomyRecovery'
import EconomyRecoveryItem from '../components/economy-recovery/EconomyRecoveryItem'
import BusinessAssistance from '../components/business-assistance/BusinessAssistance'
import BusinessAssistanceItem from '../components/business-assistance/BusinessAssistanceItem'
import Testimonial from '../components/testimonial/Testimonial'
import TestimonialItem from '../components/testimonial/TestimonialItem'
import MediaHelpPage from '../components/media/MediaHelpPage'
import BenefitSmartItem from '../components/benefit-smart-help/BenefitSmartItem'

import useSiteMetadata from '../hooks/useSiteMetadata'

import thumbnailImage from '../images/warpin-favicon.png'

const BantuanPintarPage = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()

  const sliderData = data.wpgHeadlessQuery.fieldHelpPage.slideBanner
  const economyRecoveryData = data.wpgHeadlessQuery.fieldHelpPage.economyRecoveryItem
  const businessAssistanceData = data.wpgHeadlessQuery.fieldHelpPage.businessAssistance
  const testimonialData = data.wpgHeadlessQuery.fieldHelpPage.testimoni
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
          {sliderData.map((itemData, index) => {
            return (
              <SlideItem
                key={index}
                withLogo={itemData.withLogo}
                title={itemData.title}
                content={itemData.content}
                buttonLabel={itemData.buttonLabel}
                buttonLink={itemData.buttonLink}
                logoSrc={getImage(itemData.logoSrc.localFile)}
                imageSrc={getImage(itemData.imageSrc.localFile)}
                imageXsSrc={getImage(itemData.imageXsSrc.localFile)}
                withButton={itemData.withButton}
                hideLogoMobile={true}
              />
            )
          })}
        </Slide>
      </section>

      <section className='benefit-smart-assist-section'>
        <BenefitSmartHelp title='Keunggulan Bantuan Pintar'>
          <BenefitSmartItem
            title='Cepat <br /><br />'
            content='Stok bantuan didistribusikan dalam tiga hari<br> sejak pemesanan'
            imageSrc={{ image: getImage(data.benefitImages.nodes[0]), class: `smart-benefit-image-01` }}
            imageAlt='wpg-illustration'
          />
          <BenefitSmartItem
            title='Terpantau <br /><br />'
            content='Proses pemesanan hingga penyaluran bantuan<br> terpantau melalui aplikasi'
            imageSrc={{ image: getImage(data.benefitImages.nodes[1]), class: `smart-benefit-image-02` }}
            imageAlt='wpg-illustration'
          />
          <BenefitSmartItem
            title='Merata Dan Tepat Sasaran'
            content='Dari segi lokasi maupun identifikasi penerima bantuan sesuai validasi RT/RW'
            imageSrc={{ image: getImage(data.benefitImages.nodes[2]), class: `smart-benefit-image-03` }}
            imageAlt='wpg-illustration'
          />
          <BenefitSmartItem
            title='100% Penyediaan Stok Bantuan'
            content='Warung Pintar Group menyediakan stok bantuan sistem distribusi'
            imageSrc={{ image: getImage(data.benefitImages.nodes[3]), class: `smart-benefit-image-04` }}
            imageAlt='wpg-illustration'
          />
          <BenefitSmartItem
            title='RP 0 Dalam Penyaluran'
            content='Bantuan disalurkan<br> layaknya business as usual Warung Pintar Group'
            imageSrc={{ image: getImage(data.benefitImages.nodes[4]), class: `smart-benefit-image-05` }}
            imageAlt='wpg-illustration'
          />
          <BenefitSmartItem
            title='Mematuhi Protokol Kesehatan'
            content='Mitra warung mengantarkan bantuan langsung ke rumah penerima atau mengambilnya ke warung'
            imageSrc={{ image: getImage(data.benefitImages.nodes[5]), class: `smart-benefit-image-06` }}
            imageAlt='wpg-illustration'
          />
        </BenefitSmartHelp>
      </section>

      <section className='smart-assist-achievement-section'>
        <Statistic
          title='Capaian Bantuan Pintar'
          isTitleYellow={true}
          isHelpPage={true}
        >
          <div className='columns is-multiline'>
            <div className='column is-12-desktop is-12-widescreen is-12-tablet'>
              <StatisticItem
                title='Rp 20 Milyar'
                subtitle='Bantuan disalurkan dalam bentuk sembako,<br/> makanan cepat saji, sarana protokol kesehatan,<br/> dan pemberdayaan ekonomi'
                subtitleMobile='Bantuan disalurkan dalam<br/> bentuk sembako, makanan<br/> cepat saji, sarana protokol<br/> kesehatan, dan pemberdayaan<br/> ekonomi'
                imageSrc={{ image: getImage(data.achievementImages.nodes[0]), class: 'statistic-image-01' }}
                description={true}
                isHelpPage={true}
                imageAlt='wpg-illustration'
              />
            </div>
            <div className='column is-12-desktop is-8-widescreen is-12-tablet'>
              <StatisticItem
                title='250,000+'
                subtitle='Orang Terdampak'
                subtitleMobile='Orang Terdampak'
                isHelpPage={true}
                imageSrc={{ image: getImage(data.achievementImages.nodes[1]), class: 'statistic-image-02' }}
                imageAlt='wpg-illustration'
              />
            </div>
            <div className='column is-12-desktop is-4-widescreen is-12-tablet is-hidden-mobile'>
              <StatisticItem
                title='20+'
                subtitle='Kolaborator'
                subtitleMobile='Kolaborator'
                isHelpPage={true}
                imageSrc={{ image: getImage(data.achievementImages.nodes[2]), class: 'statistic-image-03' }}
                imageAlt='wpg-illustration'
              />
            </div>
            <div className='column is-4-widescreen is-12-desktop is-12-tablet is-hidden-tablet'>
              <StatisticItem
                title='20+'
                subtitle='Kolaborator'
                subtitleMobile='Kolaborator'
                isHelpPage={true}
                imageSrc={{ image: getImage(data.achievementImages.nodes[5]), class: 'statistic-image-03' }}
                imageAlt='wpg-illustration'
              />
            </div>
            <div className='column is-12-desktop is-6-widescreen is-12-tablet'>
              <StatisticItem
                title='20+'
                subtitle='Kota dan Kabupaten'
                subtitleMobile='Kota dan Kabupaten'
                isHelpPage={true}
                imageSrc={{ image: getImage(data.achievementImages.nodes[3]), class: 'statistic-image-04' }}
                imageAlt='wpg-illustration'
              />
            </div>
            <div className='column is-12-desktop is-6-widescreen is-12-tablet'>
              <StatisticItem
                title='55'
                subtitle='Program & <br /> Inisiatif'
                subtitleMobile='Program & Inisiatif'
                isHelpPage={true}
                imageSrc={{ image: getImage(data.achievementImages.nodes[4]), class: 'statistic-image-05' }}
                imageAlt='wpg-illustration'
              />
            </div>
          </div>
        </Statistic>
      </section>

      <section className='covid-respond-section'>
        <div className='is-hidden-desktop'>
          <CovidRespond
            title='Inisiatif Tanggap Pandemi COVID-19'
            subtitle='Penyaluran bantuan berupa sembako, paket makanan, dan sarana protokol kesehatan secara langsung kepada yang berhak menerima bantuan.'
          >
            <CovidRespondItem
              title='Rp 2,3 MILYAR +'
              subtitle='Bantuan Tanggap Pandemi'
              imageSrc={{ image: getImage(data.covidrespondImages.nodes[0]), class: 'covid-image-01' }}
              imageAlt='wpg-illustration'

            />
            <CovidRespondItem
              title='30,000'
              subtitle='Paket Protokol Kesehatan <br /> (masker dan hand-sanitizer)'
              imageSrc={{ image: getImage(data.covidrespondImages.nodes[1]), class: 'covid-image-01' }}
              imageAlt='wpg-illustration'
            />
            <CovidRespondItem
              title='30,000'
              subtitle='Sembako dan Makanan Siap Saji'
              imageSrc={{ image: getImage(data.covidrespondImages.nodes[2]), class: 'covid-image-01' }}
              imageAlt='wpg-illustration'
            />
          </CovidRespond>
        </div>

        <div className='is-hidden-touch'>
          <CovidRespond
            title='Inisiatif Tanggap Pandemi COVID-19'
            subtitle='Penyaluran bantuan berupa sembako, paket makanan, dan sarana protokol kesehatan secara langsung kepada yang berhak menerima bantuan.'
          >
            <div className='column is-8'>
              <CovidRespondItem
                title='Rp 2,3 MILYAR +'
                subtitle='Bantuan Tanggap Pandemi'
                imageSrc={{ image: getImage(data.covidrespondImages.nodes[0]), class: 'covid-image-01' }}
                imageAlt='wpg-illustration'
              />
            </div>
            <div className='column is-4'>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CovidRespondItem
                  title='30,000'
                  subtitle='Paket Protokol Kesehatan <br /> (masker dan hand-sanitizer)'
                  imageSrc={{ image: getImage(data.covidrespondImages.nodes[1]), class: 'covid-image-02' }}
                  imageAlt='wpg-illustration'
                />
                <CovidRespondItem
                  title='30,000'
                  subtitle='Sembako dan Makanan Siap Saji'
                  imageSrc={{ image: getImage(data.covidrespondImages.nodes[2]), class: 'covid-image-02' }}
                  imageAlt='wpg-illustration'
                />
              </div>
            </div>
          </CovidRespond>
        </div>

        <div className='apl-distribution'>
          <div className='container'>
            <h2>Alur distribusi bantuan tanggap pandemi</h2>
            <div className='apl-distribution-contents'>
              <GatsbyImage className='is-hidden-mobile' image={getImage(data.distributionFlow.nodes[9])} alt='wpg-illustrator' />
              <GatsbyImage className='is-hidden-tablet' image={getImage(data.distributionFlow.nodes[10])} alt='wpg-illustrator' />
            </div>
          </div>
        </div>
      </section>

      <section className='economy-recovery-section'>
        <EconomyRecovery
          title='Inisiatif Pemulihan Ekonomi'
          subtitle='Pandemi Covid-19 menyebabkan setidaknya 500 ribu orang kehilangan pekerjaan dan 47% UMKM mengalami kekurangan modal usaha dengan 70% diantaranya berada di sektor perdagangan'
        >
          {economyRecoveryData.map((itemData, index) => (
            <EconomyRecoveryItem
              key={index}
              title={itemData.title}
              imageSrc={getImage(itemData.imageSrc.localFile)}
              description={itemData.description}
            />
          ))}
        </EconomyRecovery>
      </section>

      <section className='business-assistance-section'>
        <BusinessAssistance title='Pendampingan Usaha Online dan Offline' subtitle='Selain modal usaha, Warung Pintar Group juga memberikan pendampingan usaha secara online maupun offline'>
          {businessAssistanceData.map((itemData, index) => (
            <BusinessAssistanceItem
              key={index}
              content={itemData.content}
              imageSrc1={getImage(itemData.imageSrc1.localFile)}
              imageSrc2={getImage(itemData.imageSrc2.localFile)}
              imageAlt1={itemData.imageAlt1}
              imageAlt2={itemData.imageAlt2}
            />
          ))}
        </BusinessAssistance>
      </section>

      <section className='testimoni-kolaborator'>
        <Testimonial
          title='Testimoni Kolaborator'
          isInverse={true}
          helpPage={true}
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
              isHelpPage={true}
            />
          ))}
        </Testimonial>

        <MediaHelpPage imageSrc={getImage(data.mediaImage.nodes[0])} images={data.mediaImages} />
      </section>

      <section className='jumbotron-section'>
        <div className='apl-jumbotron-help-page'>
          <div className='columns container is-gapless'>
            <div className='column is-5 content'>
              <h2>Mari Berkolaborasi!</h2>
              <p>Kami membuka berbagai kerjasama untuk penyaluran bantuan dan program pemberdayaan ekonomi yang berdampak, transparan, dan tepat sasaran</p>
              <a href='mailto:partnership@warungpintar.co' className='apl-jumbotron-help-page--button--primary' target='_blank' rel='nofollow noopener noreferrer'>Hubungi Kami</a>
            </div>
            <div className='column is-7' style={{ marginTop: 'auto' }}>
              <GatsbyImage className='jumbotron-image' alt='wpg-illustrator' image={getImage(data.jumbotronImage)} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const queryData = graphql`
  {
    wpgHeadlessQuery(slug: {eq: "bantuan-pintar"}) {
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
      fieldHelpPage {
        slideBanner {
          buttonLabel
          buttonLink
          withButton
          withLogo
          content
          title
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
                  width: 1000
                )
              }
            }
          }
          logoSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                )
              }
            }
          }
        }
        economyRecoveryItem {
          description
          imageSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                )
              }
            }
          }
          title
        }
        testimoni {
          content
          description
          imageAlt
          name
          imageSrc {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                )
              }
            }
          }
        }
        businessAssistance {
          content
          imageAlt1
          imageAlt2
          imageSrc1 {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                )
              }
            }
          }
          imageSrc2 {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                )
              }
            }
          }
        }
      }
    }

    benefitImages: allFile(
      filter: {relativeDirectory: {eq: "illustrations/smart-help-benefits"}}
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
    achievementImages: allFile(
      filter: {relativeDirectory: {eq: "banners/smart-achievements"}}
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
    covidrespondImages: allFile(
      filter: {relativeDirectory: {eq: "banners/respond-to-covid"}}
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
    distributionFlow: allFile(
      filter: {relativeDirectory: {eq: "illustrations/distribution-flow"}}
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
      filter: {relativeDirectory: {eq: "medias/help-page-medias"}}
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
    jumbotronImage: file(
      relativePath: {eq: "apps/jumbotron-help-page/jumbotron-help-page.png"}
    ) {
      childImageSharp {
        gatsbyImageData(
            width: 1200
          )
      }
    }
    mediaImage: allFile(
      filter: {relativeDirectory: {eq: "medias/help-page-medias"}}
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
    logoImage: file(relativePath: {eq: "warpin-logo-inverse.png"}) {
      childImageSharp {
        gatsbyImageData(
          width: 800
        )
      }
    }
  }
`

export default BantuanPintarPage