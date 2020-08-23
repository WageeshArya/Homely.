import React from 'react';
import './Intro.scss';
import { ReactComponent as RightArrow } from '../icons/arrow-right-solid.svg';
export const Intro = () => {
  return (
    <section className="introContainer">
      <div className="introText">
        <div className="texts">
            <div className="text">
              <span>Homely homes</span>
            </div>
            <div className="text">
              <span>for homely folks.</span>
            </div>
        </div>
        <div className="knowMore">
          <a href="/">
            <p>More about us </p>
            <RightArrow />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro;