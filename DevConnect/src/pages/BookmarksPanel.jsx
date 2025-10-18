import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function BookmarksPanel() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  if (bookmarks.length === 0)
    return <p className="text-center mt-10 text-gray-500">No bookmarks yet.</p>;

  return (
    <div className="mt-6 grid gap-4">
      {bookmarks.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default BookmarksPanel;
