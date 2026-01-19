import { useState, useEffect } from 'react'
import './App.css'
import blogPosts from './BlogPosts'
import SinglePost from './SinglePost'
// import TicTacToe from './TTT'
import SNSPubsubPost from './SNSPubsubPost'
import { Routes, Route, useLocation } from 'react-router'

interface Post {
  title: String,
  date: String,
  blog: String,
  ttt: any
}

function App() {

const [singlePostDate, setSinglePostDate] = useState<String>("")
const [posts, setPosts] = useState<Post[] | any>([])
const location = useLocation()
console.log("location:", location.pathname);

useEffect(()=>{
  setPosts(blogPosts.reverse())
}, [blogPosts])

  return (<div className='wrapper'>

      {posts && location.pathname !== "/sns-pubsub" ?
        <ul>
          {posts.map((post : any, idx : any)=>(
            <li onClick={()=>setSinglePostDate(post.date)} key={idx}>
              {post.title}
            </li>
          ))}
        </ul>
     : null}

     {singlePostDate ?
        <SinglePost date={singlePostDate}/>
    : null}

       <Routes>
        <Route path={"/sns-pubsub"} element={<SNSPubsubPost/>} />
       </Routes>

   </div>)
}

export default App
