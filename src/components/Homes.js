import React, { useEffect, useState } from 'react'
import { ReactComponent as Arrow } from '../icons/arrow-right-solid.svg';
import './Homes.scss';
export const Homes = () => {

  const allHomes = [
    {
      id: 1,
      address: "944 Avalant Pines",
      location: "California, USA - 482012",
      price: 1750000,
      beds: 6,
      baths: 6
    },
    {
      id: 2,
      address: "1231 Cameroon Park",
      location: "San Diego, USA - 912024",
      price: 750000,
      beds: 4,
      baths: 4
    },
    {
      id: 3,
      address: "91 Auburn Street",
      location: "Ohio, USA - 614113",
      price: 440000,
      beds: 6,
      baths: 2
    },
    {
      id: 4,
      address: "4421 B Town Street",
      location: "North Carolina, USA - 482012",
      price: 890000,
      beds: 6,
      baths: 4
    },
    {
      id: 5,
      address: "504 Amber Avenue",
      location: "Washington, USA - 300120",
      price: 1100000,
      beds: 4,
      baths: 4
    },
    {
      id: 6,
      address: "991 Calvert Street",
      price: 800000,
      location: "North Carolina, USA - 840221",
      beds: 3,
      baths: 2
    }
  ];
  const [startHome, setStartHome] = useState(0);
  const [endHome, setEndHome] = useState(3)
  const [displayHomes, setDisplayHomes] = useState(allHomes.slice(startHome, endHome));
  
  useEffect(() => {
    console.log(startHome, endHome);
  }, [displayHomes])

  const nextHome = () => {
    setStartHome(startHome === 6 ? 0 : startHome + 1);
    setEndHome(endHome === 6 ? 0 : endHome + 1);

    if(startHome >= 4) {
      setDisplayHomes([...allHomes.slice(startHome, 6), ...allHomes.slice(0, endHome + 1)]);
      console.log(displayHomes);
    }
    else {
      setDisplayHomes(allHomes.slice(startHome, endHome));
      console.log(displayHomes);
    }
  }

  const prevHome = () => {
    setStartHome(startHome === 0 ? 6 : startHome - 1);
    setEndHome(endHome === 0 ? 6 : endHome - 1);
    console.log(startHome, endHome);
    if(endHome < 3 ) {
      setDisplayHomes([...allHomes.slice(startHome-1, 6), ...allHomes.slice(0, endHome)]);
      console.log(displayHomes);
    }
    else {
      setDisplayHomes(allHomes.slice(startHome, endHome));
      console.log(displayHomes);
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
            <div className="home" key={home.id}>
              <div className="details">
                <p className="address">{home.address}</p>
                <p className="pin">{home.location}</p>
                <p className="beds">{home.beds} beds, {home.baths} baths</p>
              </div>
              <div className="propImg">
                <div className="opaqueOverlay"></div>
                <img src={require(`../images/${home.id}.jpg`)} alt={`home ${home.id}`}/>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Homes;