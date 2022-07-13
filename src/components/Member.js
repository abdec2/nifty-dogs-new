import facebook from './../assets/facebook.svg'
import twitter from './../assets/twitter.svg'
import instagram from './../assets/instagram.svg'

const Member = ({image, name, title, fb, tw, insta}) => {
    return (
        <div className="tw-w-1/3">
            <div className="member tw-mx-auto tw-mt-24">
                <div className="body tw-mx-auto">
                    <div className="avatar tw-mb-8">
                        <img src={image} alt="" className='tw-mx-auto tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-110'/>
                    </div>
                    <div className='tw-font-Barlow tw-uppercase tw-font-bold tw-text-center tw-mb-2'>{name}</div>
                    <div className='tw-font-Barlow tw-uppercase tw-text-center tw-mb-8'>{title}</div>
                    <div className='tw-flex items-center tw-justify-center tw-space-x-4'>
                        <a className="facebook tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href={fb} target="_blank" rel='noreferrer'>
                            <img src={facebook} alt="" width={30} />
                        </a>
                        <a className="twitter tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href={tw} target="_blank" rel='noreferrer'>
                            <img src={twitter} alt="" width={30} />
                        </a>
                        <a className="instagram tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href={insta} target="_blank" rel='noreferrer'>
                            <img src={instagram} alt="" width={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member