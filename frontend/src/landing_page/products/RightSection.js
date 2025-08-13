import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}){
    return(
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-4 mt-5 pt-5" style={{marginBottom: "0px"}}>
                    <h1 className="fs-2 mb-4 mt-5">{productName}</h1>
                    <p className="">{productDescription}</p>
                    <div className="mt-4">
                        <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-8" style={{paddingLeft: "100px"}}>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;