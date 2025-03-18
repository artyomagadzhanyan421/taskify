import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// Components
import Navbar from "../components/Navbar";
import LoadingTask from "../components/loading/LoadingTask";

// Hooks
import useFetch from "../hooks/useFetch";

// Types
import { TypeTask } from "../types/TypeTask";

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function Read() {
    const { id } = useParams();
    const lightMode = useSelector((state: RootState) => state.light.light);

    const { tasks: task, loading } = useFetch<TypeTask>(`${apiUrl}tasks/${id}`);

    useEffect(() => {
        if (task) {
            document.title = `${task.title}`;
        }
    }, [task]);

    return (
        <div className={lightMode ? "Auth lightAuth" : "Auth"}>
            {loading ? (
                <LoadingTask />
            ) : (
                <>
                    <div className={lightMode ? "task lightTask" : "task"} id='readTask'>
                        <p className={lightMode ? "taskTitle lightTitle" : "taskTitle"} id="readTaskTitle">{task?.title}</p>
                        <p className={lightMode ? "taskDate lightDate" : "taskDate"} style={{ fontWeight: 500 }}>
                            {task?.startDate} to {task?.endDate}
                        </p>
                        <p className={lightMode ? "taskDesc lightDesc" : "taskDesc"} id="readTaskDesc">{task?.description}</p>
                    </div >
                    <Navbar />
                </>
            )
            }
        </div >
    )
}

export default Read