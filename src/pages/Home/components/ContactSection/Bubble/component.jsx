import React, { useEffect, useState } from 'react';

export default function Bubble(props) {
    const [radius, setRadius] = useState(50);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    useEffect(()=>{
        setRadius(getRndInteger(20, 80))
    }, []);

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return(
        <div className='random-bubble' style={{width: props.radius, height: props.radius, top: props.top, left: props.left}}></div>
    )
}