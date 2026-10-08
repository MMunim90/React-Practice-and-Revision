import React, { useEffect, useState } from 'react';
import Count from './Count';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    // console.log(counter, "Counter from counter components");

    useEffect(() => {
        document.title = `Counter ${counter}`
        localStorage.setItem("useEffect", "useEffect Triggered!!!");
        console.log("console from useEffect");
        console.log(window.innerWidth);

        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        })
    })
    console.log("console from outside");
    
    const counterHandler = () => {
        setCounter((prevCounter) => prevCounter+1); // updater function
        setCounter((prevCounter) => prevCounter+1);
        setCounter((prevCounter) => prevCounter+1);
        // console.log(counter, "Counter");
    }
    // console.log(counter, "Counter");
    return (
        <div className='counter'>
            <Count counter = {counter} setCounter={setCounter}/>
            <button onClick={() => counterHandler()} className='increment-btn'>Increment</button>

            <h3>Monitor Width: {width}</h3>
            <h3>Monitor height: {height}</h3>
        </div>
    );
};

export default Counter;