import { useState } from 'react'
import styled from 'styled-components'
import { CreaturesData } from '../data'
import {
    ButtonST,
  SubtitleST,
  SearchInputST,
  SearchWrapper
} from '../sharedstyles'

const CreaturesList = () => {

    const creatures = CreaturesData;

    return(
        <ListContainerST>
            <ListItemRowST>
                <SubtitleST>Creatures List</SubtitleST>
                <SearchWrapper>
                    <SearchInputST placeholder='Search' />
                </SearchWrapper>
            </ListItemRowST>
            <ListST>
                {   creatures.map((item, index) =>
                        <ListItemST key={index}>
                            <ListItemRowST>
                                <ListItemRowST>
                                    <ButtonST>+ Add</ButtonST>
                                    <ItemNameST>{item.name}</ItemNameST>
                                </ListItemRowST>
                                <ListItemRowST>
                                    <ItemAttributesST>CR: {item.cr}</ItemAttributesST>
                                    <ItemAttributesST>HP: {item.hp}</ItemAttributesST>
                                    <ItemAttributesST>AC: {item.ac}</ItemAttributesST>
                                </ListItemRowST>
                            </ListItemRowST>
                            <ListItemRowST>
                                <ItemAttributesST>{item.size}</ItemAttributesST>
                                <ItemAttributesST>{item.alignment}</ItemAttributesST>
                                {item.legendary ? 
                                    <ItemAttributesST><strong>Legendary</strong></ItemAttributesST>
                                    : null
                                }
                            </ListItemRowST>
                            <ListItemRowST>
                                <ItemAttributeEnvironmentListST>
                                <strong>Environments:</strong>
                                {item.environment.artic ? 
                                    <ItemAttributeEnvironmentST>Artic</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.coastal ? 
                                    <ItemAttributeEnvironmentST>Coastal</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.desert ? 
                                    <ItemAttributeEnvironmentST>Desert</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.forest ? 
                                    <ItemAttributeEnvironmentST>Forest</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.grassland ? 
                                    <ItemAttributeEnvironmentST>Grassland</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.hill ? 
                                    <ItemAttributeEnvironmentST>Hill</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.mountain ? 
                                    <ItemAttributeEnvironmentST>Mountain</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.swamp ? 
                                    <ItemAttributeEnvironmentST>Swamp</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.underdark ? 
                                    <ItemAttributeEnvironmentST>Underdark</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.underwater ? 
                                    <ItemAttributeEnvironmentST>Underwater</ItemAttributeEnvironmentST>
                                    : null
                                }
                                {item.environment.urban ? 
                                    <ItemAttributeEnvironmentST>Urban</ItemAttributeEnvironmentST>
                                    : null
                                }
                                </ItemAttributeEnvironmentListST>
                            </ListItemRowST>
                        </ListItemST>
                    )
                }
                
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

export default CreaturesList;