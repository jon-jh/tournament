// the html for holding the list of matches
import Match from "./Match"
import matchData from "../data/matchData";

function MatchList(props) {

  const oneMatch = matchData[0]

  return (

    <section className="PlayerList MatchList">
      <h1>Match list</h1>

      {/* matches go here */}
      <Match players = {oneMatch.players} winner = {oneMatch.winner} scoreDiff = {oneMatch.scoreDifference}/>
      </section>

  )
}
export default MatchList;