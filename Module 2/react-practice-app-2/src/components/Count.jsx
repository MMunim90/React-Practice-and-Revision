import React from 'react';

const Count = ({counter, setCounter}) => {
    // console.log(counter, "Counter from count components");
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter+100)} className='increment-btn'>Update</button>
        </div>
    );
};

export default Count;