<template>
  <main>
    <LoadingBar v-if="loading"></LoadingBar>
    <div v-if="!loading" id="page-top">
      <navbar></navbar>
      <section class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-left text-center">
            <h1 class=" mx-1 my-5 text-uppercase">training</h1>
            <br>
            <b-card class="" title="" style=" background-color: #4d4d4d; padding: 0%">
                <h3>Skills</h3>
                <h5>Training skills: {{ playerHero.trainingPoints }}</h5>
                <div class="skl">
                  <span class=" d-block p-2 text-white">Strength: {{playerHero.strength}} <button type="button" class="btn btn-dark" @click="upgradeCurrentSkill(0)"> upgrade</button></span>
                  <span class="mx-auto d-block p-2 text-white">Dexterity: {{playerHero.dexterity}}<button type="button" class="btn btn-dark" @click="upgradeCurrentSkill(1)"> upgrade</button></span>
                  <span class="mx-auto d-block p-2 text-white">Agility: {{playerHero.agility}} <button type="button" class="btn btn-dark" @click="upgradeCurrentSkill(2)"> upgrade</button></span>
                  <span class="mx-auto d-block p-2 text-white">Constitution: {{playerHero.constitution}} <button type="button" class="btn btn-dark" @click="upgradeCurrentSkill(3)"> upgrade</button></span>
                  <span class="mx-auto d-block p-2 text-white">Charisma: {{playerHero.charisma}} <button type="button" class="btn btn-dark" @click="upgradeCurrentSkill(4)"> upgrade</button></span>
                  <span class="mx-auto d-block p-2 text-white">Intelligence: {{playerHero.intelligence}} <button type="button" class="btn btn-dark" @click="upgradeCurrentSkill(5)"> upgrade</button></span>
                </div>
                <a v-if="canUpgrade" @click="updateSkills" name="signup" class="btn btn-primary" style="height:38px; padding: 10px">Confirm</a>
                <a v-if="canUpgrade" href="#/profile"  name="signup" class="btn btn-primary" style="height:38px; padding: 10px">Reset</a>
              </b-card>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import NavBar from './NavBar'
import CryptoHeroes from '@/js/cryptoheroes'
import LoadingBar from './LoadingBar'

export default {
  name: 'Training',
  data () {
    return {
      loading: false,
      canUpgrade: false,
      playerHero: {
        level: '',
        name: '',
        id: '',
        strength: '',
        dexterity: '',
        agility: '',
        constitution: '',
        charisma: '',
        intelligence: '',
        trainingPoints: ''
      }
    }
  },
  beforeCreate: function () {
    let self = this
    this.loading = true
    CryptoHeroes.init()
    CryptoHeroes.characterID(window.web3.eth.accounts[0]).then(id => {
      console.log(id.toNumber())
      CryptoHeroes.characterDetails(id).then(character => {
        this.playerHero = character
        this.loading = false
      })
    }).catch(err => {
      console.log(err)
      self.$router.push('#/training')
    })
  },
  components: {
    navbar: NavBar,
    LoadingBar
  },
  methods: {
    updateSkills: function () {
      // let self = this
      CryptoHeroes.characterID(window.web3.eth.accounts[0]).then(id => {
        if (id !== '') {
          CryptoHeroes.updateCharacterSkills(id, this.playerHero.trainingPoints, this.playerHero.strength, this.playerHero.dexterity, this.playerHero.agility, this.playerHero.constitution, this.playerHero.charisma, this.playerHero.intelligence).then(tx => {
            console.log(tx)
            this.canUpgrade = false
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
    upgradeCurrentSkill (skill) {
      if (this.playerHero.trainingPoints > 0) {
        this.canUpgrade = true
        switch (skill) {
          case 0:
            this.playerHero.strength++
            break
          case 1:
            this.playerHero.dexterity++
            break
          case 2:
            this.playerHero.agility++
            break
          case 3:
            this.playerHero.constitution++
            break
          case 4:
            this.playerHero.charisma++
            break
          case 5:
            this.playerHero.intelligence++
            break
          default:
            break
        }
        this.playerHero.trainingPoints--
      }
    }
  }
}
</script>

<style scoped>

.masthead {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 36rem;
  margin-top: 7.6rem;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(22, 22, 22, 0.3)), color-stop(75%, rgba(22, 22, 22, 0.7)), to(#161616)), url("../img/bg-main.jpg");
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url("../assets/img/bg-main.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

.masthead h1 {
  font-family: 'Varela Round';
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 0.8rem;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.masthead h2 {
  max-width: 20rem;
  font-size: 1rem;
}

body {
  font-family: 'Nunito';
  letter-spacing: 0.0625em;
}

</style>
