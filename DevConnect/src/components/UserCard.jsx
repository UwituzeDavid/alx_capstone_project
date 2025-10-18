import React from "react";

function UserCard({ user }) {
  return (
    <div className="border p-4 rounded-md shadow-md max-w-sm mx-auto mt-10 flex items-center gap-4">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="font-bold text-lg">{user.name || user.login}</h2>
        <p className="text-sm text-gray-600">{user.bio}</p>
        <p className="text-sm">
          Followers: {user.followers} | Following: {user.following} | Repos: {user.public_repos}
        </p>
        <a
          href={user.html_url}
          target="_blank"
          className="text-blue-500 hover:underline text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default UserCard;
