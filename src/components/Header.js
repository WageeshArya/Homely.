import React from 'react';
import './Header.scss';
export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="containerDiv">
          <div className="logo">
            <a href="/">HOMELY.</a>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;