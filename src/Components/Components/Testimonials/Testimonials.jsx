import React from 'react'
import style from '../Testimonials/Testimonials.module.css'
import feedBack1 from '../../../Accect/feedback-1.jpg'
import feedBack2 from '../../../Accect/feedback-2.jpg'
import feedBack3 from '../../../Accect/feedback-3.jpg'
import feedBack4 from '../../../Accect/feedback-4.jpg'
import feedBack5 from '../../../Accect/feedback-5.jpg'
import feedBack6 from '../../../Accect/feedback-6.jpg'
import { motion } from 'framer-motion'
export default function Testimonials() {
  return (
    <div>
      <div className={style.testimonials} id='feedBack'>
      <motion.h2 whileInView={{scale:1}} initial={{scale:.5}}  class={`${style.mainTitle} font`}>Feed backs</motion.h2>
        <div className="container">
            <div className="row">
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={feedBack1} alt="bloom-feedback" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.2}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={feedBack2} alt="bloom-feedback" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.5}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={feedBack3} alt="bloom-feedback" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.7}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={feedBack4} alt="bloom-feedback" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.4}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={feedBack5} alt="bloom-feedback" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={feedBack6}  alt="bloom-feedback" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}
