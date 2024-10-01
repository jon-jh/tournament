// the html for holding the list of matches
import Match from "./Match"
import matchData from "../data/matchData";

function MatchList() {
  return (

    <section className="PlayerList MatchList">
      <h1>Match list</h1>

      {/* matches go here */}

      <Match />
    </section>

  )
}
export default MatchList;