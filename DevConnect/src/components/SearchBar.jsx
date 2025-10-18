import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onSearch(inputValue.trim()); // call parent function
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6 gap-2"
    >
      <input
        type="text"
        placeholder="Search GitHub username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 rounded-l-md w-64 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
