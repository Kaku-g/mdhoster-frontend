import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { user, token, handleLogin, handleLogout } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  

  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   navigate("/");
  // };
  // const handleLogout = () => {
  //   localStorage.removeItem("userName");
  //   localStorage.removeItem("userToken");
  //   navigate("/");
  //   window.location.reload();
  // };
useEffect(()=>{

setUserName(user);

},[user])

  useEffect(()=>{

  },[userName])
  // useEffect(() => {
  //   // let userName = localStorage.getItem("userName");
  //   // setUser(userName);
  //   // window.location.reload();
  // }, [user]);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between mb-10">
      <h1 className="text-2xl font-bold">Md Hoster</h1>
      {userName && (
        <div className="flex ">
          <h1 className=" flex text-xl font-bold mr-4 text-center items-center ">
            Hey {userName}
          </h1>

          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      )}

      {!userName && (
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
