<template>
<nav class="bg-navbar relative flex flex-wrap items-center justify-between py-3 shadow-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white" href="#">
            <img :src="require('@/assets/img/logo-nissered.png')" alt="Nisse Red" class="w-32 mr-2">
            <span class="font-semibold text-gray-500 text-lg"></span>
        </a>
        <button class="px-3 border-transparent rounded outline-none mobile-menu-button lg:hidden" type="button" v-on:click="toggleNavbar()">
          <svg
                class="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            ><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link class="py-4 px-2 border-b-4 hover:text-rosa transition duration-300" active-class="text-rosa" exact-active-class="text-gris" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="py-4 px-2 border-b-4 hover:text-rosa transition duration-300" active-class="text-rosa" exact-active-class="text-gris" to="/ignisdancestudio">Ignis Dance Studio</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
</template>

<script>
export default {
    name:'Menu',
    data() {
        return {
        showMenu: false
        }
    },
    methods: {
        toggleNavbar: function(){            
            this.showMenu = !this.showMenu;
        }
    }
}
</script>

<style scoped>
/* li > .current {
    color:#c4781a !important;
    -webkit-text-shadow: 0px 0px 30px #c4781a, 0px 0px 30px #c4781a;
    -ms-text-shadow: 0px 0px 30px #c4781a, 0px 0px 30px #c4781a;
    text-shadow: 0px 0px 30px #c4781a, 0px 0px 30px #c4781a;
}
li .current::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    display: block;
    border-bottom: 3px solid #ff7a21;
    z-index: 5;
} */
</style>