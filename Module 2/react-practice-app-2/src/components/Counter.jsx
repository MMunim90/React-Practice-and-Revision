import React, { useState } from 'react';
import Count from './Count';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    // console.log(counter, "Counter from counter components");
    
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
        </div>
    );
};

export default Counter;