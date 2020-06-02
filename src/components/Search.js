import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ListAllPost from "./ListAllPost";

export default function Search() {
  // console.log(JSON.stringify(users, null, 2));
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      ); 
 
      setUsers(result.data);
    };
 
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Search</h1>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListAllPost users={users} searchValue={searchValue} />
    </div>
  );
}
