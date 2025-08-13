import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return(
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-8">
                    <img src={imageURL} />
                </div>
                <div className="col-4 mt-5 pt-5">
                    <h1 className="fs-2 mb-4">{productName}</h1>
                    <p className="">{productDescription}</p>
                    <div className="mt-4">
                        <a style={{marginRight: "60px"}} href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a style={{marginRight: "25px"}} href={googlePlay}><img src="media\images\googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="media\images\appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;