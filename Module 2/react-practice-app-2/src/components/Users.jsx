import React, { useEffect, useState } from "react";
import SelectedUsers from "./SelectedUsers";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="users">
      <h2>Users: </h2>

      <SelectedUsers selectedUsers={selectedUsers}/>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="user-parent">
          {users.map((user, index) => {
            return (
              <UserCard user={user} key={index} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
