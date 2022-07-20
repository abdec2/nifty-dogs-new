import about from './../../assets/about.png'
const About = () => {
    return (
        <div className="tw-bg-black tw-bg-opacity-80 tw-relative tw-z-50 tw-mb-[105px]" id='about'>
            <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3 tw-relative">
                <div className="tw-py-4">
                    <div className="tw-w-full">
                        <div className="tw-w-full">
                            <h1 className="tw-font-Alfa tw-leading-normal tw-text-3xl tw-text-white tw-uppercase tw-text-center lg:tw-text-left lg:tw-text-5xl">Get Paired up with <br /> a one of a kind dog</h1>
                        </div>
                        <div className="">
                            <h2 className="tw-text-center tw-font-Grace tw-text-3xl tw-text-[#BFCE0F] tw-uppercase lg:tw-text-6xl lg:tw-text-left lg:tw-ml-32 lg:-tw-rotate-3">HELP PAIR A VET AND A PET</h2>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center tw-flex-col lg:tw-flex-row tw-mt-8 ">
                        <div className="tw-w-full lg:tw-w-1/2">
                            <p className="tw-text-white tw-font-Barlow tw-text-lg tw-mb-8">Emotional support animals can play a big role in helping veterans live normal lives. That’s why Nifty Dogs wants to fill that need for as many veterans as possible. Whether a vet already owns a pet or is looking for a new companion, Nifty Dogs will help train and certify that pet as an emotional service animal. That way the veteran can benefit not only at home but in all public places giving emotional support to our veterans 100% of the time. Over the years, the government has taken no responsibility for funding the veterans who get service dogs' prescriptions. While the U.S. Congress has only passed the bill for service dog funding, the bill is still in review. This is where Nifty Dogs wants to step in to help veterans take their pets through the process and fund the certification from A to Z.</p>

                            <p className="tw-text-white tw-font-Barlow tw-text-lg tw-mb-8">First Nifty Dogs finds a vet in need. If they need a pet we find one. If they already have a pet, the next step is obedience training with the vet and the pet. Then the proper application and procedure is followed to certify the pet as an emotional support animal, The pet can then be with the vet 100% of the time giving them 100% of the emotional support they need and deserve.</p>

                            <p className="tw-text-white tw-font-Barlow tw-text-lg tw-mb-8">With a backlog in connecting service dogs to veterans in need of their companionship, Nifty Dogs will leverage blockchain technology and use NFTs to connect and fund a community of veterans in need of emotional support. </p>
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