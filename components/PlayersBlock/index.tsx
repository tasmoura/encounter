import { useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import {
  ButtonST
} from '../sharedstyles'



const PlayersBlock = () => {
  //variabeis gerais do componente
  const [numberPlayers, setNumberPlayers] = useState(1);
  const [partyXP, setPartyXP] = useState(0);
  let playerList = [];
  let playerListXP = [];

  function addNumberPlayers (){
    setNumberPlayers( numberPlayers +1 )
  }

  function removeNumberPlayers (){
    if(numberPlayers>1){
      setNumberPlayers( numberPlayers -1 )
    }
  }

  //componente de input de cada player
  const PlayerBloco = ({ index }) => {

    const [value, setValue] = useState(1);
    // atualiza o XP do grupo
    const changeValue = event => {
      setValue(event.target.value);
      playerListXP[index] = parseInt(event.target.value);

      console.log(playerListXP);

      let XP = [];

      for(let v=0; v < playerListXP.length; v++){
        if(playerListXP[v] == 1){ XP[v] = 25 }
        else if (playerListXP[v] == 2){ XP[v] = 50 }
        else if (playerListXP[v] == 3){ XP[v] = 75 }
        else if (playerListXP[v] == 4){ XP[v] = 125 }
        else if (playerListXP[v] == 5){ XP[v] = 250 }
        else if (playerListXP[v] == 6){ XP[v] = 300 }
        else if (playerListXP[v] == 7){ XP[v] = 350 }
        else if (playerListXP[v] == 8){ XP[v] = 450 }
        else if (playerListXP[v] == 9){ XP[v] = 550 }
        else if (playerListXP[v] == 10){ XP[v] = 600 }
        else if (playerListXP[v] == 11){ XP[v] = 800 }
        else if (playerListXP[v] == 12){ XP[v] = 1000 }
        else if (playerListXP[v] == 13){ XP[v] = 1100 }
        else if (playerListXP[v] == 14){ XP[v] = 1250 }
        else if (playerListXP[v] == 15){ XP[v] = 1400 }
        else if (playerListXP[v] == 16){ XP[v] = 1600 }
        else if (playerListXP[v] == 17){ XP[v] = 2000 }
        else if (playerListXP[v] == 18){ XP[v] = 2100 }
        else if (playerListXP[v] == 19){ XP[v] = 2400 }
        else if (playerListXP[v] == 20){ XP[v] = 2800 }
        else{}
      }

      let totalXP = 0;
      for(let s=0; s < XP.length; s++){
        totalXP += XP[s];
      }
      
      console.log('XP: ' + XP.join());
      console.log('totalXP: ' + totalXP);

      /* setPartyXP(totalXP); */
    }

    return(
      <PlayerBlocoST>
        <PlayerNameST id={`name-player-${index}`} type="text" placeholder="Name"></PlayerNameST>
        <PlayerLevelST id={`lvl-player-${index}`} type="number" placeholder='level' min="1" max="20" value={value} onChange={changeValue}></PlayerLevelST>
        <PlayerLevelST id={`init-player-${index}`} type="number" placeholder='Init'></PlayerLevelST>
      </PlayerBlocoST>
    )
  }

  //lista os inputs dos Players de acordo com o número de players setado
  for(let n=0; n < numberPlayers; n++){
    playerList.push( 
      <PlayerBloco index={n} key={n} />
    )
  }

  return (
    <WrapperST>
      <XPBlock>
        <div>
          <XPLabelST>Easy:</XPLabelST>
          <div>{partyXP} XP</div>
        </div>
        <div>
          <XPLabelST>Medium:</XPLabelST>
          <div>{partyXP*2} XP</div>
        </div>
        <div>
          <XPLabelST>Hard:</XPLabelST>
          <div>{partyXP*3} XP</div>
        </div>
        <div>
          <XPLabelST>Deadly:</XPLabelST>
          <div>{partyXP*4} XP</div>
        </div>
      </XPBlock>
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
`

const PlayerBlocoST = styled.div`
  display:flex;
  gap:5px;
  align-items: center;
  box-sizing:border-box;
  input {
    padding: 0.5rem;
    border-radius:0.5rem;
    border: ${({theme}) => theme.colors.gray2} 1px solid;
    :focus{
      border: ${({theme}) => theme.colors.gray1} 2px solid;
      outline:none;
    }
  }
`

const PlayerNameST = styled.input`
  width:52%;
`

const PlayerLevelST = styled.input`
  width:24%;
`

const ButtonsWrapper = styled.div`
  display:flex;
  gap:5px;
  button {
    width: 50%;
    cursor:pointer;
  }
`

const XPBlock = styled.div`
  display:flex;
  justify-content: space-between;
  font-size:0.8rem;
  text-align:center;
`

const XPLabelST = styled.div`
  font-weight:bold;
`

export default PlayersBlock;