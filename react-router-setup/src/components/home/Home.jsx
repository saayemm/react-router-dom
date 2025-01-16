import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navBar/Navbar"

export default function Home() {
  return (
    <div>
        <div className="flex justify-between items-center">
          <h2>Router</h2>
          <span>Profile</span>
        </div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
