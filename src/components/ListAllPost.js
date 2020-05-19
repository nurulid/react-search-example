import React from "react";
import ListPost from "./ListPost";

export default function ListAllPost({ users, searchValue }) {
  const filteredNames = users.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const hasNames = filteredNames.length > 0;

  return (
    <>
      {hasNames ? (
        <ListPost users={filteredNames} />
      ) : (
        <p>
          Nothing match, sorry <span> 😟</span>
        </p>
      )}
    </>
  );
}
