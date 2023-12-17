import React from 'react'
import style from '../Footer/footer.module.css'
import bloom1 from '../../../Accect/bloom4.jpg'
import bloom2 from '../../../Accect/bloom3.jpg'
import bloom3 from '../../../Accect/bloom5.jpg'
import bloom4 from '../../../Accect/bloom-3.jpg'
import bloom5 from '../../../Accect/bloom-5.jpg'
import bloom6 from '../../../Accect/bloom-6.jpg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
    <div className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <div class={style.box}>
          <h3 className='font'>Bloom</h3>
          <ul class={style.social}>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100088385295332&mibextid=PlNXYD" target='_blank' class={style.facebook}>
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a  href="https://www.tiktok.com/@bloomlipgloss_" target='_blank' class={style.twitter}>
                <i class="fab fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bloomlipgloss_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank' class={style.youtube}>
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p class={style.text}>
          Just blooming your lips by best lipgloss with best service          </p>
        </div>
          </div>
          <div className="col-md-3 mt-2">
          <div class={style.box}>
          <ul class={style.links}>
            <li><Link to={"product"}>product</Link></li>
            <li><Link to={"feedback"}>Feed backs</Link></li>
            <li><Link to={"gallery"}>Gallery</Link></li>
            <li><Link to={"contactUs"}>Contact US</Link></li>
          </ul>
        </div>
          </div>
          <div className="col-md-3 mt-2">
          <div class={style.box}>
          <div class={style.line}>
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <div class={style.info}>Delivery to all governorates</div>
          </div>
          <div class={style.line}>
            <i class="far fa-clock fa-fw"></i>
            <div class={style.info}>Business Hours: From 10am To 10pm</div>
          </div>
          {/* <div class={style.line}>
            <i class="fas fa-phone-volume fa-fw"></i>
            <div class={style.info}>
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div> */}
        </div>
          </div>
          <div className="col-md-3 mt-2">
            <div class={`ms-4 ${style.box} ${style.footergGallery}`}>
              <img decoding="async" height={80} src={bloom2} alt="bloom" />
              <img decoding="async" height={80}  src={bloom1} alt="bloom" />
              <img decoding="async" height={80}  src={bloom3} alt="bloom" />
              <img decoding="async" height={80}  src={bloom4} alt="bloom" />
              <img decoding="async" height={80}  src={bloom5} alt="bloom" />
              <img decoding="async" height={80}  src={bloom6} alt="bloom" />
            </div>
          </div>
          <p class={style.copyright}>Made With &lt;3 By <a className='' href="">Ziad</a></p>
        </div>
      </div>
    </div>
  </>
}
