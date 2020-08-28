import React, { useEffect } from 'react';
import './HomeDetails.scss';
import { motion } from 'framer-motion';
import Header from '../components/Header';
const HomeDetails = (props) => {
    useEffect(() => {
        // props.timeline.reverse();

        console.log(props.timeline);
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Header />
        </div>
    )
}

export default HomeDetails;
