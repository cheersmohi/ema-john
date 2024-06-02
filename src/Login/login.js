import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title"> login</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label for="Email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label for="Password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading......</p>}
          <input className="form-submit" type="submit" value="login" />
        </form>
        <p className="form-pera">
          New to Ema-John ?{" "}
          <Link className="form-link" to="/signup">
            Create New Account{" "}
          </Link>
        </p>
        <div className="or-element">
          <hr />
        </div>

        <button className="google-button">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
