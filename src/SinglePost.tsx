import { useState, useEffect } from "react"
import blogPosts from "./BlogPosts"
import TicTacToe from "./TTT"
// import { useParams } from "react-router"

interface Props {
  date: String
}

interface Post {
    title: String,
    date: String,
    blog: String,
}

export default function SinglePost (props: Props) {
    // const { date } = useParams()
    const [singlePost, setSinglePost] = useState<Post>()

    useEffect(()=> {
        setSinglePost(
          blogPosts.filter((el)=>el.date == props.date)[0]
        )
      }, [props.date])

      if(!singlePost)return

    return (<><div className="blogPost">
                <h1>{singlePost.title}</h1> <br/>
                {singlePost.date}  <br/>
                {singlePost.blog}
                <TicTacToe/>
            </div>
            </>)
    }
