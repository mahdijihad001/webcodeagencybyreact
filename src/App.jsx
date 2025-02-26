import { Outlet } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen" >
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App