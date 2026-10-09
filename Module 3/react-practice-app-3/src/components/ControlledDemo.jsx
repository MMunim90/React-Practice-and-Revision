import React, { useState } from 'react';

const ControlledDemo = () => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        alert(`Name '${name}' is submitted`);
    }

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Your Name'/>
            <button onClick={() => handleSubmit()}>Submit</button>

            <p>Your Name is: {name}</p>
        </div>
    );
};

export default ControlledDemo;