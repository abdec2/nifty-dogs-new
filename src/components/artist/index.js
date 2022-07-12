import image1 from './../../assets/niftyDogShaun 1.png'
const Artist = () => {
    return (
        <div className="tw-relative tw-mb-6">
            <div className='artistArea tw-pt-14 md:tw-pt-32'>
                <div className='tw-container tw-mx-auto tw-max-w-[1320px]'>
                    <div className="tw-flex tw-items-center tw-justify-center tw-flex-col md:tw-flex-row">
                        <div className='tw-w-full md:tw-w-1/2'>
                            <img className='tw-w-4/5 tw-mx-auto md:tw-mx-0' src={image1} alt="" />
                        </div>
                        <div className='tw-w-full md:tw-w-1/2'>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='tw-h-[96px] tw-bg-[#323A06BF] artist_greenLine'></div>


        </div>
    )
}

export default Artist