import {ugovor} from '../contracts/contract'


export function getCharactersCount() {
  var res = ugovor.charactersCount().toNumber()
  return res
}

export function getCharacterByOwnerAddress(_address) {
  var id = ugovor.getCharacterIdByOwner(_address)

  res = getCharacterById(id)

  return res
}



export function getCharacterById(_id) {
  const element = ugovor.characters(_id);

    var character= {
      name: element[0].toString(),
      dna: element[1].toString(),
      level: element[2].toNumber(),
      readyTime: element[3].toString(),
      
      strength: element[4].toNumber(),
      dexterity: element[5].toNumber(),
      agility: element[6].toNumber(),
      constitution: element[7].toNumber(),
      charisma: element[8].toNumber(),
      intelligence: element[9].toNumber(),
      trainingPoints: element[10].toNumber(),

      winCount: element[11].toNumber(),
      lossCount: element[12].toNumber(),
    }

    return character
}

export function getAllCharacters(_id) {

  var count = getCharactersCount()
  var newData = []
  for (let i = 0; i < count; i++) {
    const element = ugovor.characters(i);
    if(i == _id) continue
    var character= {
      name: element[0].toString(),
      dna: element[1].toString(),
      level: element[2].toNumber(),
      readyTime: element[3].toString(),
      
      strength: element[4].toNumber(),
      dexterity: element[5].toNumber(),
      agility: element[6].toNumber(),
      constitution: element[7].toNumber(),
      charisma: element[8].toNumber(),
      intelligence: element[9].toNumber(),
      trainingPoints: element[10].toNumber(),

      winCount: element[11].toNumber(),
      lossCount: element[12].toNumber(),
    }
    console.log(character)
    newData.push(character)
  }
  return newData
}
