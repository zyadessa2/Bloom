import React from 'react'
import style from '../Gallery/Gallery.module.css'
import bloom1 from '../../../Accect/bloom-1.jpg'
import bloom2 from '../../../Accect/bloom-2.jpg'
import bloom3 from '../../../Accect/bloom-3.jpg'
import bloom4 from '../../../Accect/bloom-4.jpg'
import bloom5 from '../../../Accect/bloom-5.jpg'
import bloom6 from '../../../Accect/bloom-6.jpg'
import bloom7 from '../../../Accect/bloom-7.jpg'
import bloom8 from '../../../Accect/bloom-8.jpg'
import bloom9 from '../../../Accect/bloom-9.jpg'
import bloom10 from '../../../Accect/bloom3.jpg'
import bloom11 from '../../../Accect/bloom4.jpg'
import bloom12 from '../../../Accect/bloom5.jpg'
import { motion } from 'framer-motion'
export default function Gallery() {
  return (
    <div>
        <div className="overflow">
        <div className={style.testimonials} id='feedBack'>
      <motion.h2 whileInView={{scale:1}} initial={{scale:.5}}  class={`${style.mainTitle} font`}>Gallery</motion.h2>
        <div className="container">
            <div className="row">
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom1} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.2}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom2} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.5}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom3} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.7}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom4} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.4}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom5} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom6} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom7} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.2}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom8} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.5}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom9} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.7}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom10} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.4}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom11} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4 mt-4">
                    <div class={style.box}>
                        <div class={style.image}>
                            <img src={bloom12} alt="bloom" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
        </div>
    </div>
  )
}
