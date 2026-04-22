import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setError("All fields are required!");
    } else if (!email.includes("@")) {
      setError("Enter valid email!");
    } else {
      setError("");
      alert(activeTab === "login" ? "Login Success" : "Signup Success");
    }
  };

  return (
    <div className="container">
      
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>

        <button
          className={activeTab === "signup" ? "active" : ""}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </button>
      </div>

      {/* Form */}
      <div className="form-box fade">
        <h2>{activeTab === "login" ? "Login Form" : "Signup Form"}</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {activeTab === "login" && (
          <p className="forgot">Forgot password?</p>
        )}

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        <button className="btn" onClick={handleSubmit}>
          {activeTab === "login" ? "Login" : "Signup"}
        </button>
      </div>
    </div>
  );
}

export default App;