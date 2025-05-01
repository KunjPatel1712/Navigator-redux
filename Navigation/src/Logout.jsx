import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        handleLogout();
        navigate("/login"); // Redirect to login
    };

    return   <button 
    onClick={handleClick} 
    style={{ marginLeft: "35%", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
>
    Logout
</button>
}

export default Logout
