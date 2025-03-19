import { useState, SyntheticEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// Components
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import LoadingForm from "../components/loading/LoadingForm";

// Hooks
import useFetch from "../hooks/useFetch";

// Types
import { TypeTask } from "../types/TypeTask";

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [startInputType, setStartInputType] = useState('text');
  const [endInputType, setEndInputType] = useState('text');

  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const [trash, setTrash] = useState(false);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState("");

  const lightMode = useSelector((state: RootState) => state.light.light);

  const { tasks: task, loading } = useFetch<TypeTask>(`${apiUrl}tasks/${id}`);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStartDate(task.startDate);
      setEndDate(task.endDate);
      setDescription(task.description);
    } else if (!loading) {
      setError("Failed to fetch task");
    }
  }, [task, loading]);

  // Edit task
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setEdit(true);

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${apiUrl}tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, startDate, endDate, description }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/");
      } else {
        setEdit(false);
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to update task");
      console.error("Failed to update task:", error);
      setEdit(false);
    }
  };

  // Delete task
  const handleDelete = async () => {
    setTrash(true);

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${apiUrl}tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/");
      } else {
        setTrash(false);
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to delete task");
      console.error("Failed to delete task:", error);
      setTrash(false);
    }
  };

  useEffect(() => {
    if (title) {
      document.title = `Edit ${title}`;
    }
  }, [title]);

  return (
    <div className={lightMode ? "Home toggleHome" : "Home"}>
      <div className="block">
        {loading ? (
          <LoadingForm />
        ) : error ? (
          <div>
            <Error error={error} />
          </div>
        ) : (
          <>
            <form className={lightMode ? "lightForm" : ""} onSubmit={handleSubmit} style={{ maxWidth: "584px", margin: "auto auto 50px auto" }}>
              <center><h2 className={lightMode ? "lightHead" : ""}>Edit task</h2></center>

              <p className={error ? "error" : "error errNone"}>{error}</p>

              <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
                <i className='bx bx-task' id={lightMode ? "lightIcon" : ""}></i>
                <input type="text" className={lightMode ? "lightInput" : ""} placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} required />
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
                  required
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
                  required
                />
              </div>
              <textarea className={lightMode ? "lightText" : ""} placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} />

              <div className="functions">
                <button disabled={edit}>
                  <i className={edit ? "bx bx-refresh" : "bx bx-plus-circle"} style={{ color: "white" }}></i>
                  <span>{edit ? "Editing..." : "Edit"}</span>
                </button>
                <button type="button" onClick={handleDelete} className="trash" disabled={trash}>
                  <i className={trash ? "bx bx-refresh" : "bx bx-trash"} style={{ color: "white" }}></i>
                  <span>{trash ? "Trashing..." : "Trash"}</span>
                </button>
              </div>
            </form>
            <Navbar />
          </>
        )}
      </div>
    </div>
  )
}

export default Edit;