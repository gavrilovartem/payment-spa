import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';

Vue.use(Vuelidate);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')