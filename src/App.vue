<template>
  <div id="app">
    <div>
      <CardDisplay v-if="visibleArea === 'card_display'" @change-view="handleChangeView"></CardDisplay>
      

      <CardForm v-else @change-view="visibleArea = 'card_display'"></CardForm>
    </div>
  </div>
</template>

<script>
import CardDisplay from "./components/CardDisplay.vue"
import CardForm from "./components/CardForm.vue"

export default {
  name: 'App',
  components: {
    CardDisplay,
    CardForm
  },
  data: function(){
    return {
      visibleArea: "card_display"
    }
  },

  methods: {
    handleChangeView(){
      this.visibleArea = "form_display"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.add-card-button {
  /* position: static;
  bottom: 0; */
}
</style>
