import React from "react";
import Nav from './Nav';
import ProfileDetails from "./ProfileDetails";
import '../style/Profile.css'

const Profile = () => {
    return (
        <>
            <div className="profile-body">
                <div className="content">
                    <Nav />
                    <div className="profile-box">
                        <ProfileDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;