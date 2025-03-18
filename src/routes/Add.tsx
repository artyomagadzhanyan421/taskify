import { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// CSS
import "../styles/Auth.css";

// Components
import Navbar from "../components/Navbar";

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function Add() {
  const navigate = useNavigate();

  const [startInputType, setStartInputType] = useState('text');
  const [endInputType, setEndInputType] = useState('text');

  const [error, setError] = useState("");
  const [disable, setDisbale] = useState(false);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState("");

  const lightMode = useSelector((state: RootState) => state.light.light);

  // Create task
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setDisbale(true);

    const token = localStorage.getItem("token");

    const response = await fetch(`${apiUrl}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, startDate, endDate, description }),
    })

    const data = await response.json();
    if (response.ok) {
      navigate("/");
    } else {
      setDisbale(false);
      setError(data.message);
    }
  }

  document.title = "Taskify | Create Task";

  return (
    <div className={lightMode ? "Home toggleHome" : "Home"}>
      <form className={lightMode ? "lightForm" : ""} onSubmit={handleSubmit} style={{ maxWidth: "584px", margin: "auto auto 50px auto" }}>
        <center><h2 className={lightMode ? "lightHead" : ""}>Create task</h2></center>

        <p className={error ? "error" : "error errNone"}>{error}</p>

        <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
          <i className='bx bx-task' id={lightMode ? "lightIcon" : ""}></i>
          <input type="text" className={lightMode ? "lightInput" : ""} placeholder="Task title" onChange={(e) => setTitle(e.target.value)} required />
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
        <textarea className={lightMode ? "lightText" : ""} placeholder="Task description" onChange={(e) => setDescription(e.target.value)} />

        <button type="submit" disabled={disable}>
          <i className={disable ? "bx bx-refresh" : "bx bx-plus-circle"} style={{ color: "white" }}></i>
          <span>{disable ? "Creating..." : "Create task"}</span>
        </button>
      </form>
      <Navbar />
    </div>
  )
}

export default Add