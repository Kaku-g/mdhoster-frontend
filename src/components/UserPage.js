import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "./LoadingIcon";
import Cards from "./Cards";
import RepoCards from "./RepoCards";
import Input from "./Input";

const UserPage = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState("");
  const [path, setPath] = useState("/");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleRepoInput = (e) => {
    setRepo(e.target.value);
  };

  const handlePathInput = (e) => {
    setPath(e.target.value);
  };

  const saveRepoData = async () => {
    setLoading(true);

    if (user && token) {
      if (repo && path) {
        axios
          .get(
            `https://mdhoster-backend.onrender.com/user/${user}/${token}/${repo}${path}`
          )
          .then((response) => {
           // console.log(response.data);

            window.location.reload();
            navigate("/user");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("please enter repo and path");
      }
    } else {
      alert("please login");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("userName");
    const token = localStorage.getItem("userToken");
    if (token) {
      setToken(token);
    }
    if (data) {
      setUser(data);
     // console.log(data);

      const getUserRepo = async () => {
        axios
          .get(`https://mdhoster-backend.onrender.com/user/${data}`)
          .then((response) => {
            if (!(response.data == "null")) {
              setData(response.data);
              //console.log(response.data);
            }
          });
      };

      getUserRepo();
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center text-center  ">
            {data && <RepoCards data={data} user={user} />}
          </div>

          <div className="flex flex-col mr-10">
            <Input
              handlePathInput={handlePathInput}
              handleRepoInput={handleRepoInput}
              saveRepoData={saveRepoData}
            />
            {loading && (
              <div className="flex justify-center">
                <LoadingIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
