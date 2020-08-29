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
      baths: 6,
      long: 145.04922,
      lat: 8.95112,
      desc: 'This single-owner home sits on a large lot with mature trees. It’s ready for the next owners to bring it into the 21st century.'
    },
    {
      id: 2,
      address: "1231 Cameroon Park",
      state: "San Diego",
      pin: '912024',
      price: "750,000",
      beds: 4,
      baths: 4,
      long: 52.23051,
      lat: 32.15696,
      desc: 'It’s hard to list all the indoor and outdoor features of this stunning home. Schedule a tour today!'
    },
    {
      id: 3,
      address: "91 Auburn Street",
      state: "Ohio",
      pin: "614113",
      price: "440,000",
      beds: 6,
      baths: 2,
      long: 52.23051,
      lat: 12.51396,
      desc: 'This move-in ready home has been recently updated, including new windows that provide ample of natural light. Enjoy the shaded backyard or walk to the neighborhood park down the street.'
    },
    {
      id: 4,
      address: "4421 B Town Street",
      state: "North Carolina",
      pin: "482012",
      price: "890,000",
      beds: 6,
      baths: 4,
      long: 134.93196,
      lat: 55.31781,
      desc: 'This stunning two-story home is on a large lot in a hot neighborhood. From the open-concept kitchen and living space to the large shaded backyard, there is plenty of room for the whole family to enjoy. Recent updates include new carpeting upstairs and stainless appliances. Situated in a family-friendly neighborhood near a great park, this home is sure to go fast!'
    },
    {
      id: 5,
      address: "504 Amber Avenue",
      state: "Washington",
      pin: "300120",
      price: "1,100,000",
      beds: 4,
      baths: 4,
      long: 117.30358,
      lat: 53.63698,
      desc: 'The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.'
    },
    {
      id: 6,
      address: "991 Calvert Street",
      state: "North Carolina",
      pin: "840221",
      price: "800,000",
      beds: 3,
      baths: 2,
      long: 83.25968,
      lat: 1.44351,
      desc: 'Cool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors, and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.'
    }
  ];

  const [hovered, setHovered] = useState(false);
  const [startHome, setStartHome] = useState(0);
  const [endHome, setEndHome] = useState(3)
  const [displayHomes, setDisplayHomes] = useState(allHomes.slice(startHome, endHome));

  let tl0 = new TimelineLite();
  
  useEffect(() => {
  }, [displayHomes]);
  
  const transform = (homeDetails) => {

    const { id } = homeDetails; 

    const home = document.getElementById(`home-${id}`);
    const domRect = home.getBoundingClientRect();

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
        xPercent:-50, 
        yPercent:-50, 
        left:"50%", 
        top:"50%",
        height: '300px',
        width: '300px',
        duration: 0.5,
        ease: 'expo.out'
      }
    );
      setTimeout(() => {
        props.history.push({
          pathname: `/homes/${id}`,
          state: { home: homeDetails }
        });
      }, 500);
  }

  const imgEnter = () => {
    setHovered(true);
  }

  const imgLeave = () => {
    setHovered(false);
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
                  <div className={hovered ? "viewBtn" : "hide"}onClick={() => transform(home)}><p>View</p></div>
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