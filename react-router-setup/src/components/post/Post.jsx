import { Link } from "react-router-dom"

export default function Post({post}) {
    const {id, title} = post
  return (
    <div className="bg-slate-200 m-2 p-4 flex flex-col gap-4">
        <h2>Title: {title}</h2>
        <h2>Id: {id}</h2>
        <Link className="bg-green-500 text-white px-8 py-2 rounded-lg" to={`/post/${id}`}>Post Details</Link>
    </div>
  )
}
