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
        <Market title='Access To Your Market Never Been This Easy'>
          <MarketItem
            title='Real Time Dashboard'
            content="Monitor what's happening in your market and get your performance report."
            imageSrc={getImage(data.marketImages.nodes[0])}
            imageXsSrc={getImage(data.marketImages.nodes[3])}
            imageAlt='Real time dashboard'
          />
          <MarketItem
            title='Gain In More Numeric Distribution'
            content='Increase number of outlet coverage for your products without conflicting with your existing channels.'
            imageSrc={getImage(data.marketImages.nodes[1])}
            imageXsSrc={getImage(data.marketImages.nodes[4])}
            imageAlt='numeric distribution'
            isReverse={true}
          />
          <MarketItem
            title='Insights For Promotion'
            content='Get the market insights, push your product awareness, creates effective campaigns, and boost your retailer loyalty.'
            imageSrc={getImage(data.marketImages.nodes[2])}
            imageXsSrc={getImage(data.marketImages.nodes[5])}
            imageAlt='promotion insight'
          />
        </Market>
      </section>

      <section className='campaign-section'>
        <Campaign title='Create Campaigns And Monitor Your Promotion With Iklan Pintar' iconSrc={getImage(data.iklanPintarIcon)}>
          <CampaignItem content='Boost Your Awareness To Retailer <b> With In App Promotion </b>' imageSrc={getImage(data.campaignImages.nodes[0])} imageAlt="boost awareness in app promotion"/>
          <CampaignItem content='Get Closer To Your Customer <b> With Offline Activations </b>' imageSrc={getImage(data.campaignImages.nodes[1])} imageAlt="get closer to customer"/>
        </Campaign>
      </section>

      <section className='channel-section'>
        <Channel
          title='What Makes Us Different?'
          content='Warung Pintar Group vision is to revolutionize the traditional distribution channel, not disrupting it. <br /> <br /> We aim to democratize our technology for every stakeholders in warung business ecosystem. A transparent system to create economy inclusivity for brands, distributors, wholesalers and most importantly warung owners.'
          imageSrc={getImage(data.channelBackground)}
          isSecondary={true}
        />
      </section>

      <section className='partner-section'>
        <Partner title='Testimony From Brand & Supplier' isSecondary={true}>
          <PartnerItem
            content='Reckitt sales increase around 24% from month to month since late 2019. It can be seen from the growth of the monthly transactions in Warung Pintar Application that have increased 10 times over the past year, which is also the result of the steadily increasing internet penetration.'
            iconSrc={{ image: getImage(data.reckittIcon), width: '179px' }}
            imageSrc={getImage(data.partnerImages.nodes[0])}
            imageXsSrc={getImage(data.partnerImages.nodes[4])}
            imageAlt='wpg-illustrator'
            contentColor='#E50072'
          />
          <PartnerItem
            content='Together with Coca-Cola Amatil Indonesia since Q1 2020, Warung Pintar Group has created a bigger numeric distribution number by digitalizing CCAI existing distribution channel in the general trade segment.'
            iconSrc={{ image: getImage(data.cocaColaIcon), width: '216px' }}
            imageSrc={getImage(data.partnerImages.nodes[2])}
            imageXsSrc={getImage(data.partnerImages.nodes[6])}
            imageAlt='wpg-illustrator'
            contentColor='#E5000A'
          />
        </Partner>
      </section>

      <section className='faq-section'>
        <FaqAccordion title='Faq'>
          <FaqAccordionItem
            title="What is Warung Pintar's business model, and how can our brand tap into the network?"
            content="Warung Pintar Group helps the brand reach the retailers in the market in the most efficient and transparent way to maximize the availability and the visibility of the brands at the retailer level. <br /> <br />
            To reach this objective, every partnership requires a different approach based on their needs which is generally classified into 2 major models: <br />
            1. Trading driven model - through personally tailored campaign, Warung Pintar serves the principal in the execution partner from purchasing goods to reaching to the retailers through our network of assets/partner assets. Every trading process is monitored in our tech-enabled ecosystem. <br /> <br />
            2. Marketplace model - Warung Pintar connects the brand's partner assets in our digital platforms accessed by hundreds of thousands of merchants. Our network create a one-stop solution for retailers that is both seamless ad user-friendly. <br /> <br />
            To understand further, please schedule a session with Warung Pintar's Business Development team today."
          />
          <FaqAccordionItem
            title="On the retailer front, what is the target retailer Warung Pintar works with today? And where do you exist in today?"
            content="Warung Pintar Group works with any kinds of retailer in the market supplying FMCG. These retailers's challenge is inefficient and mutiple layers of supply chain in the market.We aim to simplify the whole supply chain management for retailers and provide transparent process for all stakeholders in our ecosystem. <br /> <br />
            As per today, we are based in most tier-1 cities around Indonesia and expanding rapidly. For the future, we aim to partner with all FMCG-related retail formats in the market today. "
          />
          <FaqAccordionItem
            title="What is Warung Pintar's engagement model with retailers?"
            content="We take a digital first and online to offline engagement secondary approach in onboarding and retaining retailers today. All retailers make orders via our  mobile applications, but user's first onboarding, education, engagement and physical delivery are conducted offline. To retain our retailers, we currently combine both online and offline initiatives while constantly innovating."
          />
          <FaqAccordionItem
            title="How does Warung Pintar work with brands on growing into new retailers instead of brand's current retailers?"
            content="Warung Pintar Group's primary objective is to drive long term sustainable trade solving the inefficiencies found between brands and retailers today due to the long fragmented chains. As such, it is to Warung Pintar's long term detriment if we focus primarily on reaching existing stores that the brand already effectively reaches directly today (which are less problematic and less fragmented).
            As such, as every brand is onboarded, during the onboarding process we provide an industry leading approach, framework and conflict resolution processes that help us setup a win-win partnership with brands that ends up growing their overall business in partnership with us. Reach out to us to schedule a session to learn more!."
          />
          <FaqAccordionItem
            title="How is our brand's / distributor's data managed in Warung Pintar universe, and how can we ensure our competitors are not benefitting from working together with you?"
            content="We uphold the data confidentiality on our platform and have strict contractural obligations as well as company security protocols to ensure data is kept confidential to related stakeholders. On our digital platforms, each brand owner's data is segregated from one another. Each brands can only view their own data. Same case applied in the distributor level where each distributor within the platform will not have access to other distributors. <br /> <br />
            We will take extra steps for bigger strategic accounts by providing deeper secondary level confidentiality. For example, we will assigne different account managers who could erect a 'Chinese wall' of information segregation (https://en.wikipedia.org/wiki/Chinese_wall) to ensure sensitive proprietary information is not shared between partners.'"
          />
          <FaqAccordionItem
            title="Where to reach out?"
            content="For partnership, please reach our business development team."
          />
        </FaqAccordion>
      </section>

      <section className='contactform-section'>
        <ContactForm
          title='Still Got Questions?'
          subtitle="Contact us and let's discuss what we can help to boost your business!"
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
    wpgHeadlessQuery(slug: {eq: "brand-supplier-en"}) {
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