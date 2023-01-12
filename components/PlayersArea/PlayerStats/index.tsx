import { useState } from "react";
import styled from 'styled-components'

const PlayerStats = ({ playerStats, changeValue }) => {

  return(
      <PlayerBlocoST>
        <PlayerNameST name='name' type="text" placeholder="Name" value={playerStats.name} onChange={changeValue}></PlayerNameST>
        <PlayerLevelST name='lvl' type="number" placeholder='level' min="1" max="20" value={playerStats.lvl} onChange={changeValue}></PlayerLevelST>
        <PlayerLevelST name='initiative' type="number" placeholder='Init' value={playerStats.initiative} onChange={changeValue}></PlayerLevelST>
      </PlayerBlocoST>
    )
  }

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

export default PlayerStats;