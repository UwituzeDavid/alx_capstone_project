import Directory from "./pages/Directory"
import Home from "./pages/Home"
import Profile from "./components/Profile"
import { BrowserRouter, Route,Routes } from "react-router-dom"


function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Directory" element={<Directory />} />
          <Route path="/Profile/:username" element={ <Profile />} />
        </Routes>
        
    </BrowserRouter>
      
  )
}

export default App
