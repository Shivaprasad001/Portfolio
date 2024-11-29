import React from 'react';

export default function Capsule(props) {
    return(
        <div className='capsule' style={{backgroundColor: `${props.bgColor ? props.bgColor : '#939393'}`}}>
            {props.name}
        </div>
    )
}