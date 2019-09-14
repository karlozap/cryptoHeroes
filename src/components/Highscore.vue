<template>
  <main>
    <div id="page-top">
      <navbar></navbar>
      <section class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class=" mx-5 my-5 text-uppercase">Leaderboards</h1>
              <b-table striped hover :items="heroes" :fields="fields"></b-table>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import NavBar from './NavBar'

import * as Methods from '../../methods/method'

export default {
  name: 'Highscore',
  data () {
    return {
      fields: [
        {
          key: 'name',
          sortable: false
        },
        {
          key: 'level',
          sortable: true
        },
        {
          key: 'winCount',
          label: 'Wins',
          sortable: true
        },
        {
          key: 'lossCount',
          label: 'Defeats',
          sortable: true
        }
      ],
      heroes: []

    }
  },
  mounted () {
    this.heroes = Methods.getAllCharacters(-1)
  },
  components: {
    navbar: NavBar
  }
}
</script>

<style scoped>

.masthead {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 36rem;
  margin-top: 8rem;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(22, 22, 22, 0.3)), color-stop(75%, rgba(22, 22, 22, 0.7)), to(#161616)), url("../img/bg-main.jpg");
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url("../assets/img/bg-main.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

.masthead h1 {
  font-family: 'Varela Round';
  font-size: 4rem;
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
