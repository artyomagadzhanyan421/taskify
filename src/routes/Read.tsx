import { useEffect, useState } from "react";
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

    const [status, setStatus] = useState<string | undefined>(task?.status);
    const [isChanging, setIsChanging] = useState(false);

    // Toggle Status Handler
    const handleToggleStatus = async () => {
        setIsChanging(true);

        try {
            const response = await fetch(`${apiUrl}tasks/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                setStatus(data.task.status); // Update status without refreshing
                alert(data.message);
            } else {
                alert(data.message || "Failed to toggle task status!");
            }
        } catch (error) {
            alert("Error toggling task status!");
        } finally {
            setIsChanging(false);
        }
    };

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
                    <div className={lightMode ? "task lightTask" : "task"} style={{ maxWidth: "584px", margin: "0px 0px 50px 0px" }}>
                        <p className={lightMode ? "taskTitle lightTitle" : "taskTitle"} id="readTaskTitle">{task?.title}</p>
                        <p className="taskDate">
                            {status === "completed" ? "Completed" : `${task?.startDate} to ${task?.endDate}`}
                        </p>
                        <p className={lightMode ? "taskDesc lightDesc" : "taskDesc"} id="readTaskDesc">{task?.description}</p>
                        <div className="functions" style={{ marginTop: 20 }}>
                            <button className="completed" style={{ boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)" }} onClick={handleToggleStatus}>
                                <i className={isChanging ? 'bx bx-refresh' : "bx bx-check-circle"} style={{ color: "white" }}></i>
                                <span>{isChanging ? "Changing..." : status === "completed" ? "Mark as Pending" : "Mark as Done"}</span>
                            </button>
                        </div>
                    </div >
                    <Navbar />
                </>
            )
            }
        </div >
    )
}

export default Read;