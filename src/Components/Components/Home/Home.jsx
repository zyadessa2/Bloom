import React from 'react';
import style from '../Home/Home.module.css';
import HomeImg from "../../../Accect/home-main.png";
import Product from '../Product/Product';
import MainSlider from '../Slider/MainSlider';
import InfoBloom from '../InfoBloom/InfoBloom';
import Testimonials from '../Testimonials/Testimonials';
import ContactUs from '../ContactUs/ContactUs';
import { motion } from 'framer-motion';

export default function Home() {
  return <>
  <div className={`bloom overflow ${style.bloom}`}>
    <div className={`header  ${style.header}`}>
            <div className="row align-items-center justify-content-center ">
              <div className="col-md-6">
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}} class={style.text}>
                  <h1 className='font'>welcome to Bloom website</h1>
                  <p>Just blooming your lips by best lipgloss with best service</p>
                </motion.div>
              </div>
              <div className="col-md-6">
                <div class={style.image}>
                  <img className={style.homeImg} src={HomeImg} alt="bloom" />
                </div>
              </div>
        </div>
        <a href="#product" class={style.goDown}>
            <i class="fas fa-angle-double-down fa-2x"></i>
        </a>
    </div>
    <div className="Product bg-white">
      <div className="container">
        <Product/>
      </div>
    </div>
    <div className="slider">
      <MainSlider/>
    </div>
    <div className="info">
      <InfoBloom/>
    </div>
    <div className="Testimonials">
      <Testimonials/>
    </div>
    <div className="contactUs">
      <ContactUs/>
    </div>
  </div>
  </>
}
