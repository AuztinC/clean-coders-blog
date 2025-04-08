import { useState, useEffect } from "react"
import blogPosts from "./BlogPosts"
import { useParams } from "react-router"

interface Post {
    title: String,
    date: String,
    blog: String,
}

export default function SinglePost () {
    const { date } = useParams()
    const [singlePost, setSinglePost] = useState<Post>()

    useEffect(()=> {
        console.log(typeof date)
        setSinglePost(
          blogPosts.filter((el)=>el.date == date)[0]
        )
      }, [date])

      if(!singlePost)return

    return (<div className="blogPost">
                {singlePost.title} <br/>
                {singlePost.date}  <br/>
                {singlePost.blog}
            </div>)
    }
