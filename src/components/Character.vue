<template>
  <div style="width: 200; height: 350" >
        <b-card class="mx-auto" title="" style=" max-width: 250px; max-height: 400px; background-color: #4d4d4d; padding: 0%">
          <span class="mx-auto d-block p-2 text-white">Lvl. {{level}}</span>
          <b-img style="height: 200px; width: 180px" src="https://i.pinimg.com/236x/02/38/38/023838a3e5091cb8e3bf64342bbdde32--fantasy-images-fantasy-women.jpg"></b-img>
          <span class="d-block p-3 text-white ">Name: {{name}}</span>
          <span class="d-block p-1 text-white small">Id: #{{id}}</span>
        </b-card>
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    level: '',
    name: '',
    id: ''
  }
}
</script>

<style scoped>
.card-body {
   padding: 0 !important;
   width: 200px;
   height: 350px;
   margin: auto;
}
</style>
