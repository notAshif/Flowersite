import React from "react";
import "./Delivery.css"


const Delivery = () => {
    return (
        <section className="sec">
            <div className="text-heading">
                <h1>Map our delivery</h1>
                <p>
                    Wherever you are, we will deliver a bouquet! We cooperate with courier services all over Russia — just choose a city and find out the delivery details.
                </p>
            </div>

            <div className="map-container">
                <div className="marker marker-pskov"></div>
                <div className="marker marker-sangar"></div>
                <div className="marker marker-ps1"></div>
                <div className="marker marker-ps2"></div>
                <div className="popup">
                    <h3>
                        Sangar, Republic of Sakha (Yakutia)
                    </h3>
                    <div className="hr"></div>
                    <p>Place order minimum 24 hours before delivery</p>
                    <p>
                        Delivery from 350 rub.
                    </p>
                </div>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Enter cities — learn details" />
                <button>Search</button>
            </div>
        </section>
    );
};

export default Delivery;
