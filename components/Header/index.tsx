import styled from 'styled-components'
import {
  TitleST
} from '../sharedstyles'

const Header = () => {
  return (
    <HeaderST>
        <TitleST>Dungeon Beholder Encounter</TitleST>
    </HeaderST>
  )
}

const HeaderST = styled.header`
    width:100%;
    height:60px;
    margin: 0;
    padding: 0.5rem;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
`

export default Header;