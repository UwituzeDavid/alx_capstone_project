import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import UserCard from "../components/UserCard.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function DirectoryPage() {
  const [username, setUsername] = useState("");

  // Fetch GitHub user when username is set
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ["githubUser", username],
    queryFn: async () => {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      return res.data;
    },
    enabled: !!username, // only fetch when username exists
    retry: false,
  });

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <SearchBar value={username} setValue={setUsername} />

      {isLoading && <p className="text-center mt-6">Loading...</p>}
      {isError && <p className="text-center mt-6 text-red-500">User not found!</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default DirectoryPage;
