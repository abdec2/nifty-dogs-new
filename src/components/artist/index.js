import image1 from './../../assets/niftyDogShaun 1.png'
import facebook from './../../assets/facebook.svg'
import twitter from './../../assets/twitter.svg'
import insta from './../../assets/instagram.svg'



const Artist = () => {
    return (
        <div className="tw-relative tw-mb-6 " id="artist">
            <div className="artistArea ">
                <div className='tw-bg-black tw-bg-opacity-40 tw-pt-14 md:tw-pt-44'>
                    <div className="custom-shape-divider-top-1657719612">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <div className='tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3'>
                        <div className="tw-flex tw-items-center tw-justify-between tw-flex-col-reverse lg:tw-flex-row ">
                            <div className='tw-w-full tw-mb-10 lg:tw-w-1/2 lg:tw-mr-20 tw-hidden md:tw-block'>
                                <img className='tw-mx-auto lg:tw-mx-0' src={image1} alt="" />
                            </div>
                            <div className='tw-w-full tw-mt-36 lg:tw-w-1/2 tw-p-3 tw-mb-20 md:tw-mb-0'>
                                <div className='artist__heading tw-mb-10'>
                                    <h1 className='tw-text-center tw-text-white tw-text-6xl tw-font-Alfa tw-uppercase md:tw-text-left'>Artist</h1>
                                </div>
                                <div className='artist__para tw-text-white tw-font-Barlow tw-text-lg'>
                                    <h3 className='tw-font-bold tw-uppercase tw-mb-10'>Zeehan the Creator</h3>
                                    <p>As a flexible seasoned cartoonist, character designer/developer, artist, and animator; Zeehan has worked with several brands, NFTs, blockchain design projects, marketing agencies, etc. Cartooning, illustration, and graphic design for over 8 years. Unique artwork styles such as pixel art, UI animations, storyboarding, mascots, logos, comic strips, concept design, and game design - linked to famous cartoons, cartooning, and character design.</p>
                                </div>
                                <div className='tw-flex items-start tw-justify-start tw-space-x-4 tw-my-20'>
                                    <a className="facebook tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href='https://facebook.com/' target="_blank" rel='noreferrer'>
                                        <img src={facebook} alt="" width={30} />
                                    </a>
                                    <a className="twitter tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href='https://twitter.com' target="_blank" rel='noreferrer'>
                                        <img src={twitter} alt="" width={30} />
                                    </a>
                                    <a className="instagram tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href='https://instagram.com' target="_blank" rel='noreferrer'>
                                        <img src={insta} alt="" width={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tw-bg-[#323A06] artist_greenLine'></div>


        </div>
    )
}

export default Artist