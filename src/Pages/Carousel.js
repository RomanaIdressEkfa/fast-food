import React from 'react';
import pic1 from './../assets/Images/close-up-burgers-with-pickles_23-2148784498.jpg'
import pic2 from './../assets/Images/alan-hardman-SU1LFoeEUkk-unsplash.jpg'
import pic3 from './../assets/Images/lobster-roll.jpg'
import pic4 from './../assets/Images/whole-italian-pizza-wooden-table-with-ingredients_251318-13.jpg'
import './../Styles/Carousel.css'
const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={pic4} class="w-fluid" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={pic2} class="w-fluid" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={pic3} class="w-fluid" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={pic1} class="w-fluid" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;