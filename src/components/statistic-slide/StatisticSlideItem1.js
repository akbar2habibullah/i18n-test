import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const StatisticSlideItem1 = ({ title, subtitle, images }) => {
    return (
        <>
            <div className='apl-statisticslide--header'>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
            <div className='columns is-multiline'>
                <div className='column is-12-widescreen is-12-desktop is-12-tablet'>
                    <div className='apl-statisticslide--item1'>
                        <h6>500.000+</h6>
                        <p>Pemilik Warung Terdaftar</p>
                        <GatsbyImage className='statistic-image-01' image={getImage(images[0])} alt='wpg-illustration' />
                    </div>
                </div>
                <div className='column is-8-widescreen is-12-desktop is-12-tablet'>
                    <div className='apl-statisticslide--item1'>
                        <h6>500+</h6>
                        <p className='is-hidden-widescreen'>Distributors dan <br /> Suppliers</p>
                        <p className='is-hidden-until-widescreen'>Distributors dan Suppliers</p>
                        <GatsbyImage className='statistic-image-02' image={getImage(images[1])} alt='wpg-illustration' />
                    </div>
                </div>
                <div className='column is-4-widescreen is-12-desktop is-12-tablet'>
                    <div className='apl-statisticslide--item1 apl-statisticslide--item1--fit'>
                        <h6>600+</h6>
                        <p className='is-hidden-widescreen'>Pedagang <br /> Grosir</p>
                        <p className='is-hidden-until-widescreen'>Pedagang Grosir</p>
                        <GatsbyImage className='statistic-image-03' image={getImage(images[2])} alt='wpg-illustration' />
                    </div>
                </div>
                <div className='column is-6-widescreen is-12-desktop is-12-tablet'>
                    <div className='apl-statisticslide--item1'>
                        <h6>200+</h6>
                        <p>Kabupaten dan Kota</p>
                        <GatsbyImage className='statistic-image-04' image={getImage(images[3])} alt='wpg-illustration' />
                    </div>
                </div>
                <div className='column is-6-widescreen is-12-desktop is-12-tablet'>
                    <div className='apl-statisticslide--item1 apl-statisticslide--item1--fit'>
                        <h6>50+</h6>
                        <p className='is-hidden-widescreen'>Gudang <br /> dan Depo</p>
                        <p className='is-hidden-until-widescreen'>Gudang dan Depo</p>
                        <GatsbyImage className='statistic-image-05' image={getImage(images[4])} alt='wpg-illustration' />
                    </div>
                </div>
            </div>
        </>
    )
}

StatisticSlideItem1.displayName = 'StatisticSlideItem1'

StatisticSlideItem1.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.array,
}

StatisticSlideItem1.defaultProps = {
    title: null,
    subtitle: null,
    images: [],
}

export default StatisticSlideItem1