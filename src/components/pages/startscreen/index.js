import { Link } from 'react-router-dom'

import logo from './../../../assets/logo.png'
import facebook from './../../../assets/facebook.svg'
import twitter from './../../../assets/twitter.svg'
import insta from './../../../assets/instagram.svg'
const StartScreen = () => {
    return (

        <div className="tw-bg-black tw-min-h-screen">
            <div className="tw-container tw-max-w-5xl tw-mx-auto tw-p-12">
                <div className="tw-flex tw-items-center tw-justify-center tw-flex-col">
                    <div className='tw-p-14'>
                        <img src={logo} alt="Nifty Dogs" width='80%' className='tw-mx-auto' />
                    </div>
                    <div className='tw-mb-8'>
                        <h1 className='tw-text-white tw-text-[1.75rem] md:tw-text-6xl tw-uppercase tw-text-center tw-font-Alfa'>Pairing service dogs with people in need</h1>
                    </div>
                    <div className='tw-font-Barlow tw-font-normal tw-max-w-[974px] tw-mb-12'>
                        <h5 className='tw-text-white tw-text-[1rem] md:tw-text-2xl tw-uppercase tw-text-center tw-font-bold'>Our Mission:</h5>
                        <p className='tw-text-white tw-text-[1rem] md:tw-text-xl tw-text-center'>The Nifty Dogs mission is to pair emotional support animals with people in need through NFTs and blockchain technologies. Funding will go towards obedience training with the pet and owner as well as emotional support animal application and certification. </p>
                    </div>
                    <div className="actionBtns">
                        <div className='tw-flex tw-items-center tw-justify-around md:tw-space-x-10 tw-mb-5 tw-flex-col tw-space-y-5 md:tw-space-y-0 md:tw-flex-row'>
                            <Link to='/alpha' className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group tw-transition-all tw-ease-in-out tw-duration-700'>
                                <span className='md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold'>Alpha Collection</span>
                            </Link>
                            <div className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group tw-transition-all tw-ease-in-out tw-duration-700'>
                                <span className='tw-w-full tw-text-[1.0rem] md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold group-hover:tw-hidden'>
                                    Bravo Collection
                                </span>
                                <span className='tw-hidden tw-text-opacity-0 tw-w-full tw-text-[1.0rem] md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold group-hover:tw-text-opacity-100 group-hover:tw-block'>
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                        <div className='tw-flex tw-items-center tw-justify-around md:tw-space-x-10 tw-mb-5 tw-flex-col tw-space-y-5 md:tw-space-y-0 md:tw-flex-row'>
                            <div className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group tw-transition-all tw-ease-in-out tw-duration-700'>
                                <span className='tw-w-full tw-text-[1.0rem] md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold group-hover:tw-hidden'>
                                    Charlie Collection
                                </span>
                                <span className='tw-hidden tw-text-opacity-0 tw-w-full tw-text-[1.0rem] md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold group-hover:tw-text-opacity-100 group-hover:tw-block'>
                                    Coming Soon
                                </span>
                            </div>
                            <div className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group tw-transition-all tw-ease-in-out tw-duration-700'>
                                <span className='tw-w-full tw-text-[1.0rem] md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold group-hover:tw-hidden'>
                                    Delta Collection
                                </span>
                                <span className='tw-hidden tw-text-opacity-0 tw-w-full tw-text-[1.0rem] md:tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold group-hover:tw-text-opacity-100 group-hover:tw-block'>
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="footer tw-mt-10">
                        <div className="logo tw-w-24 tw-mx-auto tw-mb-3">
                            <img src={logo} alt="Nifty dogs" />
                        </div>
                        <div className="socialIcons tw-flex tw-items-center tw-justify-center tw-space-x-6 tw-mb-3">
                            <a className="facebook" href='https://www.facebook.com/groups/nft101forpetlovers/?ref=share' target="_blank" rel='noreferrer'>
                                <img src={facebook} alt="" width={30} />
                            </a>
                            {/* <a className="twitter" href='https://twitter.com' target="_blank" rel='noreferrer'>
                                <img src={twitter} alt="" width={30} />
                            </a> */}
                            <a className="instagram" href='https://instagram.com/nifty_dogs?igshid=NmZiMzY2Mjc=' target="_blank" rel='noreferrer'>
                                <img src={insta} alt="" width={30} />
                            </a>
                        </div>
                        <div className="copyright">
                            <p className='tw-text-white tw-text-[1.0rem] md:tw-text-lg tw-font-Barlow tw-font-normal tw-text-center'>© All rights reserved. 2022</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default StartScreen 