import React from "react";
import Nav from './Nav';
import Header from "./Header";

const Favorite = () => {
    return (
        <>
            <div className="content">
                <Nav />
                <div className="box">
                    <Header/>
                </div>
            </div>
        </>
    )
}

export default Favorite;