<template>
  <div class="container">
    <a href='#/'>Home</a>
    <a href='#/data'>Data</a>
    <a href="#/temp">Api Data</a>
    <component :is="currentView" />
  </div>

</template>

<script>

import HomeViewVue from './components/HomeView.vue';
import DataView from './components/DataView.vue';
import NotFound from './components/NotFound.vue';
import TempData from "./components/TempData.vue"

const routes = {
  '/' : HomeViewVue,
  '/data':DataView,
  '/temp':TempData
}

console.log(window.location.hash)

export default {
  data(){
    return {
      currentPath : window.location.hash
    }
  },
  computed:{
    currentView(){
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted(){
    window.addEventListener('hashchange', () => {
      console.log(this.currentPath)
      this.currentPath = window.location.hash
    })
  }
  
} 
</script>

<style>
.container{
  margin: auto;
  margin-left: 20px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

