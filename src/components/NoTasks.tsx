import { Link } from "react-router"

function NoTasks() {
    return (
        <div className="NoTasks">
            <center><p className="heading">No Tasks To Do</p></center>
            <center><p className="taskDesc noTasks">You have no tasks to complete at this given time. Please add new tasks to collect them in you list.</p></center>
            <center>
                <Link
                    to="/add"
                    className="funcLink"
                    style={{ boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2" }}
                >
                    <i className='bx bx-plus-circle' style={{ fontSize: 25 }}></i>
                    <span>Add tasks</span>
                </Link>
            </center>
        </div>
    )
}

export default NoTasks