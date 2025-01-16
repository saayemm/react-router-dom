import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navBar/Navbar"

export default function Home() {
  return (
    <div>
        <h2>Welcome to homepage</h2>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
