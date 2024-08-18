import slider1 from '../../assets/1.png'
import slider2 from '../../assets/2.png'
import slider3 from '../../assets/3.png'
import slider4 from '../../assets/4.png'
import slider5 from '../../assets/5.png'
import slider6 from '../../assets/6.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules'
const Slider = () => {
    return (
        <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src={slider1}
                            alt="Burger" /></SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slider2}
                            alt="Burger" /></SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slider3}
                            alt="Burger" /></SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slider4}
                            alt="Burger" /></SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slider5}
                            alt="Burger" /></SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={slider6}
                            alt="Burger" /></SwiperSlide>

                </Swiper>

        </div>
    );
};

export default Slider;