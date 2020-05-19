import React, { useState, useEffect } from "react";
import axios from "axios";
import ListPost from "./ListPost";

function Search() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, users]);

  return (
    <div className="container">
      <h1 className="text-center">Search</h1>
      <div>
        <div className="input-wrapper text-center">
          <input
            type="text"
            placeholder="Type a name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ol className="list-wrapper">
            {filteredUsers.map((country, idx) => (
              <ListPost key={idx} {...country} />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default Search;
