import React, { Children } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

import DownloadItem from './DownloadItem'
import DownloadItemOther from './DownloadItemOther'

const Download = ({ children, title, subtitle, buttonLabel, buttonLink, iconSrc, imageSrc, imageAlt, withOther }) => {
    return (
        <div className='apl-download'>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-6 is-hidden-touch'>
                        <GatsbyImage image={imageSrc} alt={imageAlt} />
                    </div>
                    <div className='column is-6-desktop is-12-tablet'>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        {Children.map(children, (item, index) => {
                            if (item.type?.displayName === 'DownloadItem') {
                                return (
                                    <DownloadItem key={index} title={item.props?.title} imageSrc={item.props?.imageSrc} />

                                )
                            }
                        })}
                        <div className='apl-download--button'>
                            <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>{buttonLabel}</a>
                            <a href={buttonLink} target='_blank' rel='nofollow noopener noreferrer'>
                                <GatsbyImage image={iconSrc} alt='googleplay-icon' />
                            </a>
                        </div>
                    </div>
                </div>
                {withOther &&
                    <div className='apl-download--other'>
                        <h2 id='keuntungan'>Enjoy our features:</h2>
                        <div className='columns is-mobile is-multiline'>
                            {Children.map(children, (item, index) => {
                                if (item.type?.displayName === 'DownloadItemOther') {
                                    return (
                                        <DownloadItemOther key={index} content={item.props?.content} imageSrc={item.props?.imageSrc} />
                                    )
                                }
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

Download.displayName = 'Download'

Download.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    iconSrc: PropTypes.object,
    imageSrc: PropTypes.object,
    imageAlt: PropTypes.string,
    withOther: PropTypes.bool,
}

Download.defaultProps = {
    children: null,
    title: null,
    subtitle: null,
    buttonLabel: null,
    buttonLink: null,
    iconSrc: null,
    imageSrc: null,
    imageAlt: null,
    withOther: false,
}

export default Download