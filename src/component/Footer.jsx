import React from "react";
import "./Footer.css"

const Footer = () =>{
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <p>We accept to payment:</p>
                    <i className='bx bxl-visa'></i>
                    <i className='bx bxl-mastercard' ></i>
                    <i className='bx bx-money' ></i>
                    <p className="diff"><a href="#">Privacy Policy</a></p>
                </div>

                <div className="footer-content-2">
                    <p>FlowerSite</p>
                    <p>
                    All gifts</p>
                    <p>
                    Order your bouquet</p>
                </div>

                <div className="social-content">
                    <p>Follow us:</p>
                    <i className='bx bxl-telegram' ></i>
                    <i className='bx bxl-vk' ></i>
                    <i className='bx bxl-instagram' ></i>
                    <i className='bx bxl-twitter' ></i>
                    <button><i className='bx bxs-phone' ></i>Order a Call</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer