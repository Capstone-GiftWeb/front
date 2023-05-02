import React from "react";
import '../style/ProfileDetails.css';

const ProfileDetails = () => {

    return(
        <div className="profileBox">
            <h2>Profile</h2>
            <div className="user">
                <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
            </div>
            <div className="information">
                <p>Name</p>
                <p>Email</p>
                <p>Phonenumber</p>

                <button>EditProfile</button>
            </div>
        </div>
    )
}

export default ProfileDetails;