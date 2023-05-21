import React, { useEffect, useState } from 'react';
import '../style/Nav.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const movePage = useNavigate();
  const location = useLocation();
  const goToHome = () => movePage('/Home');
  const goToCategory = () => movePage('/Category');
  const goToFavorite = () => movePage('/Favorite');
  const goToProfile = () => movePage('/Profile');
  const goToStart = () => movePage('/');
  const [isNavActive, setIsNavActive] = useState('Home');

  useEffect(() => {
    setIsNavActive(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className='sidebar'>
        <div className='menu'>
          <i className='fa fa-bars fa-3x' aria-hidden='true'></i>
          <nav>
            <p
              className={isNavActive === '/Home' ? 'navClick' : ''}
              onClick={goToHome}>
              Main
            </p>
            <p
              className={isNavActive === '/Category' ? 'navClick' : ''}
              onClick={goToCategory}>
              Category
            </p>
            <p
              className={isNavActive === '/Profile' ? 'navClick' : ''}
              onClick={goToProfile}>
              Profile
            </p>
          </nav>
        </div>
        <button onClick={goToStart}>
          <i className='fa-solid fa-chevron-left fa-1x'></i>
        </button>
      </div>
    </>
  );
};

export default Nav;