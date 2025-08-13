import React from "react";
import "./Hero.css";

function Hero(){
    return(
        <section className="container-fluid p-5" id="supportHero">
            <div className="mb-5" id="supportWrapper">
                <h5>Support Portal</h5>
                <a href="">Track Tickets</a>
            </div>
            <div className="row">
                <div className="col-6">
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder="Eg. how do I activate F&O..." /><br />
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6">
                    <h4 className="ps-3">Featured</h4>
                    <ol>
                        <li><a href="">Current Takeover and Delisting - May 2025</a></li>
                        <li><a href="">Latest Intraday leverage - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;