import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, handlelogin, handlelogout } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login", { email, password })
            .then((response) => {
                console.log(response.data.token);
                handlelogin(response.data.token);
            })
            .catch((err) => {
                console.log(err);
                alert("login unscuccesfull")
            });
    };

    return (
        <div>
            <div style={{ border: "1px solid black", marginTop: "10px", width: "25%", marginLeft: "25px", padding: "20px" }}>
                <h1>Login Form</h1>
                {!token ? (
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <br /><br />
                        
                        <label>Password</label>
                        <input 
                            type="password"
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <br /><br />

                        <input type="submit" value="Login" />
                    </form>
                ) : (
                    <>
                        <p>You are logged in!</p>
                        <button onClick={handlelogout}>Logout</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
