import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserCard from "../components/UserCard.jsx";
import RepoList from "../components/RepoList.jsx";

function Profile() {
  const { username } = useParams();

  // Fetch user profile
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery({
    queryKey: ["githubUser", username],      // ✅ key
    queryFn: async () => {                   // ✅ function
      const res = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return res.data;
    },
    retry: false,
  });

  // Fetch user repos
  const {
    data: repos,
    isLoading: isReposLoading,
    isError: isReposError,
  } = useQuery({
    queryKey: ["githubRepos", username],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return res.data;
    },
    enabled: !!user, // only fetch after user exists
  });

  if (isUserLoading) return <p className="text-center mt-10">Loading user...</p>;
  if (isUserError)
    return <p className="text-center mt-10 text-red-500">User not found!</p>;

  return (
    <div>
      <UserCard user={user} />
      {isReposLoading ? (
        <p className="text-center mt-4">Loading repositories...</p>
      ) : isReposError ? (
        <p className="text-center mt-4 text-red-500">
          Failed to load repositories
        </p>
      ) : (
        <RepoList repos={repos} />
      )}
    </div>
  );
}

export default Profile;
