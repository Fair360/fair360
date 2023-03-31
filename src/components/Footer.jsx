import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerContainor'>
        <div class="box">
            <div className="bleft">
                <div className="bl1">
                    <img className='logo' src="assets/logo.png" alt="" />
                </div>
                <div className="bl2">©2023 by <span className='logon1'>FAIR </span><span className='logon2'>360</span> </div>
            </div>
            <div className="bright">
                <div className="br1">Contact</div>
                <div className="br1 brm">Terms of Service</div>
                <div className="br1">Privacy</div>
            </div>
        </div>
    </div>
  )
}
