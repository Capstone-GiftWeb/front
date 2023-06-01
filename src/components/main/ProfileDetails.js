import React from "react";
import '../style/ProfileDetails.css';
import { getCookie } from "../utils/Cookie";
import axiosInstance from "../..";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { getFavoriteProducts } from "../utils/Data";
import { setRecentHistory, setFilterFavorite } from '../utils/ClickUtils'
import Loading from "./Loading";
import FavoriteProducts from "./FavoriteProducts";

const ProfileDetails = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const setScrollRef = useRef(0);
  const movePage = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // 로그인된 사용자 정보를 가져오는 함수
    const fetchUserInfo = async () => {
      try {
        // 서버에서 회원 정보 가져오기
        const response = await axiosInstance.get('/member/me');

        // 가져온 회원 정보를 상태에 설정
        setUsername(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    };

    fetchUserInfo();
  }, []);

  const onClickProduct = (href) => {
    setRecentHistory(href); // 로컬 스토리지에 저장
  }

  // Data.js의 getProducts를 사용하여 데이터를 불러와 useState에 저장
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await setFilterFavorite();
      if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
        setData(res);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loading loading={loading} />

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
          <div className='scroll-box' ref={setScrollRef}>
            <p>Like♥</p>
            <div className='like-products'>
              <FavoriteProducts props={data} onClickProduct={onClickProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails;