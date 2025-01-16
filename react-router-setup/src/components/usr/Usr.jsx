import { Link } from "react-router-dom"

export default function Usr({usr}) {
    const {name, email, id} = usr
  return (
    <div className="bg-slate-200 m-2 p-4 flex flex-col gap-4">
        <p className="text-xl font-semibold">User:{name}</p>
        <p>Email:{email}</p>
        <Link className="bg-green-500 text-white px-8 py-2 rounded-lg" to={`/user/${id}`}>Show Details</Link>
    </div>
    
  )
}
