<template>
  <section id='signup'>
    <LoadingBar v-if="loading"></LoadingBar>
    <div v-if="!loading" id="page-top">
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center align-middle">
          <div class="mx-auto text-center">
            <h1 class=" mx-1 my-5 text-uppercase">Create account</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">after clicking sing up you will create your character. he will get unique dna. </h2>
            <div class="form">
            <div class="text-center">
              <b-form-input  style="width:300px; display: inline" v-model="form.pseudo" placeholder="Enter character name"></b-form-input>
              <a @click="signup" name="signup" class="btn btn-primary" style="height:38px; padding: 10px">Sign up</a>
            </div>
          </div>
          </div>
        </div>
      </header>
    </div>    
  </section>
</template>

<script>
  import CryptoHeroes from '@/js/cryptoheroes'

  export default {
    name: 'signup',
    data () {
      return {
        loading: false,
        form: {
          pseudo: ''
        }
      }
    },
    beforeCreate: function () {
      CryptoHeroes.init()
      this.loading = true
    },
    mounted: function () {
      this.loading = false
    },
    methods: {
      signup: function () {
        let self = this
        if (this.form.pseudo !== '') {
          CryptoHeroes.create(this.form.pseudo.toString()).then(tx => {
            console.log(tx)
            self.$router.push('/profile')
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight:400;
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
  min-height: 35rem;
  padding: 15rem 0;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(22, 22, 22, 0.3)), color-stop(75%, rgba(22, 22, 22, 0.7)), to(#161616)), url("../asets/img/bg-signup.jpg");
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url("../assets/img/bg-signup.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.masthead h1 {
  font-family: 'Varela Round';
  font-size: 3rem;
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
