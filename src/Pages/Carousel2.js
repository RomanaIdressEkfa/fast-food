
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import pic1 from './../assets/Images/club-sandwich-panini-with-ham-cheese-tomato-herbs_2829-19928.jpg'
import pic2 from './../assets/Images/lobster-thermidor-grilled-lobster-stuffed-with-cream-cheese-served-with-lemonboston-lobster-w_1205-9400.jpg'
import pic3 from './../assets/Images/lobster-roll.jpg'
import pic4 from './../assets/Images/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg'
import pic5 from './../assets/Images/mix-pizza-chicken-tomato-bell-pepper-olives-mushroom-side-view_141793-3167.jpg'
import pic6 from './../assets/Images/burger2.jpg'
import pic7 from './../assets/Images/fried-fish-carp-fresh-vegetable-salad-flat-lay-top-view_2829-19953.jpg'
import pic8 from './../assets/Images/tasty-appetizing-classic-italian-spaghetti-pasta-with-tomato-sauce-cheese-parmesan-basil-plate-ingredients-cooking-pasta-white-marble-table-flat-lay-top-view-copy-space_1150-45811.jpg'
import pic9 from './../assets/Images/mixed-pizza-with-various-ingridients_140725-3790 (1).jpg'
import pic10 from './../assets/Images/meet.jpg';
import './../App.css';
const Carousel2 = () => {
    return (
        <div className='m-5 border-x-8 p-6 border-red-500' id='list'>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={pic4} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic2} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic3} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic1} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic5} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={pic10} class="w-fluid" />
                </SwiperSlide >
                <SwiperSlide>
                    <img src={pic6} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic7} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic8} class="w-fluid" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src={pic9} class="w-fluid" />
                </SwiperSlide >

            </Swiper >
        </div>
    );
};

export default Carousel2;