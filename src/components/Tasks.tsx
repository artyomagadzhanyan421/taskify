import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// CSS
import "../styles/Tasks.css";

// Components
import NoTasks from "./NoTasks";

// Types
import { TypeTask } from "../types/TypeTask";

type TaskListProps = {
    tasks: TypeTask[];
};

function Tasks({ tasks }: TaskListProps) {
    const lightMode = useSelector((state: RootState) => state.light.light);

    const render = tasks.length > 0;

    if (render) {
        return (
            <div className="Tasks">

                {/* List of our tasks */}
                <div className="taskGrid">
                    {tasks.map((task) => (
                        <div className={lightMode ? "task lightTask" : "task"} key={task._id}>
                            <p className={lightMode ? "taskTitle lightTitle" : "taskTitle"}>{task.title}</p>
                            <p className={lightMode ? "taskDate lightDate" : "taskDate"} style={{ fontWeight: 500 }}>
                                {task.startDate} to {task.endDate}
                            </p>
                            <p className={lightMode ? "taskDesc lightDesc" : "taskDesc"}>{task.description}</p>
                            <div className="functions">
                                <Link to={`read/${task._id}`} className="funcLink">
                                    <i className='bx bx-help-circle' style={{ fontSize: 25 }}></i>
                                    <span>Read</span>
                                </Link>
                                <Link to={`edit/${task._id}`} className="funcLink">
                                    <i className='bx bx-edit-alt' style={{ fontSize: 25 }}></i>
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

export default Tasks