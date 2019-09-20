var CryptoHeroes = artifacts.require("./CryptoHeroes.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoHeroes);
};
