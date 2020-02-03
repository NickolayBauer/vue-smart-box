import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Vuelidate from 'vuelidate'
import {
  store
} from '@/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/styles/var.scss'
import '@/styles/main.scss'
import '@/styles/media.scss'

window.$ = window.jQuery = require('jquery');
Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
