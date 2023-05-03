import React from "react";
import '../style/ProfileDetails.css';

const ProfileDetails = () => {

    // axios({
    //     method: "POST",
    //     url: "https://b034-223-194-154-22.ngrok-free.app/auth/signup",
    //     headers:{
    //         "Content-Type":"application/json",
    //     },
    //     data : {
    //       name: inputName,
    //       email: inputEmail,
    //       age: inputAge,
    //       gender: inputGender,
    //       password: inputPw,
    //     },
    // })
    //   .then((res) => {
    //     alert("변경 완료")
    //   })
    //   .catch(
    //     console.log("Fail")
    //   );

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
                            <p>username</p>
                            <p>Email : </p>
                            <p>username@naver.com</p>

                            <button>Edit Profile</button>
                            <button>change password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;