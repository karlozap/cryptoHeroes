<template>
  <div style="" >
      <b-card class="" title="" style=" background-color: #4d4d4d; padding: 0%">
        <h3>Skills</h3>
        <div class="skl">
          <span class=" d-block p-2 text-white">Strength: {{strength}}</span>
          <span class="mx-auto d-block p-2 text-white">Dexterity: {{dexterity}}</span>
          <span class="mx-auto d-block p-2 text-white">Agility: {{agility}}</span>
          <span class="mx-auto d-block p-2 text-white">Constitution: {{constitution}}</span>
          <span class="mx-auto d-block p-2 text-white">Charisma: {{charisma}}</span>
          <span class="mx-auto d-block p-2 text-white">Intelligence: {{intelligence}}</span>
        </div>
      </b-card>
  </div>
</template>

<script>
export default {
  name: 'CharacterSkills',
  props: {
    strength: '',
    dexterity: '',
    agility: '',
    constitution: '',
    charisma: '',
    intelligence: ''
  }
}
</script>

<style scoped>
</style>
