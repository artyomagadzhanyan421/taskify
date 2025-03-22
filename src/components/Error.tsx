import { useNavigate } from "react-router";

type TypeError = {
    error: string
}

function Error({ error }: TypeError) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("name");
        window.dispatchEvent(new Event("tokenChange"));
        navigate('/signin');
    };

    return (
        <div className="Error">
            <center><p className="heading">Error 404</p></center>
            <center><p className="taskDesc noTasks">{error}, please refresh the current page or enter your account again.</p></center>
            <center>
                <button
                    onClick={handleSignOut}
                    className="btn"
                    style={{ width: "fit-content", boxShadow: "2px 2px 4px rgb(0, 0, 0, 0.2)" }}
                >
                    <i className='bx bx-log-out-circle' style={{ fontSize: 25 }}></i>
                    <span>Leave account</span>
                </button>
            </center>
        </div>
    )
}

export default Error