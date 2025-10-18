import React from "react";

function RepoList({ repos }) {
  if (!repos || repos.length === 0)
    return <p className="text-center mt-4 text-gray-500">No repositories found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-6 grid gap-4">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="border p-4 rounded-md shadow hover:shadow-lg transition"
        >
          <h3 className="font-bold text-lg">{repo.name}</h3>
          <p className="text-sm text-gray-600">{repo.description}</p>
          <p className="text-xs text-gray-500 mt-1">
            ⭐ {repo.stargazers_count} | 📝 {repo.language || "N/A"}
          </p>
          <a
            href={repo.html_url}
            target="_blank"
            className="text-blue-500 hover:underline text-sm"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
