<template>
  <div>
    <nav class="navbar navbar-light fixed-top" id="mainNav">
            <a href="#/profile" class="btn btn-primary mx-auto">Home</a>
            <a href="#/training" class="btn btn-primary mx-auto">Training</a>
            <a href="#/battle" class="btn btn-primary mx-auto">Battle</a>
            <a href="#/highscore" class="btn btn-primary mx-auto">Highscore</a>
    </nav>
    <div class="project">
      <span class="mx-auto">crypto zombies</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#mainNav {
  min-height: 56px;
  background-color: rgb(56, 56, 56);
  padding-top: 6rem;
  overflow: auto;
}

#mainNav .navbar-toggler {
  font-size: 80%;
  padding: 0.75rem;
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
  padding: 1.25rem 2rem;
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

</style>
