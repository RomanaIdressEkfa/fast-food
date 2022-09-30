import React from 'react';
import { Link } from 'react-daisyui';

const Item = (props) => {
    const { name, img, des } = props.service;
    return (
        <div className='p-5 mx-auto shadow-lg rounded-2xl w-10/12'>
            <img className='w-80 h-64 mx-auto' src={img} alt="" />
            <h1 className='text-red-400 font-bold text-xl'>{name}</h1>
            <p className='text-neutral-content'>{des}</p>
            <Link className='text-red-400'>Read More</Link>
        </div>
    );
};

export default Item;