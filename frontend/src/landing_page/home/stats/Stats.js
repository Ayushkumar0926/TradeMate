import React from "react";
import "./Stats.css"

function Stats(){
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">That's why 10k+ customers trust on TradeMate with 20k+ worth of equity investments.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifiactions.High quality apps that you use at your pace, the way you like.</p>
                    <h2 className="fs-4">The TradeMate universe</h2>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 5+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="Ecosystem Image" className="ecosystemImg"></img>
                    <div className="test-center">
                        <a href="" className="mx-5 statsLink">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" className="statsLink">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;