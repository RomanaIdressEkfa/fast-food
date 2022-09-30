import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='relative -mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    items.slice(0, 6).map(service => <Item key={service.id}
                        service={service} >
                    </Item>)
                }
            </div>
        </div >
    );
};

export default Items;