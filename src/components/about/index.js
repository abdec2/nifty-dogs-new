import about from './../../assets/about.png'
const About = () => {
    return (
        <div className="tw-bg-black tw-bg-opacity-80 tw-relative tw-z-50 tw-mb-[105px]" >
            <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3 tw-relative">
                <div className="tw-py-4">
                    <div className="tw-w-full">
                        <div className="tw-w-full">
                            <h1 className="tw-font-Alfa tw-leading-normal tw-text-3xl tw-text-white tw-uppercase tw-text-center lg:tw-text-left lg:tw-text-5xl">Get Paired up with <br /> a one of a kind dog</h1>
                        </div>
                        <div className="">
                            <h2 className="tw-text-center tw-font-Grace tw-text-3xl tw-text-[#BFCE0F] tw-uppercase lg:tw-text-6xl lg:tw-text-left lg:tw-ml-32 lg:-tw-rotate-3">Nifty Dogs Alpha Collection</h2>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center tw-flex-col lg:tw-flex-row tw-mt-8 ">
                        <div className="tw-w-full lg:tw-w-1/2">
                            <p className="tw-text-white tw-font-Barlow tw-text-lg tw-mb-8">Not only are service dogs difficult to own, but they are also very expensive to manage. Over the years, the government has taken no responsibility for funding the veterans who get service dogs' prescriptions. While the U.S. Congress has only passed the bill for service dog funding, the bill is still in review.</p>

                            <p className="tw-text-white tw-font-Barlow tw-text-lg tw-mb-8">With this backlog in connecting service dogs to veterans and individuals in need of their companionship, Nifty Dogs leverages blockchain technology and its integrative NFT innovation to develop a community of veterans and civilians in need of service dogs for their health. Community members raise funds for service dogs to be trained at K9 warriors and have these trained dogs connected to every veteran. By being a part of the community, every veteran who fought for others' freedom of life can own a service dog or have their dog trained at K9 warriors.</p>
                        </div>
                        <div className="tw-w-full tw-hidden lg:tw-w-1/2 lg:tw-block">
                            <div className='tw-relative'>
                                <img src={about} alt="" className='tw-absolute tw-top-0 tw-left-0 -tw-translate-y-[60%] tw-z-50' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-top-1657495032">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1657503357">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}

export default About