import React from 'react';
import './Form.scss';
const Form = () => {
    return (
        <section className="formDiv">
            <div className="completed">
                <img className="completedBackground" src={require('../images/2.jpg')} alt="background"/>
                <div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/customer.svg')} alt="happy customers"/>
                            <p className="number">1234</p>
                            <p>Happy Customers</p>    
                        </div>
                    </div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/living.svg')} alt="completed projects"/>
                            <p className="number">1234</p>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/keys.svg')} alt="sold homes"/>
                            <p className="number">1234</p>
                            <p>Homes Sold</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="statBox">
                            <img className="completedIcons" src={require('../icons/medal.svg')} alt="awards won"/>
                            <p className="number">1234</p>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;