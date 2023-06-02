import React from "react";
import '../style/ProfileDetails.css';
import { getCookie } from "../utils/Cookie";
import axiosInstance from "../..";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { getFavoriteProducts } from "../utils/Data";
import { setRecentHistory, setFilterFavorite, setClickFavorite } from '../utils/ClickUtils'
import Loading from "./Loading";
import FavoriteProducts from "./FavoriteProducts";

const ProfileDetails = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [favoriteData, setFavoriteData] = useState([]);
  const setScrollRef = useRef(0);
  const movePage = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const onClickProduct = (href) => {
    setRecentHistory(href); // 로컬 스토리지에 저장
  }

  const onClickFavorite = async (product) => {
    const list = await setClickFavorite(product);
    setFavoriteData(list);
  }

  const onClose = () => {
    setModalOn(!modalOn);
  }

  const onLogout = () => {
    localStorage.clear('recentProducts');
    movePage("/");
    const accessToken = getCookie("accessToken");
    axiosInstance
      .delete("/auth/logout", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {

      })
      .catch((error) => {
        console.log(error);
        console.log("Fail");
      });
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get('/member/me');

        setUsername(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfo();
  }, []);

  // Data.js의 getProducts를 사용하여 데이터를 불러와 useState에 저장
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await setFilterFavorite();
      if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
        setData(res);
      }

      const FavoriteRes = await getFavoriteProducts();
      if (FavoriteRes) { setFavoriteData(FavoriteRes); }

      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await setFilterFavorite();
      if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
        setData(res);
      }
    }
    fetchData();
  },[favoriteData])



  if (loading) return <Loading loading={loading} />

  return (
    <div className="content-pf">
      <div className="color"></div>
      <div className="information">
        <div className="profile">
          <div className="user">
            <div className="pic">
              <img src="img/profile.png" alt="User" />
            </div>
            <div className="detailbox">
              <div className="detail">
                <p>Name : {username}</p>
                <p>Email : {email}</p>
                <button onClick={onLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="like">
          <p>Like♥</p>
          <div className='scroll-box' ref={setScrollRef}>
            <div className='like-products'>
              <FavoriteProducts props={data} onClickProduct={onClickProduct} onClickFavorite={onClickFavorite} favoriteList={favoriteData} onClose={onClose} modalOn={modalOn}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails;