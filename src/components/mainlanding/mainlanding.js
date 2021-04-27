import React from 'react';
import  './mainlanding.css';

const Mainlanding = ()=>
{
    return (
        <div className="main-landing-wrapper">
            <div className="main-landing-text-container">
                <div className="main-landing-text">
                    <h1>NEW</h1>
                    <h2>ARRIVALS</h2>
                </div>
                <div className="main-landing-button-container">
                    <button>GO SHOPPING</button> 
                </div>
            </div>
            <img className="main-landing-image" src="../../assets/images/home.png" alt="background" />
        </div>
    )
}
export default Mainlanding;