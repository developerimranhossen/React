import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

function Login() {
    const [username, setUsernaem] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className="">
      <h1>Login</h1>
      <input type="text" placeholder="username"
      value={username}
      onChange={(e) => setUsernaem(e.target.value)} />
      <input type="text" placeholder="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>sign up</button>
    </div>
  );
}

export default Login;
