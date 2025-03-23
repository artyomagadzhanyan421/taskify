import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type TypeFilter = {
  menu: boolean;
  toggle: () => void;
}

function Filters({ menu, toggle }: TypeFilter) {
  const [startInputType, setStartInputType] = useState('text');
  const [endInputType, setEndInputType] = useState('text');

  const [disable, setDisbale] = useState(false);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState("");

  const lightMode = useSelector((state: RootState) => state.light.light);

  return (
    <div className={menu ? "Filters drop" : "Filters"}>
      <div className="filterLayer">
        <form className={lightMode ? "lightForm" : ""} style={{ maxWidth: "584px", margin: "auto" }}>
          <center><h2 className={lightMode ? "lightHead" : ""}>Task filters</h2></center>

          <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
            <i className='bx bx-task' id={lightMode ? "lightIcon" : ""}></i>
            <input type="text" className={lightMode ? "lightInput" : ""} placeholder="Task title" onChange={(e) => setTitle(e.target.value)} />
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
          <select className={lightMode ? "lightText" : ""}>
            <option value="" disabled selected>Task status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <textarea className={lightMode ? "lightText" : ""} placeholder="Task description" onChange={(e) => setDescription(e.target.value)} />

          <button className="btn" disabled={disable}>
            <i className={disable ? "bx bx-refresh" : "bx bx-filter-alt"} style={{ color: "white" }}></i>
            <span>{disable ? "Filtering..." : "Filter task"}</span>
          </button>
        </form>

        <i className='bx bx-x-circle' id='closeToggle' onClick={toggle}></i>
      </div>
    </div>
  )
}

export default Filters