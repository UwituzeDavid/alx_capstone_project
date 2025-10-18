import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import UserCard from "../components/UserCard.jsx";
import RepoList from "../components/RepoList.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function DirectoryPage() {
  const [username, setUsername] = useState("");

  // User fetch
  const { data: user, isLoading: isUserLoading, isError: isUserError, refetch: refetchUser } = useQuery({
    queryKey: ["githubUser", username],
    queryFn: async () => (await axios.get(`https://api.github.com/users/${username}`)).data,
    enabled: !!username, // only fetch if username exists
    retry: false,
  });

  // Repos fetch (first 5)
  const { data: repos, isLoading: isReposLoading, isError: isReposError, refetch: refetchRepos } = useQuery({
    queryKey: ["githubRepos", username],
    queryFn: async () => {
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=updated`);
      return res.data;
    },
    enabled: !!user, // only fetch repos if user exists
  });

  const handleSearch = (name) => {
    if (!name) return;
    setUsername(name);
    refetchUser();
    refetchRepos();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <SearchBar onSearch={handleSearch} />

      {/* User status */}
      {isUserLoading && <p className="text-center mt-6">Loading user...</p>}
      {isUserError && <p className="text-center mt-6 text-red-500">User not found!</p>}

      {/* User info */}
      {user && <UserCard user={user} />}

      {/* Repos status */}
      {isReposLoading && <p className="text-center mt-4">Loading repositories...</p>}
      {isReposError && <p className="text-center mt-4 text-red-500">Failed to load repositories</p>}

      {/* Repo preview */}
      {repos && <RepoList repos={repos} />}
    </div>
  );
}

export default DirectoryPage;
