import { SyntheticEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const apiUrl = import.meta.env.VITE_TASKIFY_API;

function SignUp() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [disable, setDisbale] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const lightMode = useSelector((state: RootState) => state.light.light);

  const showPassword = () => setShow(!show);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setDisbale(true);

    const response = await fetch(`${apiUrl}signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/signin");
    } else {
      setDisbale(false);
      setErrorText(data.message);
    }
  };

  document.title = "Taskify | Sign Up";

  return (
    <div className={lightMode ? "Auth lightAuth" : "Auth"}>
      <form className={lightMode ? "lightForm" : ""} onSubmit={handleSubmit}>
        <center><h2 className={lightMode ? "lightHead" : ""}>Create an account</h2></center>

        <p className={errorText ? "error" : "error errNone"}>{errorText}</p>

        <div className="boxFlex">
          <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
            <i className='bx bx-user-circle' id={lightMode ? "lightIcon" : ""}></i>
            <input type="text" className={lightMode ? "lightInput" : ""} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={lightMode ? "inputBox lightBox" : "inputBox"}>
            <i className='bx bx-user-circle' id={lightMode ? "lightIcon" : ""}></i>
            <input type="text" className={lightMode ? "lightInput" : ""} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          </div>
        </div>
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
          <i className={disable ? 'bx bx-refresh' : 'bx bx-plus-circle'} style={{ color: "white" }}></i>
          <span>{disable ? "Creating..." : "Create account"}</span>
        </button>

        <center>
          <span className="signInLink">
            Already have an account? <Link to="/signin" style={{ color: "#A855F7" }}>Sign in</Link></span>
        </center>
      </form>
    </div>
  )
}

export default SignUp