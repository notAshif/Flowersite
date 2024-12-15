import React from "react";
import './Navbar.css'
 
const Navbar = () =>{
    return(
        <>
            <header className="nav-header">
                <h1 className="navbar-logo">flowerSite</h1>
                <nav>
                    
                    <ul>
                        <li><a href="#home" className="">Home</a></li>
                        <li><a href="#about">Catalog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#blog">Delivery</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
                <div className="contactUs">
                    <p>Contact us: <span>+1 123 456 7890</span></p>
                    <button className="callNow"><i className='bx bxs-phone' ></i>Call Now</button>
                </div>
            </header>
        </>
    )
}

export default Navbar