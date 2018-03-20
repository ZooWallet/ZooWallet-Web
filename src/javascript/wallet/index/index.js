import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import Navbar from './navbar.vue'
import {store} from "../store/store"
import BootstrapVue from 'bootstrap-vue'

require("jsappbase/vuebase.js")
Vue.use(Vuex)
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  components: {App, Navbar},
  store,
})