import React from 'react'
import style from '../Slider/Slider.module.css'
import Slider from "react-slick";
import slide1 from '../../../Accect/slide1.PNG'
import slide2 from '../../../Accect/slide2.PNG'
import slide3 from '../../../Accect/slide3.PNG'
import slide4 from '../../../Accect/slide4.PNG'
import slide5 from '../../../Accect/slide5.PNG'
import slide6 from '../../../Accect/slide6.PNG'
import slide7 from '../../../Accect/slide7.PNG'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
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

  return <>
    <div className={`slider g-0 pt-5 pb-5 ${style.slider}`}>
        <div className="container">
            <motion.div whileInView={{scale:1}} transition={{duration:.5}} initial={{scale:.7}} className="motion mb-3">
                <Slider  {...settings}>
                    <div className='me-1'>
                        <img src={slide1} height={400} className='w-100 ' alt="" />
                    </div>
                    <div>
                        <img src={slide2} height={400} className='w-100' alt="" />  
                    </div>
                    <div>
                        <img src={slide3} height={400} className='w-100' alt="" />
                    </div>
                    <div>
                        <img src={slide4} height={400} className='w-100' alt="" />
                    </div>
                    <div>
                        <img src={slide5} height={400} className='w-100' alt="" />
                    </div>
                    <div>
                        <img src={slide6} height={400} className='w-100' alt="" />
                    </div>
                    <div>
                        <img src={slide7} height={400} className='w-100' alt="" />
                    </div>
                </Slider>
            </motion.div>
            <div className="slider-shop w-100 d-flex flex-column align-items-center">
                <a className='font' href="https://www.instagram.com/bloomlipgloss_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
                <button className={`m-auto mt-3 pe-3 font ps-3 btn ${style.btnShop} btn-danger`}>Show Now</button>
                </a>
            </div>
        </div>
    </div>
  </>
}
