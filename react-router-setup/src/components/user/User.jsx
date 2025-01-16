import { useLoaderData } from "react-router-dom"
import Usr from "../usr/Usr"


export default function User() {
    const users = useLoaderData()
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
       
        {
            users.map((usr, idx)=><Usr usr={usr} key={idx}></Usr>)
        }
    </div>
  )
}
