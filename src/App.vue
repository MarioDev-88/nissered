<template>
  <Menu></Menu>
  <div class="page-wrapper">
    <router-view/>
  </div>  
</template>

<script>
// import Menu from '@/components/Menu.vue'
import { onMounted } from "vue";
import { auth } from "./utils/firebase";
export default {
  name:'App',
  setup() {
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        if(user) {
          console.log(user)
        }
      })
    })
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
