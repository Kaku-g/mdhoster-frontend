import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [url, setUrl] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) {
    //   navigate("/user");
    // }
    console.log(user);
    const signIn = async () => {
      axios
        .get("https://mdhoster-backend.onrender.com/login")
        .then((response) => {
          // console.log(response.data);
          setUrl(response.data);
        });
    };
    signIn();
  }, []);

  return (
    <div className="flex pt-10  justify-center">
      <a href={url}>
        <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
          Sign in/up with Github
        </button>
      </a>
    </div>
  );
};

export default MainPage;
