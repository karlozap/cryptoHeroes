import contract from 'truffle-contract'
import UsersContract from '@contracts/CryptoHeroes.json'

const CryptoHeroes = {

  contract: null,

  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(UsersContract)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  create: function (pseudo) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.createFirstCharacter(
        pseudo,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  exists: function (address) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.exists.call(
        address,
        {from: window.web3.eth.accounts[0]}
      ).then(exists => {
        resolve(exists)
      }).catch(err => {
        reject(err)
      })
    })
  },

  attackEnemy: function (pId, eId) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.attack(
        pId, eId,
        {
          from: window.web3.eth.accounts[0],
          gas: 3000000,
          gasPrice: 0,
          value: window.web3.toWei('0.001', 'ether')
        }
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  updateCharacterSkills: function (index, ts, str, dex, agi, con, cha, inte) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.upgradeCharacterSkills(
        index, ts, str, dex, agi, con, cha, inte,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getCharacterIdByDna: function (dna) {
    let self = this

    var id = self.instance.getCharacterByDna(dna)
    return id
  },

  checkCharacterIndexByAddress: function (address) {
    let self = this

    var id = self.instance.getCharacterIdByOwner(address)
    return id
  },

  characterID: function (address) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.getCharacterIdByOwner.call(
        address,
        {from: window.web3.eth.accounts[0]}
      ).then(id => {
        resolve(id)
      }).catch(err => {
        reject(err)
      })
    })
  },

  countCharacters: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.charactersCount.call(
        {from: window.web3.eth.accounts[0]}
      ).then(count => {
        resolve(count)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getAllCharacters: function (count) {
    let self = this

    var newData = []
    for (let i = 0; i < count; i++) {
      const element = self.instance.characters(i)
      var character = {
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
        lossCount: element[12].toNumber()
      }
      console.log(character)
      newData.push(character)
    }
    return newData
  },

  characterDetails: function (id) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.characters.call(
        id,
        {from: window.web3.eth.accounts[0]}
      ).then(character => {
        var c = {
          name: character[0].toString(),
          dna: character[1].toString(),
          level: character[2].toNumber(),
          readyTime: character[3].toString(),

          strength: character[4].toNumber(),
          dexterity: character[5].toNumber(),
          agility: character[6].toNumber(),
          constitution: character[7].toNumber(),
          charisma: character[8].toNumber(),
          intelligence: character[9].toNumber(),
          trainingPoints: character[10].toNumber(),

          winCount: character[11].toNumber(),
          lossCount: character[12].toNumber()
        }

        resolve(c)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default CryptoHeroes
