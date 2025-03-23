import { useEffect } from "react";
import { useSelector } from "react-redux";
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

  const { name, username, loading, error, tasks } = useFetch<TypeTask[]>(`${apiUrl}tasks`);

  useEffect(() => {
    if (username) {
      document.title = `Taskify | ${username}`;
    }
  }, [username]);

  return (
    <div className={lightMode ? "Home toggleHome" : "Home"}>
      <div className="block">
        {loading ? (
          <LoadingTasks />
        ) : error ? (
          <Error error={error} />
        ) : (
          <>
            <p className={lightMode ? "heading lightHead" : "heading"}>Welcome, {name}!</p>
            <Tasks tasks={tasks ?? []} />
            <Navbar />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;