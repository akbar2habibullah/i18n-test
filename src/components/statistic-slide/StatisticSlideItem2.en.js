import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const StatisticSlideItem2 = ({ title, subtitle, images }) => {
    return (
        <>
            <div className='apl-statisticslide--header'>
                <h2>{title}</h2>
                <h3 style={{ margin: '0 auto 66px auto' }}>{subtitle}</h3>
            </div>
            <div className='apl-statisticslide--item2'>
                <div className='columns is-multiline'>
                    <div className='column is-3 is-hidden-widescreen'>
                        <div className='apl-statisticslide--item2--card apl-statisticslide--item2--card--full'>
                            <h4>A Bigger Income</h4>
                            <div className='columns is-multiline'>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h5>38<b>%</b></h5>
                                        <h6>Average income and welfare</h6>
                                    </div>
                                </div>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h5>11<b>%</b></h5>
                                        <h6>Average capital increase</h6>
                                    </div>
                                </div>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h5>1,5-3<b>x</b></h5>
                                        <h6>Faster inventory turnover</h6>
                                    </div>
                                </div>
                            </div>
                            <GatsbyImage className='milestone-image-01' image={getImage(images[0])} alt='wpg-illustration' />
                        </div>
                    </div>

                    <div className='column is-6 is-hidden-widescreen'>
                        <div className='apl-statisticslide--item2--card apl-statisticslide--item2--card--quarter'>
                            <h4>A Better Empowerment</h4>
                            <div className='columns is-multiline'>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside apl-statisticslide--item2--card--direction apl-statisticslide--item2--card--start'>
                                        <div className='apl-statisticslide--item2--card--inside--offset'>
                                            <div>
                                                <h6 style={{ width: '100px' }}>almost</h6>
                                                <h5 style={{ width: '100px' }}>50<b>%</b></h5>
                                            </div>
                                            <h6>Juragan are female and they give 75% income contribution from warung to families</h6>
                                        </div>
                                        <GatsbyImage className='milestone-image-02' image={getImage(images[1])} alt='wpg-illustration' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='apl-statisticslide--item2--card apl-statisticslide--item2--card--semifull'>
                            <h4>A Better Time Efficiency</h4>
                            <GatsbyImage className='milestone-image-04' image={getImage(images[3])} alt='wpg-illustration' />
                            <div className='columns is-multiline'>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside apl-statisticslide--item2--card--direction'>
                                        <h5>87<b>%</b></h5>
                                        <h6 className='apl-statisticslide--item2--card--fit'>Satisfaction rate of overall effectiveness and improved family quality time</h6>
                                    </div>
                                </div>
                                <div className='column is-6'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h5>3-5</h5>
                                        <strong>Hours</strong>
                                        <h6>Time saved by delivery service <br /> <br /></h6>
                                    </div>
                                </div>
                                <div className='column is-6'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h5>2.5</h5>
                                        <strong>Hours</strong>
                                        <h6 className='apl-statisticslide--item2--card--fitfull'>Max. time wholesale delivery service via Grosir Pintar</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='column is-3 is-hidden-widescreen'>
                        <div className='apl-statisticslide--item2--card apl-statisticslide--item2--card--full'>
                            <h4>A Better Cost Efficiency</h4>
                            <div className='columns is-multiline'>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h6>Saved up to Rp. 600.000,- per month from transportation cost, parking fee, and delivery cost.</h6>
                                    </div>
                                </div>
                                <div className='column is-12'>
                                    <div className='apl-statisticslide--item2--card--inside'>
                                        <h5>20<b>%</b></h5>
                                        <h6>Lower and competitive price due to shorter distribution chain and compliance to retail sales price standard</h6>
                                    </div>
                                </div>
                            </div>
                            <GatsbyImage className='milestone-image-03' image={getImage(images[2])} alt='wpg-illustration' />
                        </div>
                    </div>

                    <div className='column is-12 is-hidden-until-widescreen'>
                        <div className='apl-statisticslide--item2--card'>
                            <div className='apl-statisticslide--item2--card--inside'>
                                <h5>A Bigger Income</h5>
                                <h6>38 % average income and welfare</h6>
                                <GatsbyImage className='milestone-image-01' image={getImage(images[0])} alt='wpg-illustration' />
                            </div>
                            <div className='apl-statisticslide--item2--card--inside'>
                                <h5>A Better Time Efficiency</h5>
                                <h6>Satisfaction rate of overall effectiveness and improved family quality time</h6>
                                <GatsbyImage className='milestone-image-04' image={getImage(images[3])} alt='wpg-illustration' />
                            </div>
                            <div className='apl-statisticslide--item2--card--inside'>
                                <h5>A Better Cost Efficiency</h5>
                                <h6>Saved up to Rp. 600.000,- per month from transportation cost, parking fee, and delivery cost.</h6>
                                <GatsbyImage className='milestone-image-03' image={getImage(images[2])} alt='wpg-illustration' />
                            </div>
                            <div className='apl-statisticslide--item2--card--inside'>
                                <h5>A Better Empowerment</h5>
                                <h6>50% juragan are female and they give 75% income contribution from warung to families</h6>
                                <GatsbyImage className='milestone-image-02' image={getImage(images[1])} alt='wpg-illustration' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

StatisticSlideItem2.displayName = 'StatisticSlideItem2'

StatisticSlideItem2.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.array,
}

StatisticSlideItem2.defaultProps = {
    title: null,
    subtitle: null,
    images: [],
}

export default StatisticSlideItem2