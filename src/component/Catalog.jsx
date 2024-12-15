import React from "react";
import './Catalog.css'


const Catalog = () =>{
    return(
        <>
            <section>
                <div className="about_section">
                    <h1>What do we offer?</h1>

                    <div className="row">
                        <div className="text">
                            <h2>Modern Delivery</h2>
                            <span>We will make gifts! Same day delivery of bouquets to your address. Perfect for a surprise.</span>
                        </div>

                        <div className="text">
                            <h2>Presence in every city</h2>
                            <span>We work with flower points all over Russia and near abroad. Always nearby!</span>
                        </div>

                        <div className="text">
                            <h2>Flowers for every taste</h2>
                            <span>From classic roses to exotic tulips, there’s a bouquet for every occasion!</span>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="text_section">
                            <h2>Flower delivery all over Russia!</h2>
                            <p>Today not everyone has the opportunity to congratulate their mothers, girls, sisters on this holiday personally - someone is at work, someone lives in another city. We have gathered couriers in all cities of Russia so that you can congratulate your loved ones!</p>
                            <p className="unique"><strong>
                                    February 14? March 8?<br/>
                            </strong>Order flower delivery from us and the courier will deliver the bouquet without delay.</p>
                            <a href="#">See how we work ➜</a>
                        </div>
                        
                        <div className="profile_section">
                            <h3>Alana Yastrebova</h3>
                            <p>Founder of the company</p>
                            <p>Alana works with floral compositions. Most often it is bouquets to a certain holiday: birthday, wedding, March</p>
                            <p>
                            Working in this field for more than 6 years.</p>
                            <p>Also makes custom bouquets with all your wishes in mind.</p>
                        </div>

                    </div>
                    
                    

                    {/*
                    */}
                </div>
            </section>
        </>
    )
}

export default Catalog