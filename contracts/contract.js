
export const Web3 = require('web3')

var web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
}

/*
window.addEventListener('load', function() {


	// Load WEB3
	// Check wether it's already injected by something else (like Metamask or Parity Chrome plugin)
	if(typeof web3 !== 'undefined') {
			web3 = new Web3(web3.currentProvider);  

	// Or connect to a node
	} else {
			web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}

	// Check the connection
	if(!web3.isConnected()) {
			console.error("Not connected");

	}
});
*/

//web3.currentProvider.publicConfigStore.on('update', callback);

const abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "characterToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			},
			{
				"name": "_trainingPoints",
				"type": "uint32"
			},
			{
				"name": "_strength",
				"type": "uint32"
			},
			{
				"name": "_dexterity",
				"type": "uint32"
			},
			{
				"name": "_agility",
				"type": "uint32"
			},
			{
				"name": "_constitution",
				"type": "uint32"
			},
			{
				"name": "_charisma",
				"type": "uint32"
			},
			{
				"name": "_intelligence",
				"type": "uint32"
			}
		],
		"name": "upgradeCharacterSkills",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getCharacterIdByOwner",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "characters",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "dna",
				"type": "uint256"
			},
			{
				"name": "level",
				"type": "uint32"
			},
			{
				"name": "readyTime",
				"type": "uint256"
			},
			{
				"name": "strength",
				"type": "uint32"
			},
			{
				"name": "dexterity",
				"type": "uint32"
			},
			{
				"name": "agility",
				"type": "uint32"
			},
			{
				"name": "constitution",
				"type": "uint32"
			},
			{
				"name": "charisma",
				"type": "uint32"
			},
			{
				"name": "intelligence",
				"type": "uint32"
			},
			{
				"name": "trainingPoints",
				"type": "uint32"
			},
			{
				"name": "winCount",
				"type": "uint16"
			},
			{
				"name": "lossCount",
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "charactersCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			}
		],
		"name": "createFirstCharacter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_characterId",
				"type": "uint256"
			},
			{
				"name": "_targetId",
				"type": "uint256"
			}
		],
		"name": "attack",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
];
web3.eth.defaultAccount = web3.eth.accounts[0]
export const contractAddress = '0x4FF62fC3AEA19081bf08E5d4854E7117516bC2ef'

export var ugovor = web3.eth.contract(abi).at(contractAddress)

export var web = web3	




