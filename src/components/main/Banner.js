import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css"
import "../style/Banner.css"

const Banner = () => {

    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const items = [
        {src: "img/banner3.png"},
        {src: "img/banner.png"},
        {src: "img/banner4.png"},
        {src: "img/banner2.png"}
    ];

    return(
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <Swiper 
                    style={{height:'230px', width:'1200px'}}
                    className="banner"
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    autoplay={{delay: 2000}}
                >
                    {items.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                            <img src={item.src} alt="banner img" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Banner;