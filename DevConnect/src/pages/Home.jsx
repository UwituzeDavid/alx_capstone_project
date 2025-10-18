import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-20 text-center bg-blue-800 h-screen">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to DevConnect</h1>
      <p className="text-lg text-white mb-6">
        Connecting developers and recruiters to build a smarter planet.
      </p>
      <Link
        to="/directory"
        className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Explore Directory
      </Link>
    </div>
  );
}

export default Home;
