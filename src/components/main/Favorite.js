import React from "react";
import Nav from './Nav';
import Header from "./Header";
import '../style/Favorite.css'

const Favorite = () => {
    return (
        <>
            <div className="content">
                <Nav />
                <div className="favorite-box">
                    <Header/>
                </div>
            </div>
        </>
    )
}

export default Favorite;