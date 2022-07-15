import About from "../../about"
import Artist from "../../artist"
import FAQ from "../../faq"
import Hero from "../../hero"
import NavbarComponent from "../../navbar"
import Roadmap from "../../roadmap"
import SliderComponent from "../../slider"
import Team from "../../team"
import FooterComponent from './../../footer'
import AlertBox from './../../AlertBox'

import image2 from './../../../assets/image2.png'
import { useState } from "react"

const AlphaCollection = () => {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  return (
    <div className="tw-bg-black">
      <div className="bg-como">
        <NavbarComponent />
        <Hero setError={setError} setErrMsg={setErrMsg} />
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
      {error && (<AlertBox msg={errMsg} setError={setError} setErrMsg={setErrMsg} />)}
    </div>
  )
}

export default AlphaCollection  