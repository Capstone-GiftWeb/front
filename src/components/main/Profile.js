import React from "react";
import Nav from './Nav';
import Header from "./Header";
import '../style/Profile.css'

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