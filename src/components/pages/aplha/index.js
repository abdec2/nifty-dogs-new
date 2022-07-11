import About from "../../about"
import Hero from "../../hero"
import NavbarComponent from "../../navbar"
import SliderComponent from "../../slider"

const AlphaCollection = () => {
  return (
    <div className="tw-bg-black bg-como">
      <NavbarComponent />
      <Hero />
      <About />
      <SliderComponent />
    </div>
  )
}

export default AlphaCollection  