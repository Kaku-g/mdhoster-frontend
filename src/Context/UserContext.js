import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    let user = localStorage.getItem("userName");
    let token = localStorage.getItem("userToken");
    console.log(user, token);
    setUser(user);
    setToken(token);
  }, [user]);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");
    navigate("/");
    //window.location.reload();
  };

  const contextValue = {
    user,
    token,
    handleLogin,
    handleLogout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserProvider, UserContext };
