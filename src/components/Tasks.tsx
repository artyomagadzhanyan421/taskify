import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "../redux/slices/filterMenuSlice";
import { RootState } from "../redux/store";

// CSS
import "../styles/Tasks.css";

// Components
import NoTasks from "./NoTasks";

// Types
import { TypeTask } from "../types/TypeTask";

type TaskListProps = {
    name: string | null;
    tasks: TypeTask[];
};

function Tasks({ tasks, name }: TaskListProps) {
    const dispatch = useDispatch();

    const lightMode = useSelector((state: RootState) => state.light.light);
    const filters = useSelector((state: RootState) => state.filter);

    // Function to filter tasks based on filter state
    const filteredTasks = tasks.filter((task) => {
        const matchesTitle = filters.title ? task.title.toLowerCase().includes(filters.title.toLowerCase()) : true;
        const matchesStartDate = filters.startDate ? new Date(task.startDate) >= new Date(filters.startDate) : true;
        const matchesEndDate = filters.endDate ? new Date(task.endDate) <= new Date(filters.endDate) : true;
        const matchesStatus = filters.status ? task.status === filters.status : true;
        const matchesDescription = filters.description ? task.description.toLowerCase().includes(filters.description.toLowerCase()) : true;

        return matchesTitle && matchesStartDate && matchesEndDate && matchesStatus && matchesDescription;
    });

    if (filteredTasks.length === 0) {
        return (
            <div>
                <center><p className={lightMode ? "heading lightHead" : "heading"}>No Tasks Found</p></center>
                <center><p className={lightMode ? "taskDesc lightDesc" : "taskDesc"} id="noTasks">You have no tasks that match your filters. Please change filter parameters or refresh the page.</p></center>
                <center>
                    <button
                        className="btn"
                        onClick={() => dispatch(toggleFilter())}
                        style={{ width: "fit-content", boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)" }}
                    >
                        <i className='bx bx-filter-alt' style={{ color: "white", fontSize: 25 }}></i>
                        <span>Filter task</span>
                    </button>
                </center>
            </div>
        )
    }

    const render = tasks.length > 0;

    // Function to determine the class based on the task end date
    const getDateClass = (endDate: string) => {
        const currentDate = new Date();
        const end = new Date(endDate);
        const twoDaysBeforeEnd = new Date(end);
        twoDaysBeforeEnd.setDate(end.getDate() - 2);

        if (end < currentDate) {
            return "taskDate redDate"; // If deadline is expired - Red
        } else if (currentDate >= twoDaysBeforeEnd) {
            return "taskDate yellowDate"; // Two days before deadline - Yellow
        } else {
            return "taskDate"; // Future date - Green
        }
    };

    if (render) {
        return (
            <div className="Tasks">
                <div className="filterFlex">
                    <p className={lightMode ? "heading lightHead" : "heading"}>Welcome, {name}!</p>
                    <button onClick={() => dispatch(toggleFilter())} className="btn" style={{
                        color: "white",
                        width: "fit-content",
                        boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)"
                    }}>
                        <i className='bx bx-filter-alt' style={{ color: "white" }}></i>
                        <span>Filter</span>
                    </button>
                </div>

                {/* List of our tasks */}
                <div className="taskGrid">
                    {filteredTasks.map((task) => (
                        <div className={lightMode ? "task lightTask" : "task"} key={task._id}>
                            <p className={lightMode ? "taskTitle lightTitle" : "taskTitle"}>{task.title}</p>
                            {task.status === "completed" ? (
                                <p className="taskDate">Completed</p>
                            ) : (
                                <p className={getDateClass(task.endDate)}>
                                    {task.startDate} to {task.endDate}
                                </p>
                            )}
                            <p className={lightMode ? "taskDesc lightDesc" : "taskDesc"}>{task.description}</p>
                            <div className="functions">
                                <Link to={`read/${task._id}`} className="btn" style={{
                                    boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)"
                                }}>
                                    <i className='bx bx-help-circle' style={{ color: "white" }}></i>
                                    <span>Read</span>
                                </Link>
                                <Link to={`edit/${task._id}`} className="btn" style={{
                                    boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)"
                                }}>
                                    <i className='bx bx-edit-alt' style={{ color: "white" }}></i>
                                    <span>Edit</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <NoTasks />
        )
    }
}

export default Tasks;