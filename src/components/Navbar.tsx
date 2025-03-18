import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleLight } from "../redux/slices/lightSlice";
import { RootState } from "../redux/store";

// CSS
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const lightMode = useSelector((state: RootState) => state.light.light);

    const handleSignOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("name");
        window.dispatchEvent(new Event("tokenChange"));
        navigate('/signin');
    };

    return (
        <div className="Navbar">
            <nav className={lightMode ? "lightNav": ""}>
                <Link to="/" className={lightMode ? "lightLink": ""}>
                    <span className={lightMode ? "lightSpan": ""}>Home</span>
                    <i className='bx bx-grid-alt' id={lightMode ? "iconLight" : ""}></i>
                </Link>
                <Link to="/add" className={lightMode ? "lightLink": ""}>
                    <span className={lightMode ? "lightSpan": ""}>Add</span>
                    <i className='bx bx-plus-circle' id={lightMode ? "iconLight" : ""}></i>
                </Link>
                <button className={lightMode ? "lightLink": ""}>
                    <span className={lightMode ? "lightSpan": ""}>Filters</span>
                    <i className='bx bx-filter-alt' id={lightMode ? "iconLight" : ""}></i>
                </button>
                <button className={lightMode ? "lightLink": ""} onClick={() => dispatch(toggleLight())}>
                    <span className={lightMode ? "lightSpan": ""}>Light</span>
                    <i className='bx bx-sun' id={lightMode ? "iconLight" : ""}></i>
                </button>
                <button className={lightMode ? "lightLink": ""} onClick={handleSignOut}>
                    <span className={lightMode ? "lightSpan": ""}>Leave</span>
                    <i className='bx bx-log-out-circle' id={lightMode ? "iconLight" : ""}></i>
                </button>
            </nav>
        </div>
    )
}

export default Navbar