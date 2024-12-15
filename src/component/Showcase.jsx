import React from "react";
import "./Showcase.css"
import imageFirst from '../assets/7-removebg.png'

const Showcase = () =>{
    return(
        <>
            <div className="Showcase">
                <div className="Showcase_content">
                    <h2>Welcome to FlowerSite, where nature meets artistry!</h2>
                    <div className="small_text">
                        <p>Our collection includes vibrant roses, elegant lilies, cheerful sunflowers, and exotic orchids, all carefully curated to add a touch of beauty and warmth to your life. With a focus on quality, creativity, and customer satisfaction, we also offer personalized bouquets and same-day delivery services.

                        Visit us and let your emotions bloom with our blossoms! 🌸</p>
                    </div>
                    <button className="shop_now">Shop Now</button>
                </div>
                
               <div className="showcase_img">
                    <div className="ImgWrapper">
                        <img src={imageFirst} alt="imageFirst" />
                    </div>
                    <div className="Background_circle"></div>
                </div>
                

            </div>
        </>
    )
}

export default Showcase;