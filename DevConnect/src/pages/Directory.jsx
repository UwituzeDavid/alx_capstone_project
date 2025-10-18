import { Link } from "react-router-dom";
function Directory() {
  return ( <>
  <div className="pt-50 text-center bg-blue-800 h-screen">
    <h1 className="text-4xl font-bold mb-4 ">Welcome to DevConnect</h1>
        <p className="text-lg text-white mb-6">Connecting developers and recruiters to build a smarter planet.</p>
      <Link to="/Directory" >
      <a href="#" className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-700">Explore Directory</a>

      </Link>
            </div>
  
  </> );
}

export default Directory;