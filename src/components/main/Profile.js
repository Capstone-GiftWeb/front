import React from "react";
import Nav from './Nav';
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
    return (
        <>
            <div className="content">
                <Nav />
                <div className="profile-box">
                    <ProfileDetails/>
                </div>
            </div>
        </>
    )
}

export default Profile;