import React from "react";

function Universe() {
    return (
        <div className="container mt-5 pt-5">
            <div className="row text-center">
                <h1 className="mb-3">The TradeMate Universe</h1>
                <p className="mb-5">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 mt-5">
                    <img src="media\images\sensibullLogo.svg" className="mb-4"/>
                    <p>Option trading platform
                    </p>
                </div>
                <div className="col-4 mt-5">
                    <img src="media\images\smallcaseLogo.png" className="mb-3" />
                    <p className="text-small text-muted">Thematic investment platform
                    </p>
                </div>
                <div className="col-4 mt-5">
                    <img src="media\images\goldenpiLogo.png" className="mb-4"/>
                    <p>Bonds trading platform
                    </p>
                </div>
                <button className="p-2 btn btn-primary mb-5 mt-5">Signup now</button>
            </div>
        </div>
    );
}

export default Universe;