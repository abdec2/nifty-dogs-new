import About from "../../about"
import Hero from "../../hero"
import NavbarComponent from "../../navbar"
import Roadmap from "../../roadmap"
import SliderComponent from "../../slider"

const AlphaCollection = () => {
  return (
    <div className="tw-bg-black">
      <div className="bg-como">
        <NavbarComponent />
        <Hero />
        <About />
        <SliderComponent />
      </div>
      <div>
        <Roadmap />
      </div>
    </div>
  )
}

export default AlphaCollection  