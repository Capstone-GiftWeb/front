import React from "react";
import Nav from './Nav';
import Header from "./Header";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
    return (
        <>
            <div className="content">
                <Nav />
                <div className="box">
                    <ProfileDetails/>
                </div>
            </div>
        </>
    )
}

export default Profile;