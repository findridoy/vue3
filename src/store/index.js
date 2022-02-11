import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import book from './modules/book'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        book
    }
})


export default store