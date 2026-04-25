import React, { useState } from "react";


function LoginSignup() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container">
      <div className="tabs">
        <button onClick={() => setActiveTab("login")}>Login</button>
        <button onClick={() => setActiveTab("signup")}>Signup</button>
      </div>

      <div className="form-box">
        <h2>{activeTab === "login" ? "Login Form" : "Signup Form"}</h2>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button>
          {activeTab === "login" ? "Login" : "Signup"}
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;