import { useEffect, useState } from "react";
import Tours from "./tours";
import Loading from "./loading";
const url = "https://course-api.com/react-tours-project";

function App() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const removeItem = (id) => {
        setTours(() => {
            return tours.filter((data) => data.id !== id);
        });
    };
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTours(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    if (tours.length === 0) {
        return (
            <div className="nth">
                <div style={{ fontWeight: "600", fontSize: "30px" }}>
                    nothing left
                </div>
                <button className="btn" onClick={fetchData}>
                    Refresh
                </button>
            </div>
        );
    }
    return (
        <div>
            <Tours tours={tours} removeItem={removeItem} />
        </div>
    );
}

export default App;
