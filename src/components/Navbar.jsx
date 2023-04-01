import React, { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  const backgroundColor = isTop ? '' : 'rgb(9, 1, 32)';

  return (
    <div className='NavContainor' style={{backgroundColor}}>
        <div className="leftNav">
          <span><span className='logon1'>FAIR </span><span className='logon2'>360</span></span>
          <span className='leftNavbtm'><i>The trust of brand</i></span>
        </div>
        <div className="rightNav">
          <img className='logo' src="assets/logo.png" alt="Fair 360" />
        </div>
    </div>
  )
}
