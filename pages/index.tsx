import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CreaturesBlock from '../components/EncounterArea/CreaturesBlock'
import PlayersBlock from '../components/PlayersArea/PlayersBlock'
import XpBlock from '../components/PlayersArea/XpBlock'
import PlayerStats from '../components/PlayersArea/PlayerStats'
import {
  ContainerST,
  ContentST,
  MainST,
  SideBarST
} from '../components/sharedstyles'
import { listenerCount } from 'process'
import CreaturesList from '../components/CreaturesListArea/CreaturesList'
import { CreaturesData } from '../components/data'
import CreatureItem from '../components/CreaturesListArea/CreatureItem'

const player = {
  name:'',lvl:1, initiative:0,xp:25
}

export default function Home() {

  // players data
  const [party, setParty] = useState([{...player}]);
  const [partyXp, setPartyXp] = useState(25);

  // monsters on the enconter data
  const [encounter, setEncounter] = useState([]);
  const creatureData = CreaturesData;

  useEffect( ()=>{
    //console.log(party);
    partyXpSum(party)
  }, [party] )

  // general functions
  //convert character lvl on equivalent XP amount
  function lvlToXP ( lvl ){
    let xpNumber;

    if(lvl == 1){ xpNumber = 25 }
    else if (lvl == 2){ xpNumber = 50 }
    else if (lvl == 3){ xpNumber = 75 }
    else if (lvl == 4){ xpNumber = 125 }
    else if (lvl == 5){ xpNumber = 250 }
    else if (lvl == 6){ xpNumber = 300 }
    else if (lvl == 7){ xpNumber = 350 }
    else if (lvl == 8){ xpNumber = 450 }
    else if (lvl == 9){ xpNumber = 550 }
    else if (lvl == 10){ xpNumber = 600 }
    else if (lvl == 11){ xpNumber = 800 }
    else if (lvl == 12){ xpNumber = 1000 }
    else if (lvl == 13){ xpNumber = 1100 }
    else if (lvl == 14){ xpNumber = 1250 }
    else if (lvl == 15){ xpNumber = 1400 }
    else if (lvl == 16){ xpNumber = 1600 }
    else if (lvl == 17){ xpNumber = 2000 }
    else if (lvl == 18){ xpNumber = 2100 }
    else if (lvl == 19){ xpNumber = 2400 }
    else if (lvl == 20){ xpNumber = 2800 }
    else{}

    return xpNumber;
  }

  function sumElem (list){
    let totalSum = 0;
    for(let e=0; e < list.length; e++){
      totalSum += list[e];
    }

    return totalSum;
  }

  function partyXpSum( playerList ){
    let partyXp = [];
    for (let p=0; p < playerList.length; p++){
      partyXp[p] = lvlToXP(playerList[p].lvl);
      //console.log(partyXp);
    }
    
    setPartyXp(sumElem(partyXp));
  }

  //add and remove players from the party functions
  function addNumberPlayers (){
    setParty([...party, {...player}]);
  }

  function removeNumberPlayers (){
    if(party.length>1){
      setParty( party.slice(0,-1) );
    }
  }
  // change input value on each player
  function changeValue (index, event, party){
    let newPlayer = {...party[index], [event.target.name]:event.target.value, xp:lvlToXP(event.target.value)}; //define new party.player.lvl
    const newParty = [...party];
    newParty.splice(index,1,newPlayer); //change party element by the new one

    // set party hook to the party with the new changes
    setParty(newParty);
  }

  // add creature from the list to the encouter block
  function addCreatureToEncounter(encounter, item){
    // identify if there exist already the same creature in the encounter (by it's ID)
    let indexOfCreature = encounter.findIndex( (element) => element.id == item.id );
    if( indexOfCreature == -1 ){
      //add new creature
      let newEncounterCreature = item;
      newEncounterCreature.amount = 1;
      setEncounter([...encounter, newEncounterCreature]);
    } else{
      // increase amount of the creature
      let updatedCreature = {...encounter[indexOfCreature]};
      updatedCreature.amount ++;
      let newEncounter = [...encounter];
      newEncounter.splice(indexOfCreature,1,updatedCreature);

      setEncounter(newEncounter);
    }

    

  }

  return (
    <div>
      <Head>
        <title>Dungeon Beholder Encounter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainST>
        <ContainerST>
          <SideBarST>
            <PlayersBlock actionAdd={addNumberPlayers} actionRemove={removeNumberPlayers}>
              <XpBlock xpTotal={partyXp} />
              {party.map((item, index)=>
                <PlayerStats key={index} playerStats={item} changeValue={(event) => changeValue(index, event, party)} />
              )}
            </PlayersBlock>
            <CreaturesBlock />
            {
              encounter.map((item, index) => 
                <p key={index}>{item.name} <span>({item.amount})</span></p>
              )
            }
          </SideBarST>
          <ContentST>
            <CreaturesList>
              { creatureData.map((item, index) =>
                  <CreatureItem
                      key={index}
                      creatureAttributes={item}
                      action={() => addCreatureToEncounter(encounter, item)}
                  />
                )
              }
            </CreaturesList>
          </ContentST>
        </ContainerST>
      </MainST>
    </div>
  )
}
