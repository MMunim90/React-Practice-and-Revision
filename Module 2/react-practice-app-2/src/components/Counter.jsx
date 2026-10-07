import React, { useState } from 'react';
import Count from './Count';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter, "Counter from counter components");
    return (
        <div className='counter'>
            <Count counter = {counter} setCounter={setCounter}/>
            <button onClick={() => setCounter(counter+1)} className='increment-btn'>Increment</button>
        </div>
    );
};

export default Counter;