import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e)=>{
     e.preventDefault()
      const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({email,password})
          })
          const data = await response.json()
          console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={loginUser}>
        <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} value={email}/> <br/>
        <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} value={password}/> <br/>
        
        <input type="submit" value='Register'/>
      </form>
    </div>
  );
};

export default App;
