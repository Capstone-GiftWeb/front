import React from "react";
import '../style/ProfileDetails.css';
import { getCookie, removeCookie, setCookie } from "../utils/Cookie";
import axiosInstance from "../..";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { getProducts } from "../utils/Data";
import { setRecentHistory, filterDataByList, deleteRecentHistory, redirectPage } from '../utils/ClickUtils'
import Loading from "./Loading";
import FavoriteProducts from "./FavoriteProducts";

const ProfileDetails = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const setScrollRef = useRef(0);

  const movePage = useNavigate();

  const onClickProduct = (href) => {
    setRecentHistory(href); // 로컬 스토리지에 저장

    const filtered = filterDataByList(data); // 리스트로 데이터 필터링
    setFilteredData(filtered); // 필터링된 데이터 설정

    redirectPage(href); // 클릭한 값을 서버로 전송 > 리다이렉트!
}

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // const response = await axiosInstance.get("/member/me");
        // const name = response.data.name;
        // const email = response.data.email;
        // setCookie("name", name);
        // setCookie("email", email);
      } catch (error) {
        console.log("FailProfile", error);
      }
    };

    fetchProfileData();
  }, []);

// Data.js의 getProducts를 사용하여 데이터를 불러와 useState에 저장
useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        const res = await getProducts();
        if (res) { // res가 undefined인 경우에는 setData를 실행하지 않음
            setData(res.gifts);
        }
        setLoading(false);
    };
    fetchData();
}, []);

useEffect(() => {
    if (data.length > 0) {
        const filtered = filterDataByList(data);
        setFilteredData(filtered);
    }
}, [data])

if (loading) return <Loading loading={loading} />

  const name = getCookie("name");
  const email = getCookie("email");

  const onLogout = () => {
    localStorage.clear('recentProducts');
    removeCookie('name');
    removeCookie('email');
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

    return(
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
                              <p>Name : {name}</p>
                              <p>Email : {email}</p>
                              <button onClick={onLogout}>Logout</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="like">
                <div className='horizontal-box'>
                  <div className='scroll-box' ref={setScrollRef}>
                    <p>Like♥</p>
                    <div className='like-products'>
                      <FavoriteProducts props={data} onClickProduct={onClickProduct} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProfileDetails;