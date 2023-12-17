import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Navbar/Navbar.module.css'
export default function Navbar() {
  return <>
  <nav className={`navbar  navbar-expand-lg fixed-top bg-body-tertiary ${style.navColor}`}>
  <div className= {`container-fluid`}>
    <Link className="font navbar-brand fs-2 " to={"home"}>Bloom</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link fs-5 active ${style.font}`} aria-current="page" to={"home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 font" to={'product'}>porduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 font"  to={"gallery"}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 font"  to={"contactUs"}>Contact Us</Link>
        </li>
      </ul>
      <span className="navbar-text ">
        <ul className='mb-0 d-flex align-items-center  list-unstyled'>
          <li><a href="https://www.instagram.com/bloomlipgloss_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><i className="me-3 fs-4 fa-brands fa-instagram"></i></a></li>
          <li><a href="https://www.tiktok.com/@bloomlipgloss_" target='_blank'><i className=" me-3 fs-5 fa-brands fa-tiktok"></i></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100088385295332&mibextid=PlNXYD" target='_blank'><i className=" me-2 fs-5 fa-brands fa-facebook"></i></a></li>
        </ul>
      </span>
    </div>
    
  </div>
</nav>

  </>
}
