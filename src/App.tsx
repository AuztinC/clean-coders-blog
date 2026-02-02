import { useEffect, useState } from 'react'
import './App.css'
import SinglePost from './SinglePost'
import SNSPubsubPost from './SNSPubsubPost'
import { Routes, Route, useLocation, Link } from 'react-router'
import Featured from './Featured'
import FeaturedTTT from './FeaturedTTT'
import { parseMarkdown, postsIndex } from './posts'

type Post = {
  title: string
  date: string
  sortKey: string
}

function App() {
  const [singlePostDate, setSinglePostDate] = useState<string>('')
  const location = useLocation()
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'dark' ? 'dark' : 'light'
  })
  const isHome = location.pathname === '/'
  const isFeatured = location.pathname === '/featured'

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    let isMounted = true

    const postEntries = Object.entries(postsIndex)
    Promise.all(
      postEntries.map(([dateKey, filename]) =>
        fetch(`/posts/${filename}`)
          .then((res) => res.text())
          .then((text) => {
            const parsed = parseMarkdown(text)
            return {
              title: parsed.title || filename,
              date: dateKey,
              sortKey: filename,
            }
          })
          .catch(() => null)
      )
    ).then((results) => {
      if (!isMounted) return
      const resolvedPosts = results.filter((post): post is Post => post !== null)
      resolvedPosts.sort((a, b) => a.sortKey.localeCompare(b.sortKey))
      setPosts(resolvedPosts.reverse())
    })

    return () => {
      isMounted = false
    }
  }, [])

  const handleToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className="appShell">
      <header className="navbar">
        <Link className="navBrand" to="/">
          Austin Cripe's Blog
        </Link>
        <nav className="navLinks">
          <Link className={`navLink ${isHome ? 'isActive' : ''}`} to="/">
            Home
          </Link>
          <Link className={`navLink ${isFeatured ? 'isActive' : ''}`} to="/featured">
            Featured Posts
          </Link>
        </nav>
        <button
          className={`themeToggle ${theme === 'light' ? 'themeToggle--dark' : 'themeToggle--light'}`}
          type="button"
          onClick={handleToggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </header>

      <div className={`layout ${isHome ? '' : 'layout--full'}`}>
        {isHome ? (
          <aside className="sidebar">
            <div className="sidebarHeader">
              <span className="brandTitle">Posts</span>
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
          {isHome && singlePostDate ? (
            <SinglePost date={singlePostDate} />
          ) : isHome ? (
            <div className="emptyState">Select a post to read</div>
          ) : null}

          <Routes>
            <Route
              path={'/sns-pubsub'}
              element={<SNSPubsubPost/>}
            />
            <Route
              path={'/featured'}
              element={<Featured />}
            />
            <Route
              path={'/ttt'}
              element={<FeaturedTTT />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
