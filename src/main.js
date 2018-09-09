import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('./assets/css/main.scss')
require('vue-material-design-icons/styles.css')
require('animate.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
