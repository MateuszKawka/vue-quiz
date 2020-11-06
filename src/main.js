import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AtComponents from 'at-ui'
import 'at-ui-style'    
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(AtComponents)
Vue.use(VueEllipseProgress)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
