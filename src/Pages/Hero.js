import React from 'react';
import img from './../assets/Images/burger2.jpg';
import './../Styles/Hero.css'

const Hero = () => {
    return (
        <div>
            <div class="bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-7/12 h-full' src={img} />
                    <div className='text-right'>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-secondary mr-3">Food Details</button>
                        <button class="btn btn-active btn-accent ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;