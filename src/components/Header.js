import React, { useEffect, useState, Fragment } from 'react';
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
      console.log(firstClick); 
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

  useEffect(() => {
  },[]);

  return (
    <Fragment>
      <Nav opened={opened} setOpened={setOpened} />
      <div className="header">
        <div className="container">
          <div className="containerDiv">
            <div className="logo">
              <a href="/">HOMELY.</a>
            </div>
            <div onClick={openNav} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header;