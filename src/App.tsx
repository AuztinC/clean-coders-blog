import './App.css'
import blogPosts from './BlogPosts'

function App() {

  return (
    <>
    {blogPosts ? 
    <ul>
      {blogPosts.map((post, idx)=>(
        <li key={idx}>
          <span>{post.title} </span>
          <br />
          <span>{post.date} </span>
          <br />
          <span>{post.blog} </span>
        </li>
      ))}
    </ul>
       : null}
    </>
  )
}

export default App
