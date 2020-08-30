import React, { useEffect } from 'react';
import gsap, { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Form.scss';
const Form = () => {
    let count = 0;
    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineLite();
    useEffect(() => {

        tl.from("form", {
            opacity: 0,
            x: -200,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: "form",
                start: 'top bottom',
                scrub: true,
                end: 'bottom bottom-=400',
                toggleActions: 'play none none reverse'
            }
        })
        .from(".contactText", {
            opacity: 0,
            x: 100,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: ".contactText",
                start: 'top bottom',
                scrub: true,
                end: 'bottom bottom-=400',
                toggleActions: 'play none none reverse'
            },
            stagger: {
                amount: 0.3
            }
        })
        // tl.from("")

        // const elements = [
        //     document.getElementById("customer"),
        //     document.getElementById("projects"),
        //     document.getElementById("sold"),
        //     document.getElementById("awards")
        // ];
        // const range = [3314, 3233, 2190, 58];
        // let stepTime, timer;
        // for(let i = 0; i < 4; i++) {
        //     stepTime = Math.abs(Math.floor(1 / range[i]));
        //     timer = setInterval(() => {
        //         count ++;
        //         if (count >= range[i]) {
        //             clearInterval(timer);
        //         }
        //         elements[i].innerText = count;
        //     }, stepTime);
        //     count=0;
        // }


        
    },[])

    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="formDiv">
            <div className="formDivHead">
                <form onSubmit={formSubmit}>
                    <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" id="name" required />
                    <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" id="email" required />
                    <label htmlFor="request"><strong>Message</strong></label>
                    <input type="textbox" id="request" />
                    <input type="submit"/>
                </form>
                <div className="formText">
                    <h3 className="contactText">Reach out to us</h3>
                    <p className="contactText">Our industry leading experts will contact you within 48 hours.</p>
                </div>
            </div>
            <div className="completed">
                <img className="completedBackground" src={require('../images/homes.jpg')} alt="background"/>
                <div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/customer.svg')} alt="happy customers"/>
                            <p className="number" id="customer">{count}</p>
                            <p>Happy Customers</p>    
                        </div>
                    </div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/living.svg')} alt="completed projects"/>
                            <p className="number" id="projects">1234</p>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/keys.svg')} alt="sold homes"/>
                            <p className="number" id="sold">1234</p>
                            <p>Homes Sold</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/medal.svg')} alt="awards won"/>
                            <p className="number" id="awards">1234</p>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;