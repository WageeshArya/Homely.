import React, { useEffect } from 'react';
import gsap, { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Form.scss';
const Form = () => {
    
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
            x: -75,
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

        tl.to(".statBox", {
            scrollTrigger: {
                trigger: ".statBox",
                start: 'top bottom',
                toggleAction: 'play none none none',
                onEnter: ({progress, direction, isActive}) => startCounters()
            }
        })

        // eslint-disable-next-line
    },[]);

    const startCounters = () => {
        
        const customer = document.getElementById("customer");
        const projects = document.getElementById("projects");
        const sold = document.getElementById("sold");
        const awards = document.getElementById("awards");
     
        
        countUp(3076, customer);
        countUp(2431, projects);
        countUp(1771, sold);
        countUp(64, awards);
    }

    const countUp= (to, element) => {
        let count = 0;
        let timer, stepTime;

        stepTime = Math.abs(Math.floor(1/to));
        timer = setInterval(() => {
            count += 4;
            if(count >= to) {
                clearInterval(timer);
            }
            element.innerText = count;
        }, stepTime);
    }

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
                    <div className="statsDivBox">
                        <div className="stat">
                            <div className="statBox">
                                <img className="completedIcons" src={require('../icons/customer.svg')} alt="happy customers"/>
                                <p className="number" id="customer"></p>
                                <p>Happy Customers</p>    
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statBox">
                                <img className="completedIcons" src={require('../icons/living.svg')} alt="completed projects"/>
                                <p className="number" id="projects"></p>
                                <p>Completed Projects</p>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statBox">
                                <img className="completedIcons" src={require('../icons/keys.svg')} alt="sold homes"/>
                                <p className="number" id="sold"></p>
                                <p>Homes Sold</p>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="statBox">
                                <img className="completedIcons" src={require('../icons/medal.svg')} alt="awards won"/>
                                <p className="number" id="awards"></p>
                                <p>Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;