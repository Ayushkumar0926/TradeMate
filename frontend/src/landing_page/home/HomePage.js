import React from "react";
import Hero from "./hero/Hero";
import Awards from "./awards/Awards";
import Stats from "./stats/Stats";
import Pricing from "./pricing/Pricing";
import Education from "./education/Education";

import OpenAccount from "../OpenAccount";

function HomePage(){
    return(
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;