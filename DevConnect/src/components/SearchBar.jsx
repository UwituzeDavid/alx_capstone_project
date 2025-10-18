import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate(`/profile/${username}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="Search GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded-l-md w-64 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
