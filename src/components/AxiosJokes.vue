<template>
  <div>
    <h1>Axios Jokes</h1>
    <h3>Choose which case you want to see the joke in</h3>
    <SnakeCase/>
    <NormalText/>
    <p>or you could</p>
    <AllCaps/>
    <button @click="getJoke">Click For Joke</button> <!--In here I need to reference the API call below-->
    <h3>
      <!-- {{ quoteText }} -->
      <!--The joke from the API should display here--></h3>
  </div>
</template>

<script>
import {useMainStore} from '@/stores/main'
// program doesnt like line above as it is or deleted
import {mapState} from 'pinia';
import axios from 'axios'


import SnakeCase from '@/components/SnakeCase.vue'
import NormalText from '@/components/NormalText.vue'
import AllCaps from '@/components/AllCaps.vue'


  export default {
    name: "AxiosJokes",
    computed: {
      ...mapState(useMainStore,['jokeResponse', 'jokeError']),
      // this is "imported" from state in main.js
    },
    
    // adding this back in AxiosJokes got rid of a bunch of errors
    methods: {
      getJoke: function() {
        axios.request({
            url: "https://geek-jokes.sameerkumar.website/api?format=json", 
            method: "GET"
          }).then((response)=>{
            this.jokeResponse = response;
            this.newJoke();
            console.log(response);
          }).catch((error)=>{
            console.log(error);
            this.jokeError = error.response;
          })
      }
    },
    components:{
      SnakeCase,
      NormalText,
      AllCaps
      // these are the other components that should have changed the font
    }
  }

</script>

<style scoped>

</style>