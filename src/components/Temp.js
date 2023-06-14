import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Temp = () => {
  //   let { code } = useParams();

  // let [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(code);
    const getUser = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      console.log(code);
      axios
        .get(`https://mdhoster-backend.onrender.com/token/${code}`)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("userName", response.data.user);
          localStorage.setItem("userToken", response.data.token);

          navigate("/user");
          //setUser(response.data);
        })
        .catch((error) => console.log(error));
    };
    getUser();
  }, []);

  return (
    <div className="flex justify-center  items-center">
      <svg
        className=" bg-gray-700  rounded-2xl flex justify-center items-center animate-ping h-5 w-5 mr-8 ..."
        viewBox="0 0 24 24"
      ></svg>

      <svg
        className=" bg-gray-700  rounded-2xl flex justify-center items-center animate-ping h-5 w-5 mr-8 ..."
        viewBox="0 0 24 24"
      ></svg>

      <svg
        className=" bg-gray-700  rounded-2xl flex justify-center items-center animate-ping h-5 w-5 mr-8 ..."
        viewBox="0 0 24 24"
      ></svg>

      <svg
        className=" bg-gray-700  rounded-2xl flex justify-center items-center animate-ping h-5 w-5 mr-8 ..."
        viewBox="0 0 24 24"
      ></svg>
    </div>
  );
};

export default Temp;
