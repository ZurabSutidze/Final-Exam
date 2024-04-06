import React, { useRef } from 'react';
import '../../App.css';

export default function UseRef() {
    const ref = useRef();

    const handleClick = () => {
        ref.current.style.background = "blue";
        ref.current.style.height = "50px";
        ref.current.style.width = "50px";
    };

    return (
        <div>
            <div ref={ref} style={{ background: "red", width: 100, height: 100 }}> </div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
