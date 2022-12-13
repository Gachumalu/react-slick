import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import '../carousel/Carousel.css'
import axios from 'axios';


const Carousel = () => {
  const [data, setData] = useState([]);

  const courselapi = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      console.log(res)
      setData(res.data)
    } catch (error) {
      console.log('gachu', error)
    }

  }
  useEffect(() => {
    courselapi()
  }, [])


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>




      <div>
        <h2 style={{marginLeft:'20px'}}>  Responsive </h2>



        <Slider {...settings} className="martop">

          {
            data.slice(0, 8).map((curElem) => {
              return (
                <div className='carousel-width' >
                  <div className="items">


                    <img src={curElem.url} alt="img" className='car-img ' />
                    <h6 >{curElem.title}</h6>
                  </div>
                </div>
              )
            })
          }

        </Slider>

      </div>
    </>
  )
}

export default Carousel