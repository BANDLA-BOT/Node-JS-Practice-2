import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e)=>{
     e.preventDefault()
      const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({name,email,password})
          })
          const data = await response.json()
          console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
        <input type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} value={email}/> <br/>
        <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} value={password}/> <br/>
        
        <input type="submit" value='Register'/>
      </form>
    </div>
  );
};

export default App;
