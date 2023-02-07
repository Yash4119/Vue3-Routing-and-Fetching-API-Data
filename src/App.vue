<!-- <template>
  <div class="container">
    <a class="links" href='#/'>Home</a>
    <a class="links" href='#/data'>Data</a>
    <a class="links" href="#/temp">Api Data</a>
    <component :is="currentView" />
  </div>

</template> -->

<template>
  <nav>
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/data">Get Post Request</a></li>
      <li><a href="#/temp">Fetch Data</a></li>
    </ul>
  </nav>
  <div class="container">
    <component :is="currentView"></component>
  </div>
</template>

<style>
  nav {
    display: flex;
    justify-content: center;
    background-color: lightgray;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    flex: 2;
    text-align: center;
  }

  a {
    display: block;
    padding: 16px;
    text-decoration: none;
    color: black;
  }

  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

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

