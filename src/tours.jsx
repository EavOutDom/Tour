import React from "react";
import Tour from "./tour";

const Tours = ({ tours }) => {
    return (
        <div>
            <div
                style={{
                    fontWeight: "600",
                    fontSize: "30px",
                    marginTop: "10px",
                }}
            >
                Tours
            </div>
            {tours.map((data) => {
                return (
                    <div key={data.id} className="box">
                        <Tour
                            id={data.id}
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
