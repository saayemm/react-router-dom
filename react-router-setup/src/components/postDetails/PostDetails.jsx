import { useLoaderData, useNavigate } from "react-router-dom"

export default function PostDetails() {
    const post = useLoaderData()

    const Navigate = useNavigate()
    const {id, title, body} = post

    const hundleGoBack = () => {
      Navigate(-1)
    }


  return (
    <div className="bg-green-200 max-w-[600px] m-auto p-6 flex flex-col gap-4 rounded-lg">
        <h3>Id: {id}</h3>
        <h3>Title: {title}</h3>
        <h3>Body: {body}</h3>
        <button onClick={hundleGoBack} className="bg-green-900 text-white px-8 py-2 rounded-lg">Go back to Post page</button>
    </div>
  )
}
