import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import LoadingModal from './LoadingModal';
//import '../style/lobby.css'

const Home = () => {
    const [modal, setModalShow] = useState(false);


    
    return (
        <>
            <Nav/>
        </>
    )
}

export default Home;