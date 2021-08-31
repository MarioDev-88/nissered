<template>
  <section class="banner-section">
    <div class="banner-carousel owl-theme owl-carousel owl-loaded owl-drag">
      <agile :autoplay="false" :centerMode="true" :fade="true" :navButtons="false" @after-change="showCurrentSlide($event)">
        <div class="owl-item">
          <div class="slide slide-item">
            <div class="image-layer" :style="{ backgroundImage: 'url(' + require('@/assets/img/test.jpg') + ')' }"></div>
            <div class="auto-container">
                <div class="content-box">                    
                    <div class="content">
                      <h2>Nisse Red</h2>
                      <div class="link-box"><a href="games.html" class="theme-btn btn-style-one"><span class="btn-title">Our games</span></a></div>
                    </div>                 
                </div>  
            </div>          
          </div>
        </div>        
        <div class="slide">
            <h3>slide 2</h3>
        </div>
        <div class="slide">
            <h3>slide 3</h3>
        </div>
      </agile>
    </div>
    <vue-aos visibility="show" animation-class="fadeIn">
      <div class="trans">
        <h1>Hola</h1>
      </div>
    </vue-aos>
  </section>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
import { VueAgile } from 'vue-agile'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    agile:VueAgile
  },
  methods: {
    showCurrentSlide(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
.trans {
    opacity: 1;
     -webkit-transform: translateX(0);
     -moz-transform: translateX(0);
     -ms-transform: translateX(0);
     -o-transform: translateX(0);
     transform: translateX(0);
     -webkit-transition: all 700ms ease;
     -moz-transition: all 700ms ease;
     -ms-transition: all 700ms ease;
     -o-transition: all 700ms ease;
     transition: all 700ms ease;
     -webkit-transition-delay: 300ms;
     -moz-transition-delay: 300ms;
     -ms-transition-delay: 300ms;
     -o-transition-delay: 300ms;
     transition-delay: 300ms;
}
</style>
