import React from 'react';
import gsap from 'gsap';
import Close from '../icons/close.svg';
import './Nav.scss';
const Nav = ({ opened, setOpened }) => {
  
  const closeNav = () => {
    gsap.to(".nav", 1, {
      height: 0,
      ease: 'expo.inOut'
    });
    setTimeout(() => {
      setOpened(false);
    },1000);
  }

  return (
    <nav className={opened ? "nav" : "hide" }>
      <div className="close">
        <img onClick={closeNav} src={Close} alt="close"/>
      </div>
      <div className="navDiv">
        <div className="pages">
          <h3>Menu</h3>
          <ul>
            <li>Services</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="contactDetails">
            <div>
              <h4>Email</h4>
              <p>Get in touch with us</p>
              <p>Get a Homely tour</p>
            </div>
            <div>
              <h4>Headquarters</h4>
              <p>34 Saint Street</p>
              <p>1100 Nuvenburn</p>
              <p>USA</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+1 (0) 79 510 70 28</p>
            </div>
            <div>
              <h4>Legal</h4>
              <p>{"Privacy & Cookies"}</p>
            </div>
          </div>
        </div>
      </div>      
    </nav>
  )
}

export default Nav
