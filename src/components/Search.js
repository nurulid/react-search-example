import React, { useState, useEffect } from "react";
// import axios from "axios";
import SearchInput from "./SearchInput";
import ListAllPost from "./ListAllPost";

export default function Search() {
  // console.log(JSON.stringify(users, null, 2));
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicod.com/users")
      .then((res) => res.json())
      .then((dataApi) => setUsers(dataApi))
      .catch((err) => setError("Error woy"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Search</h1>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <ListAllPost users={users} searchValue={searchValue} />
      )}

      {error && <p>{error}</p>}
    </div>
  );
}
