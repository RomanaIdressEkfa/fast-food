import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [cards]);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 -mt-12 relative'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;