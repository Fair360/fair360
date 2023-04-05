import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className='homeContainor'>
        <div className="HomeWrapper">
            {/* <div data-aos-duration="1500" data-aos="fade-in" className="logo"></div> */}
            <span data-aos-duration="1500" data-aos="fade-down" class="Home-sub-title"><span className='logon1'>FAIR </span><span className='logon2'>360</span> - GET YOUR TRUSTED ONLINE ID</span>
            <div className="btns">
                <a href="https://wa.me/918058266661"><button data-aos-duration="1500" data-aos="fade-right" class="neon-button">Whatsapp Now</button></a>
                <a href="#contact"><button data-aos-duration="1500" data-aos="fade-left" class="neon-button">Contact</button></a>
                {/* <a style={{textDecoration: 'none'}} href='https://drive.google.com/file/d/19VuWRETlTBUgwiX7ZrnPWHM4liWIlKIb/view' target='blank'><div className="lastButton">My Work</div></a>
                <a style={{textDecoration: 'none'}} href='#contact'><div className="lastButton">Hire Me</div></a> */}
            </div>
            <h2 data-aos-duration="1500" data-aos="zoom-in" className="HomeTitle">TRUSTED <span>ONLINE CRICKET ID PROVIDER</span></h2>
            <p data-aos-duration="1500" data-aos="fade-up">India's no. 1 online sports games promoter. Get your ID within 2 minutes! Join Most Trusted, Secure & Fastest Book of India.</p>
        </div>
    </div>
  )
}
