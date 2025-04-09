import './App.css'
import {useState} from 'react'
import blogPosts from './BlogPosts'
import SinglePost from './SinglePost'
import { Routes, Route, Link } from 'react-router'

function App() {

 // const [postDate, setPostDate] = useState<String>()



  return (<>
      {blogPosts ?
          <ul>
            {blogPosts.map((post, idx)=>(
              <li key={idx}>
                <Link to={`/${post.date}`}>{post.date}</Link>
              </li>
            ))}
          </ul>
     : null}

       <Routes>
        <Route path={"/:date"} element={<SinglePost/>} />
       </Routes>
   </>)
}

export default App
