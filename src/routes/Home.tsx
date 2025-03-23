import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filter } from "../redux/slices/filterMenuSlice";
import { RootState } from "../redux/store";

// Components
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import Error from "../components/Error";
import LoadingTasks from "../components/loading/LoadingTasks";

// Hooks
import useFetch from "../hooks/useFetch";

// Types
import { TypeTask } from "../types/TypeTask";

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function Home() {
  const lightMode = useSelector((state: RootState) => state.light.light);

  const dispatch = useDispatch();

  const { name, username, loading, error, tasks } = useFetch<TypeTask[]>(`${apiUrl}tasks`);

  useEffect(() => {
    if (username) {
      document.title = `Taskify | ${username}`;
    }
  }, [username]);

  const filterFunc = () => {
    dispatch(filter());
  }

  return (
    <div className={lightMode ? "Home toggleHome" : "Home"}>
      <div className="block">
        {loading ? (
          <LoadingTasks />
        ) : error ? (
          <Error error={error} />
        ) : (
          <>
            <div className="homeFlex">
              <p className={lightMode ? "heading lightHead" : "heading"}>Welcome, {name}!</p>
              <button className="btn" onClick={filterFunc} style={{ width: "fit-content", boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)" }}>
                <i className='bx bx-filter-alt' style={{ color: "white" }}></i>
                <span>Filters</span>
              </button>
            </div>
            <Tasks tasks={tasks ?? []} />
            <Navbar />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;