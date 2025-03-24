import { SyntheticEvent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toggleFilter } from "../redux/slices/filterMenuSlice";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setFilter, resetFilter } from '../redux/slices/filterSlice';

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function Filter() {
    const dispatch = useDispatch();

    const filter = useSelector((state: RootState) => state.toggle.toggle);

    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState("");

    const [startInputType, setStartInputType] = useState('text');
    const [endInputType, setEndInputType] = useState('text');

    const [disable, setDisbale] = useState(false);
    const [errorText, setErrorText] = useState("");

    const lightMode = useSelector((state: RootState) => state.light.light);

    const handleFilter = async (e: SyntheticEvent) => {
        e.preventDefault();
        setDisbale(true);
        setErrorText(""); // Clear previous error

        try {
            const response = await fetch(`${apiUrl}tasks`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            const data = await response.json();
            
            if (!response.ok) {
                setErrorText(data.message);
            }

            dispatch(setFilter({ title, startDate, endDate, status, description }));
            dispatch(toggleFilter());
        } catch (err) {
            setDisbale(false);
            setErrorText("An unknown error occurred!");
            console.error("An unknown error occurred:", err);
        } finally {
            setDisbale(false);
        }
    };

    const handleReset = () => {
        setTitle('');
        setStartDate('');
        setEndDate('');
        setStatus('');
        setDescription('');
    };

    useEffect(() => {
        dispatch(resetFilter());
    }, [dispatch]);

    return (
        <div className={filter ? "Filter drop" : "Filter"}>
            <div className="filterLayer">
                <form onSubmit={handleFilter} style={{ maxWidth: "584px", margin: "auto" }} className={lightMode ? "lightForm" : ""}>
                    <center><h2 className={lightMode ? "lightHead" : ""}>Filter task</h2></center>

                    <p className={errorText ? "error" : "error errNone"}>{errorText}</p>

                    <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
                        <i className='bx bx-task' id={lightMode ? "lightIcon" : ""}></i>
                        <input type="text" className={lightMode ? "lightInput" : ""} placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
                        <i className='bx bx-calendar' id={lightMode ? "lightIcon" : ""}></i>
                        <input
                            type={startInputType}
                            className={lightMode ? "lightInput" : ""}
                            placeholder="Start date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            onFocus={() => setStartInputType('date')}
                            onBlur={() => {
                                if (!startDate) setStartInputType('text');
                            }}
                        />
                    </div>
                    <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
                        <i className='bx bx-calendar-check' id={lightMode ? "lightIcon" : ""}></i>
                        <input
                            type={endInputType}
                            className={lightMode ? "lightInput" : ""}
                            placeholder="End date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            onFocus={() => setEndInputType('date')}
                            onBlur={() => {
                                if (!endDate) setEndInputType('text');
                            }}
                        />
                    </div>
                    <select className={lightMode ? "lightText" : ""} value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" selected disabled>Task status</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                    <textarea className={lightMode ? "lightText" : ""} placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <div className="functions">
                        <button className="btn" disabled={disable}>
                            <i className={disable ? "bx bx-refresh" : "bx bx-filter-alt"} style={{ color: "white" }}></i>
                            <span>{disable ? "Filtering..." : "Filter"}</span>
                        </button>
                        <button type="button" onClick={handleReset} className="btn trash" disabled={disable}>
                            <i className="bx bx-reset" style={{ color: "white" }}></i>
                            <span>Reset</span>
                        </button>
                    </div>
                </form>
                <i className='bx bx-x-circle' id="closeFilter" onClick={() => dispatch(toggleFilter())}></i>
            </div>
        </div>
    )
}

export default Filter;