import React, { useState, useEffect } from "react";

function BookmarkButton({ user }) {
  const [bookmarked, setBookmarked] = useState(false);

  // Check if user is already bookmarked on mount
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isBookmarked = bookmarks.some((u) => u.id === user.id);
    setBookmarked(isBookmarked);
  }, [user.id]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let updatedBookmarks;

    if (bookmarked) {
      // Remove from bookmarks
      updatedBookmarks = bookmarks.filter((u) => u.id !== user.id);
    } else {
      // Add to bookmarks
      updatedBookmarks = [...bookmarks, user];
    }

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`px-3 py-1 rounded ${
        bookmarked ? "bg-red-500 text-white" : "bg-gray-200"
      }`}
    >
      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}

export default BookmarkButton;
