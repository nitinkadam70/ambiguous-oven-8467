import React from 'react'
import Styles from './AppPage.module.css';
const AppPage = () => {
    return (
        <>
            <div className='app-main-container'>
                <div className={Styles.appTopContainer}>
                    <div>
                        <h1 className={Styles.appHeading}>Bitrix24 apps</h1>
                    </div>
                </div>


                {/* First Div with mailchimp image and description */}


                <div className={Styles.appFirstContainer}>
                    <div className={Styles.appFirstImage}>
                        <img className={Styles.appFirstImg} src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/apps/app_catalog.png.webp?1657897535000' alt='malchimpImage'></img>
                    </div>


                    <div className={Styles.appFirstDescription}>
                        <div className='appFirstHeading'>
                            <h1 className={Styles.appFirstHeading}>Bitrix24.Market</h1>
                        </div>
                        <div className='appFirstParagraph'>
                            <p className={Styles.appFirstParagraph}>Browse our marketplace to get cool add-ons and custom solutions for your Bitrix24. Developed by our partners and approved by us, these apps include custom landing page templates, integrations with third-party tools, and various solutions for telephony, banking, payments systems, and chatbots.</p>
                        </div>
                        <div>
                            <button className={Styles.appFirstButton}>Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Second Div with the barcode,description and the image */}


                <div className={Styles.appSecondContainer}>
                    <div className={Styles.appSecondDescription}>
                        <div>
                            <h1 className={Styles.appFirstHeading}>Free mobile app</h1>
                        </div>
                        <div>
                            <p className={Styles.appFirstParagraph}>Bitrix24 mobile app is an integral part of the Bitrix24 ecosystem. It comes in super handy when you're on the go or have to work from home. Set tasks, make video calls, use chats, post comments, and do so much more with our mobile app.</p>
                        </div>
                        <div>
                            <button className={Styles.appFirstButton}>Learn More</button>
                        </div>
                        <div className={Styles.appSecondImage} >
                            <div>
                                <img src='https://www.bitrix24.in/upload/optimizer/converted/images/content_in/apps/qr.png.webp?1657904657000' alt='barcode'></img>
                            </div>
                            <div className={Styles.appSecondButtons}>
                                <div>
                                    <img src='https://www.bitrix24.in/images/content_common/icons/appstore/app-store-badge-en.svg?1657626164021' alt='appstore'></img>
                                </div>
                                <div>
                                    <img src='https://www.bitrix24.in/images/content_common/icons/appstore/google-play-badge-en.svg?1657626164021' alt='playstore'></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <img className={Styles.appSecondImg} src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/apps/free_mobile_app.png.webp?1657897536000' alt='second-img'></img>
                    </div>
                </div>

                {/* Third Div with laptop image,Heading and the desciption */}

                <div className={Styles.appFirstContainer}>
                    <div className={Styles.appFirstImage}>
                        <img className={Styles.appThirdImg} src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/apps/bitrix24_desktop_app.png.webp?1657897537000' alt='malchimpImage'></img>
                    </div>


                    <div className={Styles.appThirdDescription}>
                        <div className='appFirstHeading'>
                            <h1 className={Styles.appFirstHeading}>Bitrix24 Desktop App</h1>
                        </div>
                        <div className='appFirstParagraph'>
                            <p className={Styles.appFirstParagraph}>Our desktop app really shines when it comes to working with projects or having video conferences. Optimized for a familiar and enjoyable experience on your iMac or Windows computer, the app allows you to quickly react to comments in tasks, make video calls directly from a Bitrix24 chat, share files, and do other amazing things.</p>
                        </div>
                        <div>
                            <button className={Styles.appFirstButton}>Learn More</button>
                        </div>
                        <div>
                            <h3>Download Desktop app:</h3>
                        </div>
                        <div>
                            <a className={Styles.appWindows} href="https://dl.bitrix24.com/b24/bitrix24_desktop.exe?_gl=1*163ku5l*_ga*MTI1MzA4NjU0My4xNjU4MjA4Mzgw*_ga_YLDC55MYKM*MTY1ODMwMDAzOC41LjEuMTY1ODMwMDA0Ny4w">For Windows</a>
                            <a className={Styles.appMac} href="https://dl.bitrix24.com/b24/bitrix24_desktop.dmg">For Mac</a>
                            <a className={Styles.appMsi} href="https://dl.bitrix24.com/b24/bitrix24_desktop.msi">Download .msi</a>
                        </div>
                    </div>
                </div>

                {/* Fourth Open API Div with Heading, image and Desciption */}


                <div className={Styles.appFourthContainer}>
                    <div className={Styles.appFourthDescription}>
                        <div>
                            <h1 className={Styles.appFirstHeading}>Open API</h1>
                        </div>
                        <div>
                            <p className={Styles.appFirstParagraph}>Know how to make Bitrix24 better? We've got plenty of possibilities for you to do that! Bitrix24 has an open API which allows our clients and partners enhance their cloud intranets through adjusting workflows and business logic inside their cloud-based portals.</p>
                        </div>
                        <div>
                            <button className={Styles.appFirstButton}>Learn More</button>
                        </div>

                    </div>
                    <div>
                        <img className={Styles.appFourthImg} src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/apps/api.1600w.jpg.webp?1657897537000' alt='second-img'></img>
                    </div>
                </div>


            </div>
        </>
    )
}

export default AppPage;