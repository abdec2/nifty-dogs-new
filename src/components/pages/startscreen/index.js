import { Link  } from 'react-router-dom'

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
                        <img src={logo} alt="Nifty Dogs" width='80%' className='tw-mx-auto'/>
                    </div>
                    <div className='tw-mb-8'>
                        <h1 className='tw-text-white tw-text-6xl tw-uppercase tw-text-center tw-font-Alfa'>Pairing service dogs with people in need</h1>
                    </div>
                    <div className='tw-font-Barlow tw-font-normal tw-max-w-[974px] tw-mb-12'>
                        <h5 className='tw-text-white tw-text-2xl tw-uppercase tw-text-center tw-font-bold'>Our Mission:</h5>
                        <p className='tw-text-white tw-text-xl tw-text-center'>To create an exciting platform to help pair trained service dogs with veterans, Hospitals and other groups. Using cryptocurrencies and blockchain technologies, our community will generate funds that can be donated to specific causes that directly impact the need that people have for trained service dogs.</p>
                    </div>
                    <div className="actionBtns tw-flex tw-items-center tw-justify-center tw-flex-col tw-space-y-6 tw-font-Barlow tw-mb-16">
                        <Link to='/alpha' className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group'>
                            <span className='tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold'>Alpha Collection</span>
                        </Link>
                        <div className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group'>
                            <span className='tw-w-full tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold'>Bravo Collection</span>
                        </div>
                        <div className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group'>
                            <span className='tw-w-full tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold'>Charlie Collection</span>
                        </div>
                        <div className='tw-py-2 tw-px-4 tw-w-[280px] tw-text-center tw-border tw-border-white tw-border-opacity-25 tw-rounded-full hover:tw-bg-white hover:tw-cursor-pointer tw-group'>
                            <span className='tw-w-full tw-text-lg tw-uppercase tw-text-white tw-opacity-25 tw-font-normal group-hover:tw-text-[#3C3D41] group-hover:tw-opacity-100 group-hover:tw-font-bold'>Delta Collection</span>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="logo tw-w-24 tw-mx-auto tw-mb-3">
                            <img src={logo} alt="Nifty dogs" />
                        </div>
                        <div className="socialIcons tw-flex tw-items-center tw-justify-center tw-space-x-6 tw-mb-3">
                            <a className="facebook" href='https://facebook.com/' target="_blank" rel='noreferrer'>
                                <img src={facebook} alt="" width={30} />
                            </a>
                            <a className="twitter" href='https://twitter.com' target="_blank" rel='noreferrer'>
                                <img src={twitter} alt="" width={30} />
                            </a>
                            <a className="instagram" href='https://instagram.com' target="_blank" rel='noreferrer'>
                                <img src={insta} alt="" width={30} />
                            </a>
                        </div>
                        <div className="copyright">
                            <p className='tw-text-white tw-text-lg tw-font-Barlow tw-font-normal'>© All rights reserved. 2022</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default StartScreen 