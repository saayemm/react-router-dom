
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Posts from './components/posts/Posts.jsx'
import PostDetails from './components/postDetails/PostDetails.jsx'

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/user',
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User></User>
      },
      {
        path: '/posts',
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
