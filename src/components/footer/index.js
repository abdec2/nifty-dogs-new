import logo from './../../assets/logo.png'
import facebook from './../../assets/facebook.svg'
import twitter from './../../assets/twitter.svg'
import insta from './../../assets/instagram.svg'

const FooterComponent = () => {
    return (
        <div className="footerArea tw-text-white tw-relative" id="footer">
            <div className="custom-shape-divider-top-1657737031">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="tw-bg-black tw-bg-opacity-40 tw-pt-96 tw-min-h-screen">
                <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3">
                    <div className="tw-flex tw-items-center tw-justify-center tw-flex-col">
                        <div className="tw-max-w-[800px] tw-mb-5">
                            <h1 className="tw-text-5xl tw-font-Alfa tw-text-center">LET ME IN - I WANT TO BE PART OF THE NIFTY DOGS!</h1>
                        </div>
                        <div className="tw-max-w-[720px] tw-mb-8">
                            <p className="tw-text-center tw-font-Barlow tw-text-lg">If you think are truly ready, and that you can really handle the immense power of NIFTY DOGS,
                                find  your way to our official Discord Channel.</p>
                        </div>
                        <a className="tw-font-Barlow tw-font-bold tw-uppercase tw-border tw-border-white tw-rounded-full tw-px-10 tw-py-2 hover:tw-text-gray-500 hover:tw-bg-white tw-transition-all tw-ease-in-out tw-duration-300" href="" target="_blank" rel="noreferrer">Join Our Discord</a>
                    </div>

                    <div className="footer tw-py-16">
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
                            <p className='tw-text-white tw-text-lg tw-font-Barlow tw-font-normal tw-text-center'>© All rights reserved. 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent