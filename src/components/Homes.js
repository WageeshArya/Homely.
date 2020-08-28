import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ReactComponent as Arrow } from '../icons/arrow-right-solid.svg';
import './Homes.scss';
import { TimelineLite } from 'gsap';
export const Homes = (props) => {

  const allHomes = [
    {
      id: 1,
      address: "944 Avalant Pines",
      state: "California",
      pin: '482012',
      price: '1,750,000',
      beds: 6,
      baths: 6
    },
    {
      id: 2,
      address: "1231 Cameroon Park",
      state: "San Diego",
      pin: '912024',
      price: "750,000",
      beds: 4,
      baths: 4
    },
    {
      id: 3,
      address: "91 Auburn Street",
      state: "Ohio",
      pin: "614113",
      price: "440,000",
      beds: 6,
      baths: 2
    },
    {
      id: 4,
      address: "4421 B Town Street",
      state: "North Carolina",
      pin: "482012",
      price: "890,000",
      beds: 6,
      baths: 4
    },
    {
      id: 5,
      address: "504 Amber Avenue",
      state: "Washington",
      pin: "300120",
      price: "1,100,000",
      beds: 4,
      baths: 4
    },
    {
      id: 6,
      address: "991 Calvert Street",
      state: "North Carolina",
      pin: "840221",
      price: "800,000",
      beds: 3,
      baths: 2
    }
  ];

  const [hovered, setHovered] = useState(false);
  const [startHome, setStartHome] = useState(0);
  const [endHome, setEndHome] = useState(3)
  const [displayHomes, setDisplayHomes] = useState(allHomes.slice(startHome, endHome));

  let tl0 = new TimelineLite();
  let tl1 = new TimelineLite();
  
  useEffect(() => {
    // const imgTween = 
  }, [displayHomes]);
  
  const transform = (id) => {
    const home = document.getElementById(`home-${id}`);
    console.log(home);
    const domRect = home.getBoundingClientRect();
    console.log(domRect);

    tl0.to('.introContainer', {
      height: 0,
      duration: 0
    })
    .to('.panels', {
      height: '100%',
      width: '100%',
      duration: 0
    })
    .to(`#panel-${id}`, {
      height: '100%',
      width: '100%',
      position: 'fixed',
      duration: 0,
      zIndex: 9,
      backgroundColor: 'white'
    })
    .to('.opaqueOverlay', {
      opacity: 0,
      duration: 0
    })
    .fromTo(`#home-${id}`, 
      {
        position: 'absolute',
        top: domRect.x,
        left: domRect.y,
        zIndex: 10,
        height: domRect.bottom-domRect.y,
        width: domRect.right-domRect.x
      }, 
      {
        position: 'absolute',
        zIndex: 10,
        xPercent:-50, yPercent:-50, left:"50%", top:"50%",
        height: '300px',
        width: '300px'
      }
    );
      setTimeout(() => {
        props.history.push(`/homes/${id}`);
      }, 1000);
    // setTimeout(() => {
    //   tl1.to(".introContainer", {
    //     height: 'calc(var(--vh, 1vh) * 5)',
    //     duration: 0,
    //   })
    //   .to(`#panel-${id}`, {
    //     height: 'auto',
    //     width: 'auto',
    //     position: 'relative',
    //     duration: 0,
    //     zIndex: 1,
    //     backgroundColor: 'none'
    //   })
    //   .to('.opaqueOverlay', {
    //     width: `33.3333vw`,
    //     opacity: 1,
    //     duration: 0,
    //   })
    //   .fromTo(`#home-${id}`, 
    //   {
    //     position: 'absolute',
    //     zIndex: -1,
    //     xPercent:-50, yPercent:-50, left:"50%", top:"50%",
    //     height: 'auto',
    //     width: 'auto',
    //   },
    //   {
    //     position: 'relative',
    //     width: '100%',
    //     height: '100%',
    //     zIndex: -1,
    //     duration: 0.75
    //   })
    //   .to(".panels", {
    //     height: '100%'
    //   })
      
    // }, 1500);
    // browserHistory.push("/path");

  }

  const imgEnter = () => {
    setHovered(true);
    console.log(hovered);
  }

  const imgLeave = () => {
    setHovered(false);
    console.log(hovered);
  }

  

  const prevHome = () => {
    setStartHome(startHome === 0 ? 6 : startHome - 1);
    setEndHome(endHome === 0 ? 6 : endHome - 1);
    if(endHome < 3 ) {
      setDisplayHomes([...allHomes.slice(startHome-1, 6), ...allHomes.slice(0, endHome)]);
    }
    else {
      setDisplayHomes(allHomes.slice(startHome, endHome));
    }
  }

  const nextHome = () => {
    setStartHome(startHome === 6 ? 0 : startHome + 1);
    setEndHome(endHome === 6 ? 0 : endHome + 1);

    if(startHome >= 4) {
      setDisplayHomes([...allHomes.slice(startHome, 6), ...allHomes.slice(0, endHome + 1)]);
    }
    else {
      setDisplayHomes(allHomes.slice(startHome, endHome));
    }
  }
  
  return (
    <section className="homes">
      <div className="leftArrow">
        <Arrow onClick={prevHome} />
      </div>
      <div className="rightArrow">
        <Arrow onClick={nextHome} />
      </div>
      <div className="panels">
        {
          displayHomes.map(home => {
            return (
            <div className="home" key={home.id} id={`panel-${home.id}`} onMouseEnter={imgEnter} onMouseLeave={imgLeave}>
              <div className="details">
                <p className="address">{home.address}</p>
                <p className="pin">{home.state} - {home.pin}</p>
                <p className="beds">{home.beds} beds, {home.baths} baths</p>
              </div>
              <div className="detailsMobile" id={home.id}>
                <p className="address">{home.address}</p>
                <p className="state">{home.state}</p>
                <p className="pin">{home.pin}</p>
                <p className="beds">{home.beds} beds,</p>
                <p className="baths">{home.baths} baths</p>
              </div>
              <div className="propImg">
                <div className="opaqueOverlay">
                  <div className={hovered ? "viewBtn" : "hide"}onClick={() => transform(home.id)}><p>View</p></div>
                </div>
                <img id={`home-${home.id}`} src={require(`../images/${home.id}.jpg`)} alt={`home ${home.id}`}/>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default withRouter(Homes);