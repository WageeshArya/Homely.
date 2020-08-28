import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import gsap from 'gsap';
import './App.scss';
import Home from './pages/Home';
import HomeDetails from './pages/HomeDetails';

function App() {
  const tl = gsap.timeline();
  const [animCompleted, setAnimCompleted] = useState(false);

  gsap.to('body', 0, {css: { visibility: "visible" }});
  

  useEffect(() => {
    let vh = window.innerHeight* 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh);
    

    tl.from(".texts span", 1, {
      y: 75,
      ease: "power4.out",
      delay: 0.3,
      skewY: 10,
      stagger: {
        amount: 0.3
      }
    }).to(".topOverlay", 1, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.2
    }).to(".bottomOverlay", 1, {
      width: 0,
      ease: 'expo.inOut',
      delay: -1,
      stagger: 0.2
    }).to(".introOverlay", 0,{ css: {
      display: 'none'
    }})
    .from(".propImg img", 1, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -1.75,
      stagger: 0.3
    }).to("body", 0, {
      css: {
        overflowY: 'scroll'
      }
    });
    setTimeout(() => {
      setAnimCompleted(true);
    },3000)
    // setTimeout(() => {
    //  tl.reverse();
    // },1000);
    // if(window.history.length !== 1) {
    //   tl.reverse();
    // }
    
  }, []);

  return (
    <Router>
      <AnimatePresence initial={false} exitBeforeEnter>
        <div className="App">
        <Switch>
          <Route exact path="/" render={
            (props) => <Home {...props} animCompleted={animCompleted} />
          } />
          <Route exact path="/homes/:id" render={
            (props) => <HomeDetails {...props} timeline={tl} />
          } />
        </Switch>
      </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
