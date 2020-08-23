import React, { Fragment } from 'react';
import './IntroOverlay.scss';
export const IntroOverlay = () => {
  return (
    <Fragment>
      <div className="introOverlay">
        <div className="top">
          <div className="topOverlay"></div>
          <div className="topOverlay"></div>
          <div className="topOverlay"></div>
        </div>
        <div className="bottom">
          <div className="bottomOverlay"></div>
          <div className="bottomOverlay"></div>
          <div className="bottomOverlay"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default IntroOverlay;