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
    name: string | null;
};

function Tasks({ tasks, name }: TaskListProps) {
    const lightMode = useSelector((state: RootState) => state.light.light);

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
                <p className={lightMode ? "heading lightHead" : "heading"}>Welcome, {name}!</p>

                {/* List of our tasks */}
                <div className="taskGrid">
                    {tasks.map((task) => (
                        <div className={lightMode ? "task lightTask" : "task"} key={task._id}>
                            <p className={lightMode ? "taskTitle lightTitle" : "taskTitle"}>{task.title}</p>
                            <p className={getDateClass(task.endDate)}>
                                {task.startDate} to {task.endDate}
                            </p>
                            <p className={lightMode ? "taskDesc lightDesc" : "taskDesc"}>{task.description}</p>
                            <div className="functions">
                                <Link to={`read/${task._id}`} className="funcLink">
                                    <i className='bx bx-help-circle' style={{ fontSize: 25, color: "white" }}></i>
                                    <span>Read</span>
                                </Link>
                                <Link to={`edit/${task._id}`} className="funcLink">
                                    <i className='bx bx-edit-alt' style={{ fontSize: 25, color: "white" }}></i>
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