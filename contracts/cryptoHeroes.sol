pragma solidity ^0.4.25;
import .ownable.sol;

contract CryptoHeroes is Ownable{
    
     CORE 
    
    
    uint idDigits = 16;
    uint idModulus = 10  idDigits;
    uint cooldownTime = 1 days;
    uint public charactersCount = 0;
    
    struct Character{
        base
        string name;
        uint dna;
        uint32 level;
        uint readyTime;
        skills
        uint32 strength;
        uint32 dexterity;
        uint32 agility;
        uint32 constitution;
        uint32 charisma;
        uint32 intelligence;
        training points
        uint32 trainingPoints;
        
        stats
        uint16 winCount;
        uint16 lossCount;
        
    }
    

    Character[] public characters;
    
    mapping (uint = address) public characterToOwner;
    mapping (address = uint) ownerCharacterCount;
    
    function _createCharacter(string  _name,  uint  _dna) internal {
        uint id = characters.push(Character(_name, _dna, 1, uint32(now + cooldownTime), 5, 5, 5, 5, 5, 5, 5, 0, 0)) - 1;
        characterToOwner[id] = msg.sender;
        ownerCharacterCount[msg.sender]++;
        charactersCount++;
    }
    
    function _generateRandomId(string _str) private view returns (uint){
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % idModulus;
    } 
    
    function createFirstCharacter(string _name) external {
        require(ownerCharacterCount[msg.sender] == 0);
        uint randId = _generateRandomId(_name);
        randId = randId - randId%100;
        _createCharacter(_name, randId);
    }
    
    
     TRIGGERS 
    
    function _triggerCooldown(Character storage _character) internal {
        _character.readyTime = uint32(now + cooldownTime);
    }
    
    function _isReady(Character storage _character) internal view returns (bool) {
        return (_character.readyTime = now);
    }
    
     HELPERS 
    
    modifier onlyOwnerOf(uint _characterId) {
        require(msg.sender == characterToOwner[_characterId]);
        _;
    }
    
    
    function getCharacterIdByOwner(address _owner) external view returns (uint){
        uint result = 0;
        for(uint i= 0; i characters.length; i++){
            if(characterToOwner[i] == _owner){
                result = i;
                break;
            }
        }
        return result;
    }
    
    function upgradeCharacterSkills(uint _characterId, 
                                    uint32 _trainingPoints, 
                                    uint32 _strength, 
                                    uint32 _dexterity, 
                                    uint32 _agility, 
                                    uint32 _constitution, 
                                    uint32 _charisma, 
                                    uint32 _intelligence) external {
                                        
        characters[_characterId].trainingPoints = _trainingPoints;
        characters[_characterId].strength = _strength;
        characters[_characterId].dexterity = _dexterity;
        characters[_characterId].agility = _agility;
        characters[_characterId].constitution = _constitution;
        characters[_characterId].charisma = _charisma;
        characters[_characterId].intelligence = _intelligence;
    }

     ATTACK 
    
    uint rand = 0;
    uint attackVictoryChance = 70;
    
    function randMod(uint _modulus) internal returns(uint) {
        rand++;
        return uint(keccak256(abi.encodePacked(now, msg.sender, rand))) % _modulus;
    }
    
    function attack(uint _characterId, uint _targetId) external onlyOwnerOf(_characterId) {
        Character storage myCharacter = characters[_characterId];
        Character storage enemyCharacter = characters[_targetId];
        
        uint random = randMod(100);
        
        if (random = attackVictoryChance) {
            myCharacter.trainingPoints++;
            myCharacter.winCount++;
            enemyCharacter.lossCount++;
        } else {
            myCharacter.lossCount++;
            enemyCharacter.winCount++;
            enemyCharacter.trainingPoints++;
        }

        _triggerCooldown(myCharacter);
    }
    
     OWNER OF CONTRACT 

    function withdraw() external onlyOwner {
        address _owner = owner();
        _owner.transfer(address(this).balance);
    }
    
}

