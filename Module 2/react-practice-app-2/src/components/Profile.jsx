import React, { useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState({
        name: "Joshim",
        age: 26,
        location: "Badda, NotunBazar",
    });

    console.log(user);

    const handleAge = () => {
        const newUser = {...user, age: user.age+1};
        setUser(newUser)
    }
    return (
        <div className='profile'>
            profile
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.location}</h2>
            <button onClick={() => handleAge()}>Increment Age</button>
        </div>
    );
};

export default Profile;