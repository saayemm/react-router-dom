import { useLoaderData } from "react-router-dom"
import Post from "../post/Post"


export default function Posts() {
    const posts = useLoaderData()
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {
        posts.map((post, idx)=><Post key={idx} post={post}></Post>)
        }
    </div>
    
  )
}
