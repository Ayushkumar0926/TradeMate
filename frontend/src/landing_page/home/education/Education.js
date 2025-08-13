import React from "react";
import "./Education.css"

function Education(){
    return (
         <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" className="educationImg"></img>
                </div>
                <div className="col-6 p-5 education">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading.</p>
                    <a href="" className="statsLink">Versity <i class="fa-solid fa-arrow-right"></i></a>
                    <p>TradingQ&A, the most active rading and investment market related queries.</p>
                    <a href="" className="statsLink">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;