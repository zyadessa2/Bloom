import React, { useRef } from 'react'
import style from '../ContactUs/ContactUs.module.css';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

export default function ContactUs() {

  // const form = useRef()

  //  const ContactUs = () => {
  //   const form = useRef();
  
  //    const sendEmail = (e) => {
  //     e.preventDefault();
  
  //     emailjs.sendForm('service_r6i2wsi', 'template_i8ulrut', form.current, 'LVQRqjbA-v8p1iAJ_')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //       e.target.reset()
  //   };
  // }
  return <> 
    <div className="overflow">
    <section className={style.contact} id="contact">
  
  <motion.h2 whileInView={{scale:1}} initial={{scale:.5}}  class={`${style.mainTitle} font`}>Contact Us</motion.h2>

<div class="contact-wrapper">

  
  <motion.form   whileInView={{scale:1}} initial={{scale:.5}} id="contact-form" class="form-horizontal" role="form">
    <div class="form-group">
      <div class="col-sm-12">
        <input type="text" class="form-control mb-2" name="user_name" placeholder="full name" required/>
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-12">
        <input type="email" class="form-control mb-2"  placeholder="EMAIL" name="user_email"  required/>
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-12">
        <input type="text" class="form-control mb-2"  placeholder="Subject"  required/>
      </div>
    </div>

    <textarea class="form-control mb-2" rows="10" placeholder="MESSAGE" name="message" required></textarea>
    
    <button class="btn btn-primary send-button"  type="submit" >
      <div class="alt-send-button">
        <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
      </div>
    
    </button>
    
  </motion.form>
  
  
    <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}} class="direct-contact-container">

      <ul class="contact-list mt-5 mb-3">
        {/* <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Delivery to all governorates</span></i></li> */}
        
        <li class="list-item text-black"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:01150140759" className='text-black' title="Give me a call">01150140759</a></span></i></li>
        
        <li class="list-item text-black"><i class="fab fa-instagram fa-2x"><span class="contact-text gmail"><a href="https://www.instagram.com/bloomlipgloss_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank' className='text-black' title="Send me an email">bloomlipgloss_</a></span></i></li>
        
      </ul>

      {/* <ul class="social-media-list">
        <li><a href="#" target="_blank" class=" contact-icon">
        <i className="me-3 fs-4 fa-brands fa-instagram"></i></a>
        </li>
        <li><a href="#" target="_blank" class="contact-icon">
        <i className=" me-3 fs-5 fa-brands fa-tiktok"></i></a>
        </li>
        <li><a href="#" target="_blank" class="contact-icon">
        <i className=" me-2 fs-5 fa-brands fa-facebook"></i></a>
        </li>       
      </ul> */}

      <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

    </motion.div>
  
</div>

</section> 
    </div> 
  </>
}
