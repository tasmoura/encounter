import styled from 'styled-components'
import {
    ButtonST
} from '../../sharedstyles'

const CreaturesItem = ({ creatureAttributes, action }) => {

    return(
        <ListItemST>
            <ListItemRowST>
                <ListItemRowST>
                    <ButtonST onClick={action}>+ Add</ButtonST>
                    <ItemNameST>{creatureAttributes.name}</ItemNameST>
                </ListItemRowST>
                <ListItemRowST>
                    <ItemAttributesST>CR: {creatureAttributes.cr}</ItemAttributesST>
                    <ItemAttributesST>HP: {creatureAttributes.hp}</ItemAttributesST>
                    <ItemAttributesST>AC: {creatureAttributes.ac}</ItemAttributesST>
                </ListItemRowST>
            </ListItemRowST>
            <ListItemRowST>
                <ItemAttributesST>{creatureAttributes.type}</ItemAttributesST>
                <ItemAttributesST>{creatureAttributes.size}</ItemAttributesST>
                <ItemAttributesST>{creatureAttributes.alignment}</ItemAttributesST>
                {creatureAttributes.legendary ? 
                    <ItemAttributesST><strong>Legendary</strong></ItemAttributesST>
                    : null
                }
            </ListItemRowST>
            <ListItemRowST>
                <ItemAttributeEnvironmentListST>
                <strong>Environments:</strong>
                {creatureAttributes.environment.artic ? 
                    <ItemAttributeEnvironmentST>Artic</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.coastal ? 
                    <ItemAttributeEnvironmentST>Coastal</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.desert ? 
                    <ItemAttributeEnvironmentST>Desert</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.forest ? 
                    <ItemAttributeEnvironmentST>Forest</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.grassland ? 
                    <ItemAttributeEnvironmentST>Grassland</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.hill ? 
                    <ItemAttributeEnvironmentST>Hill</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.mountain ? 
                    <ItemAttributeEnvironmentST>Mountain</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.swamp ? 
                    <ItemAttributeEnvironmentST>Swamp</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.underdark ? 
                    <ItemAttributeEnvironmentST>Underdark</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.underwater ? 
                    <ItemAttributeEnvironmentST>Underwater</ItemAttributeEnvironmentST>
                    : null
                }
                {creatureAttributes.environment.urban ? 
                    <ItemAttributeEnvironmentST>Urban</ItemAttributeEnvironmentST>
                    : null
                }
                </ItemAttributeEnvironmentListST>
            </ListItemRowST>
        </ListItemST>
    )
}

const ListItemST = styled.li`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding:0.5rem;
    background-color: ${({theme})=> theme.colors.gray3};
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

const ItemNameST = styled.h3`
    margin:0;
    font-size: 1.25rem;
`

const ItemAttributesST = styled.div`
    font-size: 0.85rem;
`

const ItemAttributeEnvironmentListST = styled.ul`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding:0;
    gap:0.5rem;
    align-items:0;
`

const ItemAttributeEnvironmentST = styled.li`
    font-size: 0.85rem;
    padding-left:0.25rem;
    list-style-type:none;
    border-left: 1px solid ${({theme}) => theme.colors.primary};
    :first-of-type{
        border-left: none;
    }
`

export default CreaturesItem;