import { useState, useEffect } from "react"
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
                {singlePost.blog.split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph.split("\n").map((line, lineIndex, lines) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < lines.length - 1 ? <br/> : null}
                      </span>
                    ))}
                  </p>
                ))}
                {showTicTacToe ? <TicTacToe/> : null}
            </div>
            </>)
    }
