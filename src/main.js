import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import BookList from './components/BookList.vue'
import Index from './pages/index.vue'

Vue.config.productionTip = false


Vue.use(VueRouter)

const routes = [
  { path: '/books', component: BookList },
  { path: '/', component: Index },
]


const router = new VueRouter({
  routes
})






Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
