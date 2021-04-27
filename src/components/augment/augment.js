import React from 'react';
import './augment.css';
const Augment = ()=>
{
    return(
        <div className="augment-wrapper">
            <div className="augment-card">
                <div className="augment-component augment-card-image-container">
                    <img src="../../assets/images/backpackMan.png" alt ="augment-card"/>
                </div>
                <div className =" augment-component augment-card-text-container" >
                    <h2>MEN</h2>
                    <h2>BACK PACK</h2>
                    <h4>View collection</h4>
                </div>
            </div>
            <div className="augment-card">
                <div className ="augment-component augment-card-text-container" >
                    <h2>WOMEN</h2>
                    <h2>BACK PACK</h2>
                    <h4>View collection</h4>
                </div>
                <div className="augment-component augment-card-image-container">
                    <img src="/assets/images/backpackWoman.png" alt="augment-card" />
                </div>
            </div>
        </div>
    )
}

export default Augment;