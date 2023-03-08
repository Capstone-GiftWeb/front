import React, { useEffect, useState } from 'react';
import '../style/Nav.css'

const Nav = () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/Home" style={{ textDecoration: "none", color: "black"}}>
                    <img src="img/pageIcon.png" alt="home_logo" />
                </a>
                <a href="/Home" style={{ textDecoration: "none", color: "black"}}>
                    상상부기
                </a>
            </div>
            <div className="header--user">
                <a href='/Profile'>
                    <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
                </a>
            </div>
        </header>
    );
};

export default Nav;