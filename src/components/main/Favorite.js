import React from "react";
import Nav from './Nav';
import Header from "./Header";
import Banner from "./Banner";

const Favorite = () => {
    return (
        <>
            <div className="content">
                <Nav />
                <div className="box">
                    <Header/>
                    <Banner/>
                </div>
            </div>
        </>
    )
}

export default Favorite;