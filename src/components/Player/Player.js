import React, { useState } from 'react'
import 
function Player({name, xp=0, level=0}) {
    const [playerName, setPlayerName] = useState(name);
    const [playerXP, setPlayerXP] = useState(xp);
    const [playerLevel, setPlayerLevel] = useState(level);

  return (
    <div className="player-display">
        Player
    </div>
  )
}


export default Player