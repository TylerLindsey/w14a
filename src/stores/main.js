import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore('main',{
  state : ()=>{
      return {
        jokeResponse : undefined,
        jokeError : undefined,
        // This section is meant for variables that require global access and manipulation.
      }
  },

  actions: {
    async getJoke(){
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
    },
    newJoke(){

    }
  },

  getters: {
    firstInitial: state=>{
        return state.jokeResponse.charAt()
    },
    quoteHttpCode : state =>{
      if (state.jokeResponse){
          return state.jokeResponse.status;
      }
      return undefined;
      
    },
    quoteText : state =>{
        if(state.jokeResponse){
            return state.jokeResponse;
            // .data.quote was after jokeResponse
        } else{
          return undefined;
        }
    }
  }

})
