import styled from 'styled-components'
import {
  ButtonST,
  SubtitleST,
} from '../../sharedstyles'

const PlayersBlock = ({ children, actionAdd, actionRemove }) => {
  
  return (
    <WrapperST>
      <SubtitleST>Players Group</SubtitleST>
      {children}
      <ButtonsWrapper>
        <ButtonST onClick={actionAdd}>+ Add Player</ButtonST>
        <ButtonST onClick={actionRemove}>- Remove Player</ButtonST>
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