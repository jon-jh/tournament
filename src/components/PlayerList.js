// This is the html that will hold the list of all the players.

import Player from "./Player"
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";


function PlayerList() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className='PlayerList'>
      <h1>Current players</h1>

      {/* players go here */}
      <Player />
      
    </section>
  );
};

export default PlayerList;