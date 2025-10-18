import React from "react";
import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton.jsx";

function UserCard({ user }) {
  return (
    <div className="border p-4 rounded-md shadow-md max-w-sm mx-auto mt-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="font-bold text-lg">{user.name || user.login}</h2>
          <p className="text-sm text-gray-600">{user.bio}</p>
          <p className="text-sm">
            Followers: {user.followers} | Following: {user.following} | Repos: {user.public_repos}
          </p>
          <Link
            to={`/profile/${user.login}`}
            className="text-blue-500 hover:underline text-sm"
          >
            View Profile
          </Link>
        </div>
      </div>
      <BookmarkButton user={user} />
    </div>
  );
}

export default UserCard;
