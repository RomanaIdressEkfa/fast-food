import React from 'react';
import img from './../assets/Images/burger2.jpg';
import './../Styles/Hero.css'

const Hero = () => {
    return (
        <div id='about'>
            <div class="bg-neutral">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='md:w-7/12 lg:w-7/12 h-full' src={img} />

                    <div className='text-right text-white'>
                        <h1 class="text-5xl font-bold">Welcome Our Fast Food Ghor</h1>
                        <p class="py-6 text-xl">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. </p>
                        <button class="btn btn-secondary mr-3">Food Details</button>
                        <button class="btn btn-active btn-accent ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;