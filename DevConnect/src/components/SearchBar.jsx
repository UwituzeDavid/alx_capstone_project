import React from "react";

function SearchBar({ value, setValue }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search GitHub username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded-l-md w-64 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
