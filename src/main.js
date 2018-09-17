import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from 'vue-awesome/components/Icon'

// icons
import 'vue-awesome/icons/brands/weibo'
import 'vue-awesome/icons/brands/facebook-f'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/brands/linkedin'
import 'vue-awesome/icons/brands/youtube'
import 'vue-awesome/icons/brands/flickr'
import 'vue-awesome/icons/play-circle'

import 'vue-awesome/icons/microphone'
import 'vue-awesome/icons/users'
import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/info-circle'
import 'vue-awesome/icons/newspaper'
import 'vue-awesome/icons/exchange-alt'
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/lightbulb'
import 'vue-awesome/icons/flask'

require('./assets/css/main.scss')
require('animate.css')

Vue.config.productionTip = false

Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
