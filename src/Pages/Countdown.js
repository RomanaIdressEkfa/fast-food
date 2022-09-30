import React, { useEffect, useState } from 'react';
import { Countdown } from 'react-daisyui';
const CountDown = () => {
    const [value, setValue] = useState(20)
    const [min, setMin] = useState(2);
    const [hour, setHour] = useState(10);
    const [day, setDay] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? value : v - 1))
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    if (value === 0) {
        setMin(min - 1)
        setValue(60)
    }

    if (min === 0) {
        setHour(hour - 1)
        setMin(60)
    }

    if (hour === 0) {
        setDay(day - 1)
        setHour(24)
    }
    return (
        <div className='w-11/12 h-72 mx-auto my-20 bg-slate-300 py-3 rounded-br-3xl rounded-tl-3xl -mt-32 relative  ' >
            <h1 className='text-center my-5 text-4xl font-bold uppercase'>Our new Foods<span className='text-error'> coming soon</span></h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto justify-center  p-9 m-8">
                <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={day} />
                    days
                </div>
                <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={hour} />
                    hours
                </div>
                <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={min} />
                    min
                </div>
                <div className="flex flex-col p-4 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={value} />
                    sec
                </div>
            </div>
        </div>
    );
};

export default CountDown;