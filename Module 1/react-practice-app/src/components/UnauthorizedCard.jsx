import React from 'react';

const UnauthorizedCard = ({name="developer"}) => {
    return (
        <div className='unauthorized-message-card'>
            <h2>{name} didn't logged in yet!!!.</h2>
        </div>
    );
};

export default UnauthorizedCard;