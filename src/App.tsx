import { useState, useEffect } from 'react'
import './App.css'
import blogPosts from './BlogPosts'
import SinglePost from './SinglePost'
// import TicTacToe from './TTT'
// import { Routes, Route, Link } from 'react-router'

interface Post {
  title: String,
  date: String,
  blog: String,
  ttt: any
}

function App() {

const [singlePostDate, setSinglePostDate] = useState<String>("")
const [posts, setPosts] = useState<Post[] | any>([])

useEffect(()=>{
  setPosts(blogPosts.reverse())
}, [blogPosts])

  return (<div className='wrapper'>

      {posts ?
        <ul>
          {posts.map((post : any, idx : any)=>(
            <li onClick={()=>setSinglePostDate(post.date)} key={idx}>
              {post.date}
            </li>
          ))}
        </ul>
     : null}

     {singlePostDate ?
        <SinglePost date={singlePostDate}/>
    : null}

       {/* <Routes>
        <Route path={"/:date"} element={<SinglePost/>} />
       </Routes> */}

   </div>)
}

export default App
