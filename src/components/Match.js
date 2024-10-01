// the html for the "match box's"

function Match(props){
  return (
    <article className="Match">
  <h1>{props.players[0]}<span>vs</span>{props.players[1]}</h1>
  {/* To be shown when there is a winner */}<h2>{props.winner} is the winner by {props.scoreDiff}!</h2>
  {/* To be shown when there is no winner */}<h2>No winners yet!</h2>
</article>
  )
};

export default Match;

