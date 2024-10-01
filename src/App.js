import './App.css';
import PlayerList from "./components/PlayerList"
import MatchList from "./components/MatchList"

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches
        <span>: Where coding and tournaments find their match!</span>
      </h1>

      {/* the playerlist and match list both go here. */}

      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
