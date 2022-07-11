import Carousel from 'react-bootstrap/Carousel'

import img1 from './../../assets/51.png'
import img2 from './../../assets/52.png'
import img3 from './../../assets/53.png'
import img4 from './../../assets/54.png'

const SliderComponent = () => {
  return (
    <div className="tw-relative  tw-py-24 tw-bg-[#565d32] tw-bg-opacity-[0.6]"> {/* tw-bg-white tw-bg-opacity-[0.17] */}
      <div className='tw-container tw-mx-auto tw-max-w-[1320px] tw-px-3 tw-relative'>
        <Carousel controls={false}>
          <Carousel.Item interval={1000}>
            <img
              className="tw-inline-block tw-w-1/3"
              src={img1}
              alt="First slide"
            />
            <img
              className="tw-inline-block tw-w-1/3"
              src={img2}
              alt="First slide"
            />
            <img
              className="tw-inline-block tw-w-1/3"
              src={img3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="tw-inline-block tw-w-1/3"
              src={img2}
              alt="First slide"
            />
            <img
              className="tw-inline-block tw-w-1/3"
              src={img3}
              alt="First slide"
            />
            <img
              className="tw-inline-block tw-w-1/3"
              src={img4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="tw-inline-block tw-w-1/3"
              src={img4}
              alt="First slide"
            />
            <img
              className="tw-inline-block tw-w-1/3"
              src={img1}
              alt="First slide"
            />
            <img
              className="tw-inline-block tw-w-1/3"
              src={img2}
              alt="First slide"
            />
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  )
}

export default SliderComponent