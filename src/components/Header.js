import React, { useState, Fragment } from 'react';
import gsap from 'gsap';
import Nav from './Nav';
import './Header.scss';
export const Header = () => {
  
  const [opened, setOpened] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const openNav = () => {
    if(!firstClick) {
      gsap.from("nav", 0.5,
      {
        height: 0,
        ease: 'expo.out'
      });
      gsap.to("nav", 0.5, {
        height: window.innerHeight / 2,
        ease: 'expo.out' 
      })
      setFirstClick(true); 
    }
    else {
      gsap.to("nav", 1, {
        height: (window.innerHeight / 2),
        ease: 'expo.out'
      })  
      console.log(firstClick); 

    }
    
    setOpened(true);
  }

  const highlightNav = () => {
    gsap.to(".hamburger span", 0.15, {
      height: '3px',
      ease: 'expo.inOut'
    })
    gsap.to("#hamburgerMidSpan", 0.25, {
      width: '100%',
      ease: 'expo.inOut'
    })
  }

  const removeHighlight = () => {
    gsap.to(".hamburger span", 0.15, {
      height: '2px',
      ease: 'expo.inOut'
    })
    gsap.to("#hamburgerMidSpan", 0.25, {
      width: '75%',
      ease: 'expo.inOut'
    })
  }

  return (
    <Fragment>
      <Nav opened={opened} setOpened={setOpened} />
      <div className="header">
        <div className="container">
          <div className="containerDiv">
            <div className="logo">
              <a href="/">HOMELY.</a>
            </div>
            <div onClick={openNav} onMouseEnter={highlightNav} onMouseLeave={removeHighlight} className="hamburger">
              <span></span>
              <span id="hamburgerMidSpan"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header;