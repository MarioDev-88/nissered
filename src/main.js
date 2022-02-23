import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/bootstrap.css'
import './assets/base.css'
import './assets/responsive.css'
import './assets/fontawesome-all.css'
// import './assets/index_.css'
import Menu from '@/components/Menu.vue'
import * as VueAos from 'vue-aos'
import router from './router'

createApp(App)
    .use(router, VueAos)
    .component('Menu', Menu)
    .mount('#app')
