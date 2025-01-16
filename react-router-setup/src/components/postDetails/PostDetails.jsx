import { useLoaderData } from "react-router-dom"


export default function PostDetails() {
    const post = useLoaderData()
    const {id, title, body} = post
  return (
    <div className="bg-green-200 max-w-[600px] m-auto p-4 flex flex-col items-start">
        <h3>Id: {id}</h3>
        <h3>Title: {title}</h3>
        <h3>Body: {body}</h3>
    </div>
  )
}
