import React from 'react';
import UserCard from './UserCard';

const SelectedUsers = ({selectedUsers}) => {
    // console.log(selectedUsers, "selected user from selectedUser component")
    return (
        <div className='selected-users-parent'>
            <h2>Selected Users: </h2>

            <div className='selected-user'>
                {
                    selectedUsers.map((user, index) => {
                        return <UserCard user={user} key={index}/>
                    })
                }
            </div>
        </div>
    );
};

export default SelectedUsers;