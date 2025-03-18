import { useState, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// CSS
import "../styles/Auth.css";

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function SignIn() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [disable, setDisbale] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const lightMode = useSelector((state: RootState) => state.light.light);

  const showPassword = () => setShow(!show);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setDisbale(true);

    const response = await fetch(`${apiUrl}signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("name", data.name);
      window.dispatchEvent(new Event("tokenChange"));
      navigate("/", { replace: true });
    } else {
      setDisbale(false);
      setErrorText(data.message);
    }
  };

  document.title = "Taskify | Sign In";

  return (
    <div className={lightMode ? "Auth lightAuth" : "Auth"}>
      <form className={lightMode ? "lightForm" : ""} onSubmit={handleSubmit} style={{ width: "584px" }}>
        <center><h2 className={lightMode ? "lightHead" : ""}>Enter an account</h2></center>

        <p className={errorText ? "error" : "error errNone"}>{errorText}</p>

        <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
          <i className='bx bx-envelope' id={lightMode ? "lightIcon" : ""}></i>
          <input type="email" className={lightMode ? "lightInput" : ""} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
          <i className='bx bx-lock-alt' id={lightMode ? "lightIcon" : ""}></i>
          <input type={show ? "text" : "password"} className={lightMode ? "lightInput" : ""} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <i className='bx bx-show' id={lightMode ? "lightIcon" : ""} style={{ cursor: "pointer" }} onClick={showPassword}></i>
        </div>
        <button type="submit" disabled={disable}>
          <i className={disable ? 'bx bx-refresh' : 'bx bx-log-in-circle'} style={{ color: "white" }}></i>
          <span>{disable ? "Entering..." : "Enter account"}</span>
        </button>

        <center>
          <span className="signInLink">
            Don't have an account? <Link to="/signup" style={{ color: "#A855F7" }}>Sign up</Link></span>
        </center>
      </form>
    </div>
  )
}

export default SignIn