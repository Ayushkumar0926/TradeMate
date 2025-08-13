import React from "react";
import "./Awards.css";

function Awards(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="Awards Image"></img>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Best stock broker in India</h1>
                    <p className="mb-5">10k+ TradeMate clients contribute to over 5% of the retail order volumes in india daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li className="m-2">Futures and Options</li>
                                <li className="m-2">Commodity derivatives</li>
                                <li className="m-2">Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="m-2">Futures and Options</li>
                                <li className="m-2">Commodity derivatives</li>
                                <li className="m-2">Currency derivatives</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Press Logos Image" className="pressLogos"></img>
                </div>
            </div>
        </div>
    );
}

export default Awards