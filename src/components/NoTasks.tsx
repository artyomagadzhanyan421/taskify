import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function NoTasks() {
    const lightMode = useSelector((state: RootState) => state.light.light);

    return (
        <div className="NoTasks">
            <center><p className={lightMode ? "heading lightHead" : "heading"}>No Tasks To Do</p></center>
            <center><p className={lightMode ? "taskDesc lightDesc" : "taskDesc"} id="noTasks">You have no tasks to complete at this given time. Please add new tasks to collect them in you list.</p></center>
            <center>
                <Link
                    to="/add"
                    className="btn"
                    style={{ width: "fit-content", boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)" }}
                >
                    <i className='bx bx-plus-circle' style={{ color: "white", fontSize: 25 }}></i>
                    <span>Add tasks</span>
                </Link>
            </center>
        </div>
    )
}

export default NoTasks;