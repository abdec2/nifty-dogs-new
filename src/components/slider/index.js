import Carousel from 'react-bootstrap/Carousel'

import img1 from './../../assets/51.png'
import img2 from './../../assets/52.png'
import img3 from './../../assets/53.png'
import img4 from './../../assets/54.png'

const SliderComponent = () => {
  return (
    <div className="tw-relative  tw-pt-24 tw-bg-[#565d32] tw-bg-opacity-[0.7]"> {/* tw-bg-white tw-bg-opacity-[0.17] */}
      <div className='tw-bg-[#565d32] tw-z-10 tw-relative'>
        <div className=' tw-relative tw-z-10'>
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
          <div className='tw-h-12 tw-relative tw-z-10'></div>
        </div>
      
      </div>

    </div>
  )
}

export default SliderComponent