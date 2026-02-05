import TicTacToe from "./TTT";

export default function FeaturedTTT() {
  return (
    <section className="featuredPage">
      <div className="featuredPageHeader">
        <h1>Let&apos;s Play Tic Tac Toe!</h1>
        <p>Step right up! Play a game, here! Can you 'Tic' the almighty 'Tac'!? Only 'Toe' can tell.</p>
      </div>
      <div className="featuredCard featuredCard--wide">
        <TicTacToe />
      </div>
    </section>
  )
}