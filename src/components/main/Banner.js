import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";

const Banner = () => {

    SwiperCore.use([Navigation, Pagination, Autoplay]);

    return(
        <div>
            <Swiper 
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 2000}}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;