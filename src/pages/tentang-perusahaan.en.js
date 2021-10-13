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
import StatisticSlideItem1 from '../components/statistic-slide/StatisticSlideItem1.en'
import StatisticSlideItem2 from '../components/statistic-slide/StatisticSlideItem2.en'
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
            title='A Leading Digital Supply Chain'
            subtitle='Empowering digital and economic inclusion to the rest of Indonesia'
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
          title='Huge Challenge In Traditional Channel'
          content='Warung has been a community hub for 270 millions of population in Indonesia. Yet, Warung or traditional distribution channel is deeply fragmented and asymmetric, limiting growth and efficiencies for the whole ecosystem from manufacturers, distributor, wholesalers and small retailers or warung.'
          imageSrc={getImage(data.channeBackground)}
        />
      </section>

      <section className='timeline-section'>
        <Timeline
          titleTop='Digitalizing The Biggest Distribution Channel In Indonesia'
          titleBottom='Warung Pintar App'
          subtitleTop='Starts From Supply Chain Solutions :'
          subtitleBottom='To Merchant Solution For Warung Owners :'
          contentTop='By digitalizing the distribution system, Warung Pintar Group able to create information transparency for all stakeholders. And today, we become the only player in the market with the most reliable and complete end to end solutions in warung business ecosystem.'
          contentBottom='One stop digital solution for warung owners to manage their business'
          imageSrcDefault={getImage(data.timelineAppImages.nodes[0])}
        >
          <TimelineTopItem
            title='Bizzy Connect'
            content='Integrated distribution operation system, connecting warung owners, salesman, truck delivery, warehouses and brands. Distributors can gain a clear retail visibility and supply-demand prediction. Meanwhile, Brands can get a real-time updates, wider access to a bigger numeric distribution and direct marketing activity.'
            imageSrc={getImage(data.timelineBannerImages.nodes[0])}
            imageAlt='wpg-illustrator'
            isFirstLine={true}
          />
          <TimelineTopItem
            title='Warung Pintar Distribution'
            content='Access more than 500 available SKU in Warung Pintar Warehouses for their chain supply which efficiently supported by less than 24 hours delivery order.'
            imageSrc={getImage(data.timelineBannerImages.nodes[1])}
            imageAlt='wpg-illustrator'
            isReverse={true}
          />
          <TimelineTopItem
            title='Grosir Pintar App'
            content='Connecting wholesalers to hundreds of new warung owners and same day delivery to warung owners. Also Bisnis Pintar as a B2B concierge service for wholesalers to procure inventory.'
            imageSrc={getImage(data.timelineBannerImages.nodes[2])}
            imageAlt='wpg-illustrator'
          />

          <TimelineBottomItem
            title='FMCG Commerce'
            content='Complete category from multiple suppliers.'
            imageSrc={getImage(data.timelineAppImages.nodes[0])}
          />
          <TimelineBottomItem
            title='Promotion Package'
            content='Targeted promotion to retailer.'
            imageSrc={getImage(data.timelineAppImages.nodes[1])}
          />
          <TimelineBottomItem
            title='Digital Goods'
            content='Enabling retailer to sell daily digital needs.'
            imageSrc={getImage(data.timelineAppImages.nodes[2])}
          />
          <TimelineBottomItem
            title='Digital Ledger'
            content='Alternative for physical recording book.'
            imageSrc={getImage(data.timelineAppImages.nodes[3])}
          />
          <TimelineBottomItem
            title='Digital Advertising'
            content='Retailer engagement programs and content to boost awareness and conversions.'
            imageSrc={getImage(data.timelineAppImages.nodes[4])}
            isFull={true}
          />
        </Timeline>
      </section>

      <section className='testimonial-section'>
        <Testimonial
          title='Real Stories From Partners'
          subtitle='Warung Owner and Wholesalers'
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
        <BrandDistributor title='Brand and Distributors' images={data.mediaImages}>
          <BrandDistributorItem
            content='Together with Coca-Cola Amatil Indonesia since Q1 2020, Warung Pintar has created a new sales channel to increase turnover and expand the reach of Coca-Cola Amatil Indonesia products in the general trade segment.'
            contentColor='#E5000A'
            imageSrc={{ image: getImage(data.cocaColaIcon), width: '140px' }}
          />
          <BrandDistributorItem
            content='Reckitt sales increase around 24% from month to month since late 2019. It can be seen from the growth of the monthly transactions in Warung Pintar Application that have increased 10 times over the past year, which is also the result of the steadily increasing internet penetration.'
            contentColor='#E50072'
            imageSrc={{ image: getImage(data.reckittIcon), width: '117px' }}
          />
          <BrandDistributorItem
            content='Since we partnered together from the beginning of June 2020, Juragan`s exposure to online trading has increased. This has led to improvement in many area. The average income of Juragan Warung Pintar has increased up to 50% with an average increase of 360 customers per month.'
            contentColor='#01A92E'
            imageSrc={{ image: getImage(data.grabMartIcon), width: '196px' }}
          />
        </BrandDistributor>
      </section>

      <section className='social-impact-collaborator-section'>
        <SocialImpactCollaborator
          title='Social Impact Collaborators'
          subtitle='Wondering how we can build and deliver more impact together?'
          buttonLabel='Contact Us Here'
          buttonLink='mailto:partnership@warungpintar.co'
          images={data.mediaImages}
        >
          <SocialImpactCollaboratorItem
            content='We have distributed business stimulus and ongoing business assistance to 3000 warung owners.'
            contentColor='#1A489E'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[0])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.bankIndonesiaIcon), width: '200px', widthXs: '104px' }}
          />
          <SocialImpactCollaboratorItem
            content='We have distributed various initiatives of social assistance and business capital stimulus totaling more than IDR 500 million and impacting more than 30,000 people.'
            contentColor='#0067AA'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[1])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.rumahYatimIcon), width: '86px', widthXs: '50px' }}
          />
          <SocialImpactCollaboratorItem
            content='We have raised social support for Kompas Group employees and the surrounding community. Reaching more than 6,000 people with a total of IDR 350 million.'
            contentColor='#3FA8CC'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[2])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.kompasIcon), width: '202px', widthXs: '114px' }}
          />
          <SocialImpactCollaboratorItem
            content='We have provided access to business facilities and financial assistance in the form of stall carts, equipment, and wholesale stalls in all sub-districts of Sumedang Regency.'
            contentColor='#7FB742'
            thumbnailSrc={getImage(data.socialImpactCollaboratorImages.nodes[3])}
            imageAlt='wpg-illustration'
            imageSrc={{ image: getImage(data.insunMedalIcon), width: '86px', widthXs: '33px' }}
          />
        </SocialImpactCollaborator>
      </section>

      <section className='leadership-section'>
        <Leadership title='Our Leadership'>
          <LeadershipItem
            name='Agung Bezharie'
            position='Chief Executive Officer'
            content='“Warung Pintar Group aims to impact the wider surrounding community with warungs as the main gateway to Indonesia’s biggest emerging consuming class to participate in the digital economy”'
            imageSrc={getImage(data.leaderImages.nodes[0])}
            imageAlt="Warung Pintar Group Agung Bezharie"
          />
          <LeadershipItem
            name='Andrew Mawikere'
            position='President'
            content='“Our approach enables us to serve all stakeholders within warung ecosystem with unprecedented value-added and data-driven strategy at scale”'
            imageSrc={getImage(data.leaderImages.nodes[1])}
            imageAlt="Warung Pintar Group Andrew Mawikere"
          />
          <LeadershipItem
            name='Harya Putra'
            position='Chief Product Officer'
            content='“In Warung Pintar Group, we invest in connectivity throughout the ecosystem by providing the most complete services”'
            imageSrc={getImage(data.leaderImages.nodes[4])}
            imageAlt="Warung Pinar Group Harya Putra"
          />
          <LeadershipItem
            name='Sofian Hadiwijaya'
            position='Chief Technology Officer'
            content='“The market is huge, so we can’t do this by ourselves. We don’t rule out the possibility of collaboration to advance the Indonesian economy through digital transformation”'
            imageSrc={getImage(data.leaderImages.nodes[5])}
            imageAlt="Warung Pintar Group Sofian Hadiwijaya"
          />
          <LeadershipItem
            name='Christian Winata'
            position='Chief Commercial Officer (Network)'
            content='“Our primary objective is to create an ecosystem where all stakeholders are benefited from simplified and more transparent process.”'
            imageSrc={getImage(data.leaderImages.nodes[2])}
            imageAlt="Warung Pintar Group Christian Winata"
          />
          <LeadershipItem
            name='Glenn Lai'
            position='Chief Commercial Officer (Business Services)'
            content='“With Warung Pintar Group, we are constantly innovating our partnership approach to help drive growing and win-win outcomes for responsible parties in the ecosystem.”'
            imageSrc={getImage(data.leaderImages.nodes[3])}
            imageAlt="Warung Pintar Group Glen Lai"
          />
        </Leadership>
      </section>

      <section className='investor-section'>
        <Investor title='Our Investors' subtitle='Our visions supported by some of the most respectable investors' investorData={investorData} />
      </section>

      <section className='social-impact-report-section'>
        <SocialImpactReport
          title='Explore Our Social Impact Report'
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
          title='What Media Write About Us'
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
          title="Let's Grow Together With Us for The Future Of Indonesia's Economy"
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
    wpgHeadlessQuery(slug: {eq: "tentang-perusahaan-en"}) {
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