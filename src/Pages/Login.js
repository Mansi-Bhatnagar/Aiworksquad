import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import envelope from "../Assets/envelope.svg";
import lock from "../Assets/lock.svg";
import checkImg from "../Assets/check.svg";
import classes from "./Login.module.css";
const Login = () => {
  const credentials = { username: "user123", password: "pass123" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "" && password.trim() === "") {
      setError(true);
      setErrorMessage("Email and password cannnot be blank.");
    } else if (email.trim() === "") {
      setError(true);
      setErrorMessage("Email cannnot be blank.");
    } else if (password.trim() === "") {
      setError(true);
      setErrorMessage("Password cannot be blank.");
    } else if (
      email === credentials.username &&
      password === credentials.password
    ) {
      setError(false);
      if (check) {
        localStorage.setItem("AiWorkSquadEmail", JSON.stringify(email));
        localStorage.setItem("AiWorkSquadPassword", JSON.stringify(password));
      }
      navigate("/chatpage");
    } else {
      setError(true);
      setErrorMessage("Incorrect email or password.");
    }
  };
  const checkHandler = () => {
    setCheck((prev) => !prev);
  };
  useEffect(() => {
    if (localStorage.getItem("AiWorkSquadEmail")) {
      setEmail(JSON.parse(localStorage.getItem("AiWorkSquadEmail")));
    }
    if (localStorage.getItem("AiWorkSquadPassword")) {
      setPassword(JSON.parse(localStorage.getItem("AiWorkSquadPassword")));
    }
  }, []);
  return (
    <div className={classes.container}>
      <header>
        <img src={logo} alt="logo" className={classes.logo} />
      </header>
      <main className={classes.loginContainer}>
        <h2>Welcome Back</h2>
        <h5>Sign in to continue to AiworkSquad.</h5>
        <form onSubmit={submitHandler} className={classes.form}>
          <div
            className={classes.inputContainer}
            style={{ marginBottom: "20px" }}
          >
            <img src={envelope} alt="email" />
            <input
              type="email"
              placeholder="Email"
              onChange={emailHandler}
              value={email}
            />
          </div>
          <div className={classes.inputContainer}>
            <img src={lock} alt="password" />
            <input
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
              value={password}
            />
          </div>
          <div className={classes.options}>
            <div className={classes.checkbox}>
              <div className={classes.outerSquare} onClick={checkHandler}>
                {check ? <img src={checkImg} alt="check" /> : ""}
              </div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" onClick={checkHandler}>
                Remember me
              </label>
            </div>
            <span>Forgot Password?</span>
          </div>
          {error ? (
            <p className={classes.error}>{"* ".concat(errorMessage)}</p>
          ) : (
            ""
          )}
          <button onClick={submitHandler} className={classes.loginBtn}>
            Login
          </button>
        </form>
      </main>
      <footer className={classes.footerText}>2023 AiworkSquad.</footer>
    </div>
  );
};

export default Login;
