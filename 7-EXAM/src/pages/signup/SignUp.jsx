import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../plugins/axiosClient";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [FullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosClient.post(`/api/auth/signup`, { full_name: FullName, username: username, password: password });

      if (response.status === 201) {
        localStorage.setItem("token", response?.data?.token);
        toast.success("Successfully created account");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Unsuccessful attempt");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFullName("");
    setUsername("");
    setPassword("");
  }, [loading]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <div className="card">
            <h1 className="signup-title">Sign Up</h1>
            <form onSubmit={handleSubmit} id="signup-form" className="signup-form">
              <input autoComplete="current-password" onChange={(e) => setFullName(e.target.value)} required value={FullName} className="signup-input" type="text" placeholder="Enter your full name" />
              <input autoComplete="current-password" onChange={(e) => setUsername(e.target.value)} required value={username} className="signup-input" type="text" placeholder="Enter your username" />
              <input autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} required value={password} className="signup-input" type="password" placeholder="Enter your password" />
            </form>
            <button type="submit" form="signup-form" className="signup-btn">
              Sign Up
            </button>
          </div>
          <ToastContainer />
          {/* <Link to="/sidebar">Go to sidebar</Link> */}
        </div>
      )}
    </>
  );
};

export default SignUp;
