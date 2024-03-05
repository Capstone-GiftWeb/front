import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../style/Nav.css';

const Nav = () => {
  const movePage = useNavigate();
  const location = useLocation();
  const goToHome = () => movePage('/Home');
  const goToCategory = () => movePage('/Category');
  const goToProfile = () => movePage('/Profile');
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
      </div>
    </>
  );
};

export default Nav;