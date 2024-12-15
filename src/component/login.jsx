import React from "react";
import "./Login.css"

const Login = () => {
    return (
        <>
            <section>
                <div className="contact-page">
                    <div className="contact-content">
                        <h1>Contact Us</h1>
                        <p>The call center is open from 9:00 a.m. to 8:00 p.m.<br/>Orders are accepted daily, excluding weekends.</p>
                        <p>
                            If you have any questions left, leave your contact details and we’ll call you back!
                        </p>
                        <form className="contact-form">
                            <div className="form-content">
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    className="form-input" 
                                    aria-label="Enter your name"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Enter your phone" 
                                    className="form-input" 
                                    aria-label="Enter your phone"
                                />
                                <button className="form-button" type="submit">Call me</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
