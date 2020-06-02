import React from "react";

const ListPost = (props) => {
  const { name, username, email } = props;
  return (
    <li className="list-item">
      <div>
        <div>name: {name}</div>
        <div>username: {username}</div>
        <div>email: {email}</div>
      </div>
    </li>
  );
};

export default ListPost;