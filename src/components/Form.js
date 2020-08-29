import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Form.scss';
const Form = () => {
    let count = 0;
    

    useEffect(() => {

        const elements = [
            document.getElementById("customer"),
            document.getElementById("projects"),
            document.getElementById("sold"),
            document.getElementById("awards")
        ];
        const range = [3314, 3233, 2190, 58];
        let stepTime, timer;
        for(let i = 0; i < 4; i++) {
            stepTime = Math.abs(Math.floor(1 / range[i]));
            timer = setInterval(() => {
                count ++;
                if (count >= range[i]) {
                    clearInterval(timer);
                }
                elements[i].innerText = count;
            }, stepTime);
            count=0;
        }
        
    },[])

    return (
        <section className="formDiv">
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