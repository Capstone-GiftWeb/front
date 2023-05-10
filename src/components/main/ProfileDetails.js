import React from "react";
import '../style/ProfileDetails.css';
import { getCookie, setCookie } from "../utils/Cookie";
import axiosInstance from "../..";
import { useHref, useNavigate } from "react-router-dom";

const ProfileDetails = () => {

    axiosInstance({
        method: "GET",
        url: "/member/me",
        headers:{
            "Content-Type":"application/json",
        },
        data : {
        },
    })
      .then((res) => {
            const name = res.data['name'];
            const email = res.data['email'];
            setCookie("name", `${name}`);
            setCookie("email", `${email}`);
      })
      .catch(
        console.log("FailProfile")
      );

    const name = getCookie("name");
    const email = getCookie("email");

    const movePage = useNavigate();
    const goToHome = movePage("/")

    const onEdit = () => {
        
    }

    const onLogout = () => {
        const accessToken = getCookie("accessToken");
        axiosInstance.delete("/auth/logout",{
            accessToken: accessToken
        })
        .then(response => {
            goToHome();
        })
        .catch((e)=>{
            console.log(e);
            console.log("Fail");
        });
    }

    return(
        <div className="content-pf">
            <div className="title">
                <h2>Profile</h2>
            </div>

            <div className="profile">
                <div className="information">
                    <div className="pic">
                        <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
                    </div>
                    <div className="detailbox">
                        <div className="detail">
                            <p>Name : </p>
                            <p> {name} </p>
                            <p>Email : </p>
                            <p> {email}</p>

                            {/* <button onClick={onEdit}>Edit Profile</button> */}
                            <button onClick={onLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;