import React from "react";
import "./Team.css"

function Team(){
    return (
        <div className="conatiner">
            <div className="row mt-5">
                <h1 className="text-center">People</h1>
            </div>
            <div className="row text-muted p-5">
                <div className="col text-center p-5">
                    <img className="teamImg" src="/media/images/AyushKumar.jpeg"></img>
                    <h4 className="my-3">Ayush Kumar</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col p-5 founder">
                    <p>Ayush Kumar is the founder and CEO of TradeMate. An engineer by training and investor by passion, Ayush brings deep expertise in technology and finance.</p>
                    <p>His goal is to bridge the gap between traditional investing and modern technology, creating a platform where traders can make data-driven decisions with ease.</p>
                    <p>Under his leadership, TradeMate is shaping the future of digital trading.</p>
                    <p>Connect on: <a href=""><i class="fa-brands fa-linkedin-in"></i></a><a href=""><i class="fa-brands fa-x-twitter"></i></a> <a href=""><i class="fa-brands fa-facebook-f"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;