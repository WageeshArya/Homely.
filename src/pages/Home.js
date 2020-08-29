import React from 'react';
import IntroOverlay from '../components/IntroOverlay';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Homes from '../components/Homes';
import Sell from '../components/Sell';
const Home = (props) => {
    return (
        <div>
            {!props.animCompleted && <IntroOverlay />}
            <Header />
            <Intro />
            <Homes />
            <Sell />
        </div>
    )
}

export default Home;
