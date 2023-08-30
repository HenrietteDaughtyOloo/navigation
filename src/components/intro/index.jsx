import React from "react";
import "./style.css"

const Introduction=()=>{
    return(
        <div className="intro">
            <div className="explore">
                <h1 className="explore-h1">Explore The <span className="principles">Principles</span>
            <br />
           Of <span className="kenyan">Kenyan </span>Governance <br />
            within the <span className="gaming">Gaming</span> Universe!</h1>
            <h1 className="explore-h2"> 🎮🌟</h1>
            </div>
            <div>
            <img className="law" src={process.env.PUBLIC_URL + '/Images/law.png'} alt="law" />
            </div>
        </div>
    )
}
export default Introduction