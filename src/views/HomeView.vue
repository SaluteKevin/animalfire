<template>
  <div>
    <div v-for="pet in pets" :key="pet.id" class="">
      <div class="doomtext bgname rounded p-2gitt">
        type: {{pet.name}}
      </div>
      <div>
        age: {{pet.age}}
      </div>
      <div v-if="pet.isVaccinated">
        hello
      </div>
    </div>
  </div>
</template>

<script>
import { usePetsStore } from '../stores/pets';
export default {
  data(){
    return{
      pets: [],
    };
  },
  async mounted(){
    // console.log(usePetsStore().getPets);
    await usePetsStore().fetchPets();
    this.pets = usePetsStore().getPets;
  }
}
</script>

<style>
  .doomtext{
    font-size: 50px;
    color: darkred
  }
  .bgname{
    background-color: lightgreen;
  }
</style>