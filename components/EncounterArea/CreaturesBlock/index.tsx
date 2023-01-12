import { useState } from 'react'
import styled from 'styled-components'
import {
  SubtitleST,
} from '../../sharedstyles'

const MonstersBlock = ({ numberPlayers = 4 }) => {

    const [prizeXp, setPrizeXp] = useState(0);
    const [encounterXp, setEncounterXp] = useState(0);

    return(
        <MonstersWrapperST>
            <SubtitleST>Encounter</SubtitleST>
            <XPEncounterBlockST>
                <div>
                    <XPExncounterLabelST>Total XP</XPExncounterLabelST>
                    {prizeXp} XP
                </div>
                <div>
                    <XPExncounterLabelST>XP/Player</XPExncounterLabelST>
                    {prizeXp/numberPlayers} XP
                </div>
                <div>
                    <XPExncounterLabelST>Encounter XP</XPExncounterLabelST>
                    {encounterXp} XP
                </div>
            </XPEncounterBlockST>
        </MonstersWrapperST>
    )
}

const MonstersWrapperST = styled.div`
    border-top: ${({theme}) => theme.colors.gray1} 2px solid;
    padding: 0.5rem 0;
`

const XPEncounterBlockST = styled.div`
  display:flex;
  justify-content: space-between;
  font-size:0.8rem;
  text-align:center;
`

const XPExncounterLabelST = styled.div`
  font-weight:bold;
`

export default MonstersBlock;