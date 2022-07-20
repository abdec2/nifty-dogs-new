import Member from '../Member'
import image1 from './../../assets/team/1.png'
import image2 from './../../assets/team/2.png'
import image3 from './../../assets/team/3.png'
import image4 from './../../assets/team/4.png'
import image5 from './../../assets/team/5.png'
import image6 from './../../assets/team/6.png'




const Team = () => {
  return (
    <div className="tw-text-white tw-font-Barlow tw-text-lg tw-pb-28 tw-relative" id="team">
      <div className="tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3">
        <div className="team__heading tw-mt-20">
          <h1 className="tw-font-Alfa tw-text-center tw-text-5xl tw-uppercase">The Nifty Dogs Team</h1>
        </div>

        <div className="team tw-flex tw-items-center tw-justify-between tw-flex-col md:tw-flex-wrap md:tw-flex-row tw-mt-10">
          <Member image={image1} name="SHAUN BRENNAN" title="Owner" fb="https://www.facebook.com/" tw="https://twitter.com/" insta="https://www.instagram.com/" />
          <Member image={image2} name="JON ROMERO" title="Owner" fb="https://www.facebook.com/" tw="https://twitter.com/" insta="https://www.instagram.com/" />
          <Member image={image3} name="MATTHEW MORRISON" title="Owner" fb="https://www.facebook.com/" tw="https://twitter.com/" insta="https://www.instagram.com/" />
          <Member image={image4} name="BRADLEY BAKER" title="Development" fb="https://www.facebook.com/" tw="https://twitter.com/" insta="https://www.instagram.com/" />
          <Member image={image5} name="ZACH SCHAEFER" title="Design" fb="https://www.facebook.com/" tw="https://twitter.com/" insta="https://www.instagram.com/" />
          <Member image={image6} name="ERIC PIERACCI" title="Marketing" fb="https://www.facebook.com/" tw="https://twitter.com/" insta="https://www.instagram.com/" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1657730253">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Team