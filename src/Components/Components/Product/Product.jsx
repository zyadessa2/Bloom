import React from 'react';
import style from '../Product/Product.module.css';
import { motion } from "framer-motion";
import product1 from "../../../Accect/bloom5.jpg";
import product2 from "../../../Accect/bloom4.jpg";
import product3 from "../../../Accect/bloom3.jpg";
import { Link } from 'react-router-dom';

export default function Product() {
  return <>
  <div className="overflow">
  <div class={`team  ${style.product}`}id="product">
      <motion.h2 whileInView={{scale:1}} initial={{scale:.5}}  class={`${style.mainTitle} font`}>Product</motion.h2>
      <div class="container">
        <div className="row">
            <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4">
            <div class="box w-100">
          <div class="data">
            <img decoding="async" height={350} src={product1} alt="bloom" />
          </div>
          {/* <div class="info font text-center">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div> */}
        </div>
            </motion.div>

            <motion.div whileInView={{scale:1}} transition={{duration:.7}} initial={{scale:.5}}  className="col-md-4">
                <div class="box w-100">
                    <div class="data">
                        <img decoding="async" height={350} src={product2} alt="bloom" />
                    </div>
                    {/* <div class="info font text-center">
                        <h3>Name</h3>
                        <p>Simple Short Description</p>
                    </div> */}
                </div>
            </motion.div>

            <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}} className="col-md-4">
            <div class="box w-100">
          <div class="data">
            <img decoding="async" height={350} src={product3} alt="bloom" />
          </div>
          {/* <div class="info font text-center">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div> */}
        </div>
            </motion.div>

        </div>
      </div>
    </div>
  </div>
  </>
}
