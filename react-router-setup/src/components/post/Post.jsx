import { Link, Navigate, useNavigate } from "react-router-dom"

export default function Post({post}) {
    const {id, title} = post

    const Navigate = useNavigate()

    const hundleShowDetails = () => {
      Navigate(`/post/${id}`)
    }
  return (
    <div className="bg-slate-200 m-2 p-4 flex flex-col gap-4 rounded-lg">
        <h2>Title: {title}</h2>
        <h2>Id: {id}</h2>
        <Link className="bg-green-500 text-white px-8 py-2 rounded-lg" to={`/post/${id}`}>Post Details</Link>
        <button onClick={hundleShowDetails} className="bg-green-900 text-white px-8 py-2 rounded-lg">Click to see Details</button>
    </div>
  )
}
