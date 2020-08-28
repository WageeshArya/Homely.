import React, { useEffect } from 'react';
import './HomeDetails.scss';
import { TimelineLite } from 'gsap';
import ProgressiveImage from 'react-progressive-image';
import Header from '../components/Header';
const HomeDetails = (props) => {
    
    const {id, address, pin, state, price, beds, baths} = props.location.state.home;
    const tl = new TimelineLite();
    useEffect(() => {
        
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
            y: '20vh',
            width: '100vw',
            height: '60vh',
            duration: 1,
            ease: 'expo.inOut'
        })


        console.log(props.location.state.home);
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Header />
            <div className="homeDetailsImage">
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
