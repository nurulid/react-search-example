import React from "react";

export default function SearchInput({ searchValue, setSearchValue }) {
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="input-wrapper text-center">
      <input type="text" placeholder="Type a name" value={searchValue} onChange={handleChange} />
    </div>
  );
}
