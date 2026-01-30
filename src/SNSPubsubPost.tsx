import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';


export default function SNSPubsubPost() {
    
    const [markdownContent, setMarkdownContent] = useState('');
    
      useEffect(() => {
        fetch('/sns-pubsub.md')
          .then(response => response.text())
          .then(text => setMarkdownContent(text));
      }, []);
    return (
    <article className="snsPost featuredPage">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
}