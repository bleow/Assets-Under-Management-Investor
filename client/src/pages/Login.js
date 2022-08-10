import { useState, useContext } from "react";
import useUserState from "../context/useUserState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { StateContext } = useUserState();
  const { dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  function setUsernameHandler(e) {
    setEmail(e.target.value);
  }

  function setPasswordHandler(e) {
    setPassword(e.target.value);
  }

  function loginEvent() {
    // Need to authenticate with account database
    fetch("/master/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.accessToken) {
        }
      });
    setEmail("");
    setPassword("");
    dispatch({ type: "login", user: email });
    navigate("/");
  }

  return (
    <>
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={setUsernameHandler}
        value={email}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={setPasswordHandler}
        value={password}
      />
      <button onClick={loginEvent}>Log In</button>
    </>
  );
};

export default Login;
