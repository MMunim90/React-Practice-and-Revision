import React from 'react';

const Greetings = (props) => {
    console.log(props)
    const {greet="Good to see you!!!", name="developer", greet_emoji="✊"} = props;
    const currentYear = new Date().getFullYear();

    return (
        <div className='greetings-card'>
            <h1>{greet}</h1>
            <h1 className='demo'>{greet_emoji}</h1>
            hello, {name}!!!
            <img src="" alt="" />
            <p>I have {200 + 300} taka</p>
            <p>current year is {currentYear}</p>
        </div>
    );
};

export default Greetings;