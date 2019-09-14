<template>
  <div id="app">
    <router-view/>
    <h4>MetaMask account: {{ account }}</h4>
  </div>
</template>

<script>
import {web} from '../contracts/contract'

export default {
  name: 'App',
  data () {
    return {
      account: null
    }
  },
  mounted () {
    this.account = web.eth.defaultAccount
  }
}
</script>
