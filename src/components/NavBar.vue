<template>
  <div>
    <nav class="navbar navbar-light fixed-top" id="mainNav">
            <a href="#/profile" class="btn btn-primary mx-auto"><img  src="../assets/img/home.png"/> Home</a>
            <a href="#/training" class="btn btn-primary mx-auto"><img  src="../assets/img/target.png"/> Training</a>
            <a href="#/battle" class="btn btn-primary mx-auto"><img  src="../assets/img/sword.png"/> Battle</a>
            <a href="#/highscore" class="btn btn-primary mx-auto"><img  src="../assets/img/podium.png"/> Highscore</a>
    </nav>
    <header class="masthead">
        <div class="fixed-top">
          <div class="">
            <h2 style="font-size: 1rem; text-aligh: right; display: inline; float: right">Address: {{address}}</h2>
            <h1 class="  my-4 text-uppercase">crypto heroes</h1>
          </div>
        </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      address: ''

    }
  },
  mounted: function () {
    this.address = window.web3.eth.accounts[0]
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight:600;
}

#mainNav {
  min-height: 56px;
  background-color: rgb(56, 56, 56);
  padding-top: 4rem;
  overflow: auto;
}

#mainNav .navbar-toggler {
  font-size: 80%;
  padding: 0.65rem;
  color: #64a19d;
  border: 1px solid #64a19d;
}

#mainNav .navbar-toggler:focus {
  outline: none;
}

#mainNav .navbar-brand {
  color: #161616;
  font-weight: 700;
  padding: .9rem 0;
}

#mainNav .navbar-nav .nav-item:hover {
  color: fade(white, 80%);
  outline: none;
  background-color: transparent;
}

#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {
  outline: none;
  background-color: transparent;
}

a {
  color: #e2e2e2;
  width: -webkit-fill-available;
  width: 25%;
}

.btn {
  -webkit-box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;
  padding: 1.25rem 1.8rem;
  font-family: 'Varela Round';
  font-size: 90%;
  text-transform: uppercase;
  letter-spacing: .15rem;
  border: 0;
}

.btn-primary {
  background-color: transparent;
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
li {
  display: inline;
}

ul {
  width: 100%;
  padding: 0;
  margin: 0;
}

#project {
  background-color: #161616;
  z-index: 20;
}
img {
  width: 30px;
}

.masthead h1 {
  font-family: 'Varela Round';
  font-size: 3rem;
  line-height: 2.5rem;
  letter-spacing: 0.8rem;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  width: 100%;
  text-align: left
}

.masthead h2 {
  font-family: 'Varela Round';
  max-width: 30rem;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(233, 224, 224, 0));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

</style>
