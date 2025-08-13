import React from "react";
import "./Hero.css"

function Hero(){
    return(
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"></img>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivates, mutual funds, and more</p>
                <button className="p-2 btn btn-primary mb-5">Signup now</button>
            </div>
        </div>
    );
}

export default Hero;