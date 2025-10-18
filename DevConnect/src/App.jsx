import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DirectoryPage from "./pages/DirectoryPage";
import Profile from "./components/Profile.jsx";
import BookmarksPanel from "./pages/BookmarksPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/bookmarks" element={<BookmarksPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
