import React from 'react';
const Card = (props) => {
    const { name, img, des } = props.card;
    return (
        <div className='mx-auto'>
            <div class="card w-80 bg-base-100 border-4 border-red-500 image-full ">
                <figure><img className='' src={img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{des}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;