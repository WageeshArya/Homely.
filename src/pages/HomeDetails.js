import React, { useEffect } from 'react';
import './HomeDetails.scss';
import Details from '../components/Details';
import { TimelineLite } from 'gsap';
import ProgressiveImage from 'react-progressive-image';
import Header from '../components/Header';
const HomeDetails = (props) => {
    
    const {id, pin, state, long, lat} = props.location.state.home;

    const chars = state.split("");

    const tl = new TimelineLite();
    useEffect(() => {
        tl.to(".coverDetails", {
            display: 'none'
        })
        .from('.containerDiv', 0.5, {
            opacity: 0,
            ease: 'expo.inOut'
        })
        .fromTo('.homeImg', 
        {
            position: 'absolute',
            xPercent: -50,
            yPercent: -50,
            zIndex: 1,
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
        .from(".location p", {
            duration: 0.25,
            opacity: 0,
            y: 70,
            ease: "power4.out",
            skewY: 10,
            stagger: {
                amount: 0.1
            }
        })
        .from(".pin p", {
            duration: 0.25,
            opacity: 0,
            y: 70,
            ease: "power4.out",
            skewY: 10
        })
        .fromTo(".Details", 
        {
            opacity: 0,
            zIndex: -2
        },  
        {
            y: '145%',
            opacity: 1,
            duration: 0,
            ease: 'expo.inOut'
        })

        //eslint-disable-next-line
    }, []);

    return (
        <div className="HomeDetails">
            <div className="coverDetails"></div>
            <Header />
            
            <div className="homeDetailsImage">
                <div className="homeState">
                    <div className="locationDetails">
                        <div className="location">
                            <p>{long}</p>
                            <p>{lat}</p>
                        </div>
                        <div className="pin">
                            <p>zip: {pin}</p>
                        </div>
                    </div>
                    <div className="stateCharacters">
                    {chars.map((char) => {
                        return <h1>{`${char}`}</h1>
                    })}
                    </div>
                </div>
                <ProgressiveImage src={require(`../images/${id}.jpg`)} placeholder={require(`../images/tinified/${id}.jpg`)}>
                    {(src) => (
                        <img className="homeImg" src={src} alt="home-img" />
                    )}
                </ProgressiveImage>
            </div>
            <div className="detailsContainer">
                <Details home={props.location.state.home} />
            </div>
            
        </div>
    )
}

export default HomeDetails;
