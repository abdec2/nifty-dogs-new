import Carousel from 'react-bootstrap/Carousel'

const SliderComponent = () => {
  return (
    <div className="tw-relative tw-bg-white tw-bg-opacity-[0.17]">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SliderComponent