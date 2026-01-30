import { useEffect, useMemo, useState } from 'react'
import './App.css'
import blogPosts from './BlogPosts'
import SinglePost from './SinglePost'
import SNSPubsubPost from './SNSPubsubPost'
import TicTacToe from './TTT'
import { Routes, Route, useLocation, Link } from 'react-router'

type Post = {
  title: string
  date: string
  blog: string
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

  const posts = useMemo<Post[]>(() => [...blogPosts].reverse(), [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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
              element={<SNSPubsubPost theme={theme} onToggleTheme={handleToggleTheme} />}
            />
            <Route
              path={'/featured'}
              element={
                <section className="featuredPage">
                  <div className="featuredPageHeader">
                    <h1>Featured Posts</h1>
                    <p>Explore longer-form highlights and projects.</p>
                  </div>
                  <div className="featuredGrid">
                    <Link className="featuredCard" to="/sns-pubsub">
                      <span className="featuredCardTitle">SNS Pub/Sub</span>
                      <span className="featuredCardMeta">Deep dive</span>
                    </Link>
                    <Link className="featuredCard" to="/ttt">
                      <span className="featuredCardTitle">Let&apos;s Play Tic Tac Toe!</span>
                      <span className="featuredCardMeta">Interactive</span>
                    </Link>
                  </div>
                </section>
              }
            />
            <Route
              path={'/ttt'}
              element={
                <section className="featuredPage">
                  <div className="featuredPageHeader">
                    <h1>Let&apos;s Play Tic Tac Toe!</h1>
                    <p>Step right up! Play a game, here! Can you 'Tic' the almighty 'Tac'!? Only 'Toe' can tell.</p>
                  </div>
                  <div className="featuredCard featuredCard--wide">
                    <TicTacToe />
                  </div>
                </section>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
