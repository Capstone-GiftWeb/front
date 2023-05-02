import React from "react";
import Nav from './Nav';
import Header from "./Header";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
    return (
        <>
            <div className="profile-content">
                <Nav />
                <div className="profile-box">
                    <Header/>
                </div>
            </div>
        </>
    )
}

export default Profile;