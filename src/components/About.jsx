import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-Wrapper'>
        <img className='background-img' src="assets/circle2.png" alt="" />
        <div className="about-Containor">
            <div className="about-left">
                <div class="about-Upper-section" data-aos-duration="1500" data-aos="zoom-in">
                    <div className="AboWrapper">
                        <span class="About-sub-title"><span className='logon1' style={{color: 'white'}}>FAIR </span><span className='logon2' style={{color: 'white'}}>360</span></span>
                        <h2 class="About-title">NOT JUST ANOTHER PLATFORM</h2>
                        <p><span className='logon1'>FAIR </span><span className='logon2'>360 </span>is the fastest growing platform in India Open your account today.</p>
                        <button class="neon-button"><a href="https://wa.me/918058266661">Whatsapp Now</a></button>
                    </div>
                </div>
            </div>
            <div className="about-right" data-aos-duration="1500" data-aos="zoom-in">
                <img className='about-image' src="assets/about.png" alt="" />
            </div>
        </div>
    </div>
  )
}
