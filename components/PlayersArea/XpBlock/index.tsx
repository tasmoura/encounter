import styled from 'styled-components'

const XpBlock = ({ xpTotal }) => {

    return(
      <XPBlockST>
        <div>
          <XPLabelST>Easy:</XPLabelST>
          <div>{xpTotal} XP</div>
        </div>
        <div>
          <XPLabelST>Medium:</XPLabelST>
          <div>{xpTotal*2} XP</div>
        </div>
        <div>
          <XPLabelST>Hard:</XPLabelST>
          <div>{xpTotal*3} XP</div>
        </div>
        <div>
          <XPLabelST>Deadly:</XPLabelST>
          <div>{xpTotal*4} XP</div>
        </div>
      </XPBlockST>
    )
  }

const XPBlockST = styled.div`
  display:flex;
  justify-content: space-between;
  font-size:0.8rem;
  text-align:center;
`

const XPLabelST = styled.div`
  font-weight:bold;
`


  export default XpBlock;