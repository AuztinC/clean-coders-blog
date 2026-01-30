import { useEffect, useMemo, useState } from 'react'
import './App.css'
import blogPosts from './BlogPosts'
import SinglePost from './SinglePost'
import SNSPubsubPost from './SNSPubsubPost'
import { Routes, Route, useLocation } from 'react-router'

type Post = {
  title: string
  date: string
  blog: string
}

function App() {
  const [singlePostDate, setSinglePostDate] = useState<string>('')
  const location = useLocation()
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'dark' ? 'dark' : 'light'
  })

  const posts = useMemo<Post[]>(() => [...blogPosts].reverse(), [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="layout">
      {location.pathname !== '/sns-pubsub' ? (
        <aside className="sidebar">
          <div className="sidebarHeader">
            <span className="brandTitle">Austin Cripe's Blog</span>
            <button
              className={`themeToggle ${theme === 'light' ? 'themeToggle--dark' : 'themeToggle--light'}`}
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </button>
          </div>
          <ul className="postList">
            {posts.map((post) => (
              <li key={post.date}>
                <button
                  className={`postLink ${singlePostDate === post.date ? 'isActive' : ''}`}
                  onClick={() => setSinglePostDate(post.date)}
                >
                  <span className="postTitle">{post.title}</span>
                  <span className="postMeta">{post.date}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      <main className="content">
        {singlePostDate ? (
          <SinglePost date={singlePostDate} />
        ) : location.pathname !== '/sns-pubsub' ? (
          <div className="emptyState">Select a post to read</div>
        ) : null}

        <Routes>
          <Route path={'/sns-pubsub'} element={<SNSPubsubPost />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
