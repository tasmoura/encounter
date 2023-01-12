import styled from 'styled-components'
import {
  SubtitleST,
  SearchInputST,
  SearchWrapper
} from '../../sharedstyles'

const CreaturesList = ({children}) => {

    return(
        <ListContainerST>
            <ListItemRowST>
                <SubtitleST>Creatures List</SubtitleST>
                <SearchWrapper>
                    <SearchInputST placeholder='Search' />
                </SearchWrapper>
            </ListItemRowST>
            <ListST>
                {children}           
            </ListST>
        </ListContainerST>
    )
}

const ListContainerST = styled.div`
    width:100%;
`

const ListST = styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    height: calc(100vh - 130px);
    overflow-y:auto;
`

const ListItemRowST = styled.div`
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom:0.5rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.white};
    :first-of-type{
        justify-content:space-between;
    }
    :last-of-type{
        border-bottom:none;
        gap: 0.5rem;
    }
    div{
        padding:0;
    }
`

export default CreaturesList;