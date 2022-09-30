import React from 'react';

import pic from './../assets/icons/cristiano-pinto-2lWGQ02DGL8-unsplash.jpg';
// import './../Styles/Carousel.css'
import './../Styles/Home.css';
const Carousel = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: `url(${pic})` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold uppercase">available food item banner</h1>
                        <p class="mb-5">Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/take-away.</p>
                        <button class="btn btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;