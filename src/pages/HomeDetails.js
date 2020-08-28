import React, { useEffect } from 'react';
import './HomeDetails.scss';
import { TimelineLite } from 'gsap';
import ProgressiveImage from 'react-progressive-image';
import Header from '../components/Header';
const HomeDetails = (props) => {
    
    const {id, address, pin, state, price, beds, baths, long, lat} = props.location.state.home;

    const chars = state.split("");
    console.log(chars);

    const tl = new TimelineLite();
    useEffect(() => {
        console.log(long,lat);
        tl.from('.containerDiv', 0.5, {
            opacity: 0,
            ease: 'expo.inOut'
        })
        .fromTo('.homeImg', 
        {
            position: 'absolute',
            xPercent: -50,
            yPercent: -50,
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            objectFit: 'cover'
        },
        {
            y: '25vh',
            width: '100vw',
            height: '75%',
            duration: 1,
            ease: 'expo.inOut',
            margin: '0'
        })
        .from(".homeState h1", 1, {
            opacity: 0,
            y: 300,
            ease: "power4.out",
            skewY: 10,
            stagger: {
                amount: 0.3
            }   
        })

        console.log(props.location.state.home);
        //eslint-disable-next-line
    }, []);

    return (
        <div className="HomeDetails">
            <Header />
            
            <div className="homeDetailsImage">
            <div className="homeState">
                <div className="locationDetails">
                    <div className="location">
                        <p className="longitude">{long}</p>
                        <p className="latitude">{lat}</p>
                    </div>
                </div>
                <div className="stateCharacters">
                {chars.map((char) => {
                    return <h1>{`${char}`}</h1>
                })}
                </div>
            </div>
                <ProgressiveImage src={require(`../images/${id}.jpg`)} placeholder={require(`../images/tinified/${id}.jpg`)}>
                    {(src) => {
                        return <img className="homeImg" src={src} />
                    }}
                </ProgressiveImage>
            </div>
        </div>
    )
}

export default HomeDetails;
