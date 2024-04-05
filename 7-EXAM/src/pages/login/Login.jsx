// import React from "react";
// import "./Login.css";
// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import axiosClient from "../../plugins/axiosClient";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = e => {
//     e.preventDefault();
//     let payload = {
//       username: username,
//       password: password
//     };

//     try {
//       axiosClient
//         .post(`/api/auth/signin`, { ...payload })
//         .then(response => {
//           if (response.status === 201) {
//             localStorage.setItem("token", response.data.tokens.access_token);
//           }
//         })
//         .then(() => {
//           toast.success("Successfully logged in");
//           navigate("/authors");
//         })
//         .catch(error => {
//           toast.error("Unsuccessful attempt");
//           console.log(error);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   let active = Boolean(username) && Boolean(password);

//   return (
//     <div className="container">
//       <div className="card">
//         <h1 className="login-title">Login</h1>
//         <form id="login-form" onSubmit={handleSubmit} className="signup-form">
//           <input
//             autoComplete="current-password"
//             required
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             className="login-input"
//             type="text"
//             placeholder="Enter your username"
//           />
//           <input
//             autoComplete="current-password"
//             required
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             className="login-input"
//             type="password"
//             placeholder="Enter your password"
//           />
//         </form>
//         <button
//           disabled={!active}
//           form="login-form"
//           type="submit"
//           className="login-btn"
//         >
//           Login
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../plugins/axiosClient";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Your side effect code (if any) can go here
  }, []); // Empty dependency array means this effect will run once, similar to componentDidMount

  const handleSubmit = async e => {
    e.preventDefault();
    let payload = {
      username: username,
      password: password
    };

    try {
      const response = await axiosClient.post(`/api/auth/signin`, {
        ...payload
      });

      if (response.status === 201) {
        localStorage.setItem("token", response.data.tokens.access_token);
        toast.success("Successfully logged in");
        navigate("/authors");
      }
    } catch (error) {
      toast.error("Unsuccessful attempt");
      console.log(error);
    }
  };

  let active = Boolean(username) && Boolean(password);

  return (
    <div className="container">
      <div className="card">
        <h1 className="login-title">Login</h1>
        <form id="login-form" onSubmit={handleSubmit} className="signup-form">
          <input
            autoComplete="current-password"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="login-input"
            type="text"
            placeholder="Enter your username"
          />
          <input
            autoComplete="current-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="login-input"
            type="password"
            placeholder="Enter your password"
          />
        </form>
        <button
          disabled={!active}
          form="login-form"
          type="submit"
          className="login-btn"
        >
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
