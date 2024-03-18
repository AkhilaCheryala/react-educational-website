import React, { useState } from "react";
import './Signup.css';
const Signup=({onClose})=>{
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  
  const handleSubmit = (e) => {
   e.preventDefault();
 console.log('Submitted:', { username, password });
  };
  const handleClosenow=()=>{
    setUsername("");
    setPassword("");
    onClose();
  };

    return(
<div>
      <form onSubmit={handleSubmit}>
        <div>
        <h2><u>Sign Up</u></h2>
          <input
            type="text"
            id="username" placeholder="Username:" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password" 
            id="password" placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button  type="submit" className="login-btn">Signup</button>
     
      <button type="button"  className='X'onClick={handleClosenow}><span className="bi bi-x"></span></button>
      </form>
    </div>
    )
}
export default Signup;