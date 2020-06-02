import React from "react";

export default function ListPost({ users }) {
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id} className="list-item">
          <div>name: {user.name}</div>
          <div>username: {user.username} </div>  
          <div>email: {user.email} </div>  
          <div>address: {user.address.suite}, {user.address.street}, {user.address.city} </div>  
        </li>
      ))}
    </ol>
  );
}
