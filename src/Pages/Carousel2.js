// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import pic1 from './../assets/Images/close-up-burgers-with-pickles_23-2148784498.jpg'
// import pic2 from './../assets/Images/alan-hardman-SU1LFoeEUkk-unsplash.jpg'
// import pic3 from './../assets/Images/lobster-roll.jpg'
// import pic4 from './../assets/Images/whole-italian-pizza-wooden-table-with-ingredients_251318-13.jpg'
// // import './../Styles/Carousel.css'
// const Carousel2 = () => {
//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };
//     return (
//         <div>
//             <Carousel responsive={responsive} className="max-w-full mx-auto">
//                 <div class="carousel w-full">
//                     <div id="item1" class="carousel-item w-full">
//                         <img src={pic4} class="w-full" />
//                     </div>
//                     <div id="item2" class="carousel-item w-full">
//                         <img src={pic2} class="w-full" />
//                     </div>
//                     <div id="item3" class="carousel-item w-full">
//                         <img src={pic3} class="w-full" />
//                     </div>
//                     <div id="item4" class="carousel-item w-full">
//                         <img src={pic1} class="w-full" />
//                     </div>

//                 </div>
//                 <div class="flex justify-center w-full py-2 gap-2">
//                     <a href="#item1" class="btn btn-xs">1</a>
//                     <a href="#item2" class="btn btn-xs">2</a>
//                     <a href="#item3" class="btn btn-xs">3</a>
//                     <a href="#item4" class="btn btn-xs">4</a>
//                 </div>
//             </Carousel>;
//         </div>
//     );
// };

// export default Carousel2;
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
import pic10 from './../assets/Images/meet.jpg'
const Carousel2 = () => {
    return (
        <div className='m-5 border-x-8 p-6 border-red-500'>

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