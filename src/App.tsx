import './App.css';
import { Routes, Route, Navigate } from "react-router";
import { useState, useEffect } from 'react';

// Routes
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Add from './routes/Add';
import Edit from './routes/Edit';
import Read from './routes/Read';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("tokenChange", handleTokenChange);
    return () => window.removeEventListener("tokenChange", handleTokenChange);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/add' element={token ? <Add /> : <Navigate to="/signin" />} />
        <Route path="edit/:id" element={token ? <Edit /> : <Navigate to="/signin" />} />
        <Route path="read/:id" element={token ? <Read /> : <Navigate to="/signin" />} />
      </Routes>
    </div>
  )
}

export default App
