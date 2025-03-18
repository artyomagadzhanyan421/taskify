import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function useFetch<T>(url: string) {
    const navigate = useNavigate();

    const [name, setName] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [tasks, setTasks] = useState<T | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/signin");
            return;
        }

        setUsername(localStorage.getItem("username"));
        setName(localStorage.getItem("name"));

        document.title = "Loading...";

        const fetchTasks = async () => {
            try {
                const response = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch tasks");
                }

                const data = await response.json();
                setTasks(data);
            } catch (err) {
                setError((err as Error).message);
                console.error("Failed to fetch tasks:", err);

                document.title = "Error!";
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [url, navigate]);

    return { name, username, loading, error, tasks };
}

export default useFetch;