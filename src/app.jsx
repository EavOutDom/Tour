import { useEffect } from "react";
import Tours from "./tours";
import Loading from "./loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./features/tour/tourSlice";
function App() {
    const { tours, isLoading } = useSelector((state) => ({ ...state.tour }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    if (!tours || tours.length === 0) {
        return (
            <div className="nth">
                <div style={{ fontWeight: "600", fontSize: "30px" }}>
                    nothing left
                </div>
                <button className="btn" onClick={() => dispatch(fetchData())}>
                    Refresh
                </button>
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
