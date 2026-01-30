import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface Props {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function SNSPubsubPost({ theme, onToggleTheme }: Props) {
    
    const [markdownContent, setMarkdownContent] = useState('');
    
      useEffect(() => {
        fetch('/sns-pubsub.md')
          .then(response => response.text())
          .then(text => setMarkdownContent(text));
      }, []);
      console.log("markdownContent:", markdownContent);
    return (
    <article className="snsPost featuredPage">
      <div className="snsPostHeader">
        <Link className="snsBackLink" to="/">Back to posts</Link>
        <button
          className={`themeToggle ${theme === 'light' ? 'themeToggle--dark' : 'themeToggle--light'}`}
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
}