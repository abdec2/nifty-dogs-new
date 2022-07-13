import About from "../../about"
import Artist from "../../artist"
import FAQ from "../../faq"
import Hero from "../../hero"
import NavbarComponent from "../../navbar"
import Roadmap from "../../roadmap"
import SliderComponent from "../../slider"
import Team from "../../team"
import FooterComponent from './../../footer'

import image2 from './../../../assets/image2.png'

const AlphaCollection = () => {
  return (
    <div className="tw-bg-black">
      <div className="bg-como">
        <NavbarComponent />
        <Hero />
        <About />
        <SliderComponent />
      </div>
      <div >
        <Roadmap />
        <div className="tw-h-24 tw-bg-[#292C1B]"></div>
        <div>
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="bg-team tw-bg-cover">
        <Artist />
        <Team />
      </div>
      <FAQ />
      <FooterComponent />

    </div>
  )
}

export default AlphaCollection  