import { Link } from "react-router";

export default function Featured() {
    return (
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
    )
}