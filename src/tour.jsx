import React from "react";

const Tour = ({ image, info, name, price }) => {
    return <div className="container">
        <div className="name-price">
            <h4>{name}</h4>
            <h4 style={{color: 'gold'}}>${price}</h4>
        </div>
        <div className='img'>
            <img src={image} alt={name}/>
        </div>
        <p style={{textAlign: 'start'}}>{info}</p>
        <div className="no">
        <button>NOT INTERESTED</button></div>
    </div>;
};

export default Tour;
