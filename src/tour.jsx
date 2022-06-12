import React, { useState } from "react";

const Tour = ({id, image, info, name, price, removeItem }) => {
    const [read, setRead] = useState(false);
    return <div className="container">
        <div className="name-price">
            <h4>{name}</h4>
            <h4 style={{color: 'gold'}}>${price}</h4>
        </div>
        <div className='img'>
            <img src={image} alt={name}/>
        </div>
        <p style={{textAlign: 'start'}}>
        {read ? info : info.substring(0, 200)} 
        <button onClick={() => {
        if(read){
        setRead(false)
        }else{
            setRead(true);
        }
        }}>{read ? 'read less' : '...read more'}</button></p>
        <div className="no">
        <button onClick={() => removeItem(id)}>NOT INTERESTED</button></div>
    </div>;
};

export default Tour;
