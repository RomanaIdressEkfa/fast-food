import React from 'react';
import background from './../assets/Images/pranjall-kumar-sejqj6Eaqe8-unsplash2.jpg';
import './../Styles/Home.css';

const Home = () => {
    return (
        <div class="hero min-h-screen" style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} id='hero'>
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md ">
                    <h1 class="mb-5 text-4xl font-bold uppercase">Fast food to share with friends </h1>
                    <p class="mb-5 ">Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/take-away.</p>
                    <button class="btn btn-secondary mr-3">Food Details</button>
                    <button class="btn btn-active btn-accent ">Order Now</button>

                </div>
            </div>
        </div >
    );
};

export default Home;