import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(VueRouter)
Vue.use(Vuex)


import states from './store/index'

const store = new Vuex.Store({
    ...states
})

import { routes } from "./routes"

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App)
})
