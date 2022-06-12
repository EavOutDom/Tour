import React from "react";
import Tour from "./tour";

const Tours = ({ tours }) => {
    console.log(tours);
    return (
        <div>
            Tours
            {tours.map((data) => {
                return (
                    <div key={data.id}>
                        <Tour
                            image={data.image}
                            info={data.info}
                            name={data.name}
                            price={data.price}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Tours;
