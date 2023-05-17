import React from "react";
import '../style/ProfileDetails.css';
import { getCookie, removeCookie, setCookie } from "../utils/Cookie";
import axiosInstance from "../..";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfileDetails = () => {

  const movePage = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        getCookie("name", name);
        getCookie("email", email);
      } catch (error) {
        console.log("FailProfile", error);
      }
    };

    fetchProfileData();
  }, []);

  const name = getCookie("name");
  const email = getCookie("email");

  const onLogout = () => {
    localStorage.clear('recentProducts');
    removeCookie('name');
    removeCookie('email');
    movePage("/");
    const accessToken = getCookie("accessToken");
    axiosInstance
      .delete("/auth/logout", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
  
      })
      .catch((error) => {
        console.log(error);
        console.log("Fail");
      });
  };

    return(
        <div className="content-pf">
            <div className="title">
                <h2>Profile</h2>
            </div>
            <div className="information">
              <div className="profile">
                  <div className="user">
                      <div className="pic">
                          <img src="img/profile.png" alt="User" />
                      </div>
                      <div className="detailbox">
                          <div className="detail">
                              <p>Name : {name} </p>
                              <p>Email : {email}</p>
                              <button onClick={onLogout}>Logout</button>
                          </div>
                      </div>
                  </div>
              </div>
            <div className="like">
              <p>Like♥</p>
            </div>
        </div>
      </div>
    )
}

export default ProfileDetails;