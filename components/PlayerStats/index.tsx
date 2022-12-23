import { useState } from "react";
import styled from 'styled-components'

const PlayerStats = ({ index }) => {

  const [value, setValue] = useState(1);
  
  const changeValue = event => {
    setValue(event.target.value);
  }

  return(
      <PlayerBlocoST>
        <PlayerNameST id={`name-player-${index}`} type="text" placeholder="Name"></PlayerNameST>
        <PlayerLevelST id={`lvl-player-${index}`} type="number" placeholder='level' min="1" max="20" value={value} onChange={changeValue}></PlayerLevelST>
        <PlayerLevelST id={`init-player-${index}`} type="number" placeholder='Init'></PlayerLevelST>
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