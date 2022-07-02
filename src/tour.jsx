import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRead, removeItem } from "./features/tour/tourSlice";
const Tour = ({ id, image, info, name, price }) => {
    const { read } = useSelector((state) => ({ ...state.tour }));
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="name-price">
                <h4>{name}</h4>
                <h4 style={{ color: "gold" }}>${price}</h4>
            </div>
            <div className="img">
                <img src={image} alt={name} />
            </div>
            <p style={{ textAlign: "start" }}>
                {read ? info : info.substring(0, 200)}
                <button
                    onClick={() => {
                        dispatch(setRead());
                    }}
                >
                    {read ? "read less" : "...read more"}
                </button>
            </p>
            <div className="no">
                <button onClick={() => dispatch(removeItem({ id }))}>
                    NOT INTERESTED
                </button>
            </div>
        </div>
    );
};

export default Tour;
