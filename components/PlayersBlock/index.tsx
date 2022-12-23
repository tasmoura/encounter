import { useState } from 'react'
import styled from 'styled-components'
import PlayerStats from '../PlayerStats'
import XpBlock from '../XpBlock'
import {
  ButtonST,
  SubtitleST,
} from '../sharedstyles'

const PlayersBlock = () => {
  //variabeis gerais do componente
  const [numberPlayers, setNumberPlayers] = useState(1);
  const [partyXP, setPartyXP] = useState(25);
  let playerList = [];  // react nodes dos inputs de player
  let playerListLvl = [1];  // lista de LVL dos players
  let playerListXP = [25]; // lista de XP dos players

  function lvlToXP ( lvl ){
    let xpNumber;

    if(lvl == 1){ xpNumber = 25 }
    else if (lvl == 2){ xpNumber = 50 }
    else if (lvl == 3){ xpNumber = 75 }
    else if (lvl == 4){ xpNumber = 125 }
    else if (lvl == 5){ xpNumber = 250 }
    else if (lvl == 6){ xpNumber = 300 }
    else if (lvl == 7){ xpNumber = 350 }
    else if (lvl == 8){ xpNumber = 450 }
    else if (lvl == 9){ xpNumber = 550 }
    else if (lvl == 10){ xpNumber = 600 }
    else if (lvl == 11){ xpNumber = 800 }
    else if (lvl == 12){ xpNumber = 1000 }
    else if (lvl == 13){ xpNumber = 1100 }
    else if (lvl == 14){ xpNumber = 1250 }
    else if (lvl == 15){ xpNumber = 1400 }
    else if (lvl == 16){ xpNumber = 1600 }
    else if (lvl == 17){ xpNumber = 2000 }
    else if (lvl == 18){ xpNumber = 2100 }
    else if (lvl == 19){ xpNumber = 2400 }
    else if (lvl == 20){ xpNumber = 2800 }
    else{}

    return xpNumber;
  }

  function sumElem (list){
    let totalSum = 0;
    for(let e=0; e < list.length; e++){
      totalSum += list[e];
    }

    return totalSum;
  }

  function addNumberPlayers (){
    setNumberPlayers( numberPlayers +1 );

    playerListLvl = [1];
    for(let p=0; p<numberPlayers+1; p++){
      playerListLvl[p] = 1;
      playerListXP[p] = lvlToXP(playerListLvl[p]);
    }

    setPartyXP(sumElem(playerListXP));

    console.log('addNumberPlayer:')
    console.log(playerListLvl)
    console.log(playerListXP)
  }

  function removeNumberPlayers (){
    if(numberPlayers>1){
      setNumberPlayers( numberPlayers -1 )
    }

    playerListLvl = [1];
    for(let p=0; p<numberPlayers-1; p++){
      playerListLvl[p] = 1;
      playerListXP[p] = lvlToXP(playerListLvl[p]);
    }

    setPartyXP(sumElem(playerListXP));

    console.log('removeNumberPlayer:')
    console.log(playerListLvl)
    console.log(playerListXP)
  }

  //lista os inputs dos Players de acordo com o número de players setado
  for(let n=0; n < numberPlayers; n++){
    playerList.push( 
      <PlayerStats index={n} key={n} />
    )
  }

  return (
    <WrapperST>
      <SubtitleST>Players Group</SubtitleST>
      <XpBlock xpTotal={partyXP} />
      {/* renderiza os inputs dos Players listados anteriormente */}
      {playerList}
      <ButtonsWrapper>
        <ButtonST onClick={addNumberPlayers}>+ Add Player</ButtonST>
        <ButtonST onClick={removeNumberPlayers}>- Remove Player</ButtonST>
      </ButtonsWrapper>
    </WrapperST>
  )
}

const WrapperST = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-bottom:1rem;
`

const ButtonsWrapper = styled.div`
  display:flex;
  gap:5px;
  button {
    width: 50%;
    cursor:pointer;
  }
`

export default PlayersBlock;