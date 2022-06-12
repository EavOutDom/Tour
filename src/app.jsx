import { useEffect, useState } from "react";
import Tours from "./tours";
import Loading from "./loading";
const url = "https://course-api.com/react-tours-project";

function App() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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
        fetchData();
    }, [isLoading]);

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (
        <div>
            <Tours tours={tours} />
        </div>
    );
}

export default App;
