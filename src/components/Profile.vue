<template>
  <main>
    <LoadingBar v-if="loading"></LoadingBar>
    <div v-if="!loading" id="page-top">
      <navbar></navbar>
      <section class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class=" text-center">
            <h1 class=" mx-1 my-5 text-uppercase">profile</h1>
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <character  style="" v-bind:level=myHero.level v-bind:name=myHero.name v-bind:id=myHero.dna></character>
                </div>
                <div class="col-sm w-75">
                  <characterskills v-bind:strength=myHero.strength v-bind:dexterity=myHero.dexterity v-bind:agility=myHero.agility v-bind:constitution=myHero.constitution v-bind:charisma=myHero.charisma v-bind:intelligence=myHero.intelligence></characterskills>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import NavBar from './NavBar'
import Character from './Character'
import CharacterSkills from './CharacterSkills'
import CryptoHeroes from '@/js/cryptoheroes'
import LoadingBar from './LoadingBar'

export default {
  name: 'profile',
  data () {
    return {
      loading: false,
      myHero: {
        level: '',
        name: '',
        id: '',
        strength: 0,
        dexterity: 0,
        agility: 0,
        constitution: 0,
        charisma: 0,
        intelligence: 0
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
        this.myHero = character
        this.loading = false
      })
    }).catch(err => {
      console.log(err)
      self.$router.push('#/profile')
    })
  },
  mounted () {
    console.log('account:  ' + window.web3.eth.accounts[0])
  },
  components: {
    navbar: NavBar,
    character: Character,
    characterskills: CharacterSkills,
    LoadingBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight:600;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #e2e2e2;
}

.btn {
  -webkit-box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  padding: 1.25rem 2rem;
  font-family: 'Varela Round';
  font-size: 90%;
  text-transform: uppercase;
  letter-spacing: .15rem;
  border: 0;
}

.btn-primary {
  background-color: #161616;
  color: #e2e2e2;
}

.btn-primary:hover {
  background-color: #3f3f3f;
  color: #e2e2e2;
}

.btn-primary:focus {
  background-color: #3b3b3b;
  color: white;
}

.btn-primary:active {
  background-color: #464646 !important;
  color: #e2e2e2;
}

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

a {
  color: #64a19d;
}

a:focus, a:hover {
  text-decoration: none;
  color: #3c6360;
}

.bg-black {
  background-color: #161616 !important;
}

.bg-primary {
  background-color: #64a19d !important;
}

.text-primary {
  color: #64a19d !important;
}

footer {
  padding: 5rem 0;
}
</style>
