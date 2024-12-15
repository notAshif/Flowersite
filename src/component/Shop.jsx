import React from "react";
import "./Shop.css"
import SpringNight from "../assets/SpringNight-preview.png"
import reose from "../assets/30reose.png"
import Lavender from "../assets/Lavender.png"
import Magic from "../assets/Magic.png"
import Penonie from "../assets/Penonie.png"


const Shop = () => {
    const selectCard = (card) => {
        console.log("Selected card:", card);
    };

    return (
        <>
            <div>
                <div className="heading">
                    <h1>Choose your perfect bouquet</h1>
                </div>

                <ul className="bouquet-list">
                    <li>Designer bouquets</li>
                    <li className="active">Large bouquets</li>
                    <li>Small bouquets</li>
                    <li>February 14th</li>
                    <li>Monobouquets</li>
                    <li>March 8th</li>
                    <li>Birthday</li>
                    <li>Discounted bouquets</li>
                </ul>

                <div className="pricing-container">
                    <div
                        className="pricing-card"
                        onClick={() => selectCard("Spring Night")}
                    >
                        <h3>Designer bouquet "Spring Night"</h3>
                        <img src={SpringNight} alt="SpringNight" />
                        <p>
                            Price: <strong>$50.00</strong>
                        </p>
                        <button className="btn">Order</button>
                    </div>

                    <div
                        className="pricing-card featured"
                        onClick={() => selectCard("30 roses in hat box with bow")}
                    >
                        <h3>30 roses in hat box with bow</h3>
                        <img src={reose} alt="reose" />
                        <p>
                            Price: <strong>$60.00</strong>
                        </p>
                        <button className="btn">Order</button>
                    </div>

                    <div
                        className="pricing-card"
                        onClick={() => selectCard("Magic of tenderness")}
                    >
                        <h3>Designer bouquet "Magic of tenderness"</h3>
                        <img src={Magic} alt="Magic" />
                        <p>
                            Price: <strong>$70.00</strong>
                        </p>
                        <button className="btn">Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;