import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import TicTacToe from "./TTT"
import { parseMarkdown, postsIndex, type Post } from "./posts"
// import { useParams } from "react-router"

interface Props {
  date: String
}

export default function SinglePost (props: Props) {
    // const { date } = useParams()
    const [singlePost, setSinglePost] = useState<Post | null>(null)
    const filename = postsIndex[props.date as string]
    const showTicTacToe = filename === "2025-08-05-lets-play-tic-tac-toe.md"

    useEffect(()=> {
        if (!filename) {
          setSinglePost(null)
          return
        }

        fetch(`/posts/${filename}`)
          .then((res) => res.text())
          .then((text) => setSinglePost(parseMarkdown(text)))
          .catch(() => setSinglePost(null))
      }, [props.date])

      if(!singlePost)return

    return (<><div className="blogPost">
                <h1>{singlePost.title}</h1> <br/>
                {singlePost.date}  <br/>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {singlePost.blog}
                </ReactMarkdown>
                {showTicTacToe ? <TicTacToe/> : null}
            </div>
            </>)
    }
