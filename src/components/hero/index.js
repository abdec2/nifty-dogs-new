import { useState } from 'react'
import hero from './../../assets/hero.png'
const Hero = () => {
    const [fbClick, setFbClick] = useState(false)

    return (
        <div className="tw-h-[800px] tw-relative">
            <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3 tw-relative tw-py-14">
                <div className='tw-flex tw-items-end tw-justify-end tw-relative tw-z-30'>
                    <div className="tw-w-full lg:tw-w-[60%]">
                        <div className='tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-justify-end lg:tw-items-end'>
                            <h1 className="tw-text-center tw-text-white tw-uppercase tw-font-Alfa tw-text-5xl lg:tw-text-right tw-w-full tw-break-words lg:tw-text-6xl">The Nifty Dogs Alpha Collection</h1>
                            {
                                !fbClick && (
                                    <a href="https://facebook.com/" target="_blank" rel='noreferrer' className="tw-my-10  tw-text-black tw-bg-white tw-font-Barlow tw-text-xl tw-font-bold tw-uppercase tw-px-10 tw-py-3 tw-rounded-full tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-110 tw-text-center lg:tw-text-2xl" onClick={() => setFbClick(true)}>Join us on Facebook</a>
                                )
                            }
                            {
                                fbClick && (
                                    <a target="_blank" rel='noreferrer' className="tw-my-10  tw-text-black tw-bg-white tw-font-Barlow tw-text-xl tw-font-bold tw-uppercase tw-px-10 tw-py-3 tw-rounded-full tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-110 tw-text-center lg:tw-text-2xl" >Connect Wallet</a>
                                )
                            }

                            <img src={hero} alt="" className='tw-w-[80%] tw-relative -tw-z-10 lg:tw-hidden'/>
                        </div>
                    </div>
                </div>
                {/* <div className='tw-clear-both'></div> */}
                <div className='tw-absolute tw-top-0 tw-left-0 tw-translate-x-[-70px] tw-translate-y-20 tw-hidden lg:tw-block' >
                    <div className='tw-relative w-full'>
                        <img src={hero} alt="" className='tw-w-[80%] tw-relative -tw-z-10' />
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1657471885 tw-z-30">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}

export default Hero