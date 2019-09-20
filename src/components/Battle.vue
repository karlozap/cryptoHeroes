<template>
  <main>
    <LoadingBar v-if="loading"></LoadingBar>
    <div v-if="!loading" id="page-top">
      <navbar></navbar>
      <section class="masthead">
        <div class="container d-flex h-100 align-items-center w-100 mw-100">
          <div class="mx-left text-center">
            <h1 class=" mx-1 my-5 text-uppercase">List of all heroes</h1><br>
            <div style="float: left; margin: 1rem 2rem" v-for="(h, index) in heroes" :key="index">
              <button type="" @click="chooseAnEnemy(h)" ><character v-b-modal.enemy-info-modal type="button" class="" style="display: inline" v-bind:level=h.level v-bind:name=h.name v-bind:id=h.dna ></character></button>
            </div>
          </div>
        </div>
      </section>
    </div>
<!--modal enemy info -->
    <b-modal style="width: 700px" class="modal-lg " ref="enemyInfo"
             id="enemy-info-modal"
             title="Battle"
             hide-footer>
      <b-form class="w-100">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h2> {{ playerHero.name }}</h2>
              <b-card class="" title="" style=" background-color: #4d4d4d; padding: 0%">
                <h3>Skills</h3>
                <div class="skl">
                  <span class=" d-block p-2 text-white">Strength: {{playerHero.strength}}</span>
                  <span class="mx-auto d-block p-2 text-white">Dexterity: {{playerHero.dexterity}}</span>
                  <span class="mx-auto d-block p-2 text-white">Agility: {{playerHero.agility}}</span>
                  <span class="mx-auto d-block p-2 text-white">Constitution: {{playerHero.constitution}}</span>
                  <span class="mx-auto d-block p-2 text-white">Charisma: {{playerHero.charisma}}</span>
                  <span class="mx-auto d-block p-2 text-white">Intelligence: {{playerHero.intelligence}}</span>
                </div>
              </b-card>
            </div>
            <div class="col-sm">
              <h2>VS</h2>
            </div>
            <div class="col-sm">
              <h2> {{ enemyHero.name }}</h2>
              <b-card class="" title="" style=" background-color: #4d4d4d; padding: 0%">
                <h3>Skills</h3>
                <div class="skl">
                  <span class=" d-block p-2 text-white">Strength: {{enemyHero.strength}}</span>
                  <span class="mx-auto d-block p-2 text-white">Dexterity: {{enemyHero.dexterity}}</span>
                  <span class="mx-auto d-block p-2 text-white">Agility: {{enemyHero.agility}}</span>
                  <span class="mx-auto d-block p-2 text-white">Constitution: {{enemyHero.constitution}}</span>
                  <span class="mx-auto d-block p-2 text-white">Charisma: {{enemyHero.charisma}}</span>
                  <span class="mx-auto d-block p-2 text-white">Intelligence: {{enemyHero.intelligence}}</span>
                </div>
              </b-card>
            </div>
          </div>
        </div>
        <br><br>
        <b-button @click="attack()" type="" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>

  </main>
</template>

<script>
import NavBar from './NavBar'
import Character from './Character'
import CharacterSkills from './CharacterSkills'
import CryptoHeroes from '@/js/cryptoheroes'
import LoadingBar from './LoadingBar'

export default {
  name: 'battle',
  data () {
    return {
      loading: false,
      count: 0,
      playerHero: {
        level: '',
        name: '',
        dna: '',
        strength: '',
        dexterity: '',
        agility: '',
        constitution: '',
        charisma: '',
        intelligence: ''
      },
      enemyHero: {
        level: '',
        name: '',
        dna: '',
        strength: '',
        dexterity: '',
        agility: '',
        constitution: '',
        charisma: '',
        intelligence: ''
      },
      heroes: []
    }
  },
  components: {
    navbar: NavBar,
    character: Character,
    characterskills: CharacterSkills,
    LoadingBar
  },
  beforeCreate: function () {
    console.log('beforeCreate')
    this.loading = true
    CryptoHeroes.init()

    CryptoHeroes.characterID(window.web3.eth.accounts[0]).then(id => {
      console.log(id.toNumber())
      CryptoHeroes.characterDetails(id).then(character => {
        this.playerHero = character
      })
    }).catch(err => {
      console.log(err)
    })

    CryptoHeroes.countCharacters().then((result) => {
      console.log(result.toNumber())
      this.count = result
      for (let i = 0; i < result; i++) {
        CryptoHeroes.characterDetails(i).then(c => {
          if (c.dna !== this.playerHero.dna) {
            this.heroes.push(c)
          }
        })
      }
      this.loading = false
    })
  },
  methods: {
    chooseAnEnemy (h) {
      console.log(h)
      this.enemyHero = h
      // this.attack(this.enemyHero)
    },
    attack () {
      CryptoHeroes.getCharacterIdByDna(this.playerHero.dna.toString()).then(result => {
        console.log('PlayerID: ' + result)
      })

      CryptoHeroes.getCharacterIdByDna(this.enemyHero.dna.toString()).then(result => {
        console.log('EnemyID: ' + result)
      })

      CryptoHeroes.attackEnemy(1, 0).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      })
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
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(22, 22, 22, 0.3)), color-stop(75%, rgba(22, 22, 22, 0.7)), to(#161616)), url("../assets/img/bg-main.jpg");
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
