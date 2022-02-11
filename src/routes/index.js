import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '../components/BookList.vue'
import Book from '../components/Book.vue'
import PublicBookList from '../components/PublicBookList.vue'
import PrivateBookList from '../components/PrivateBookList.vue'
import List from '../components/List.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/books', component: BookList },
    { path: '/books/:id', component: Book },
    { path: '/public/book-list', component: PublicBookList },
    { path: '/private/book-list', component: PrivateBookList },
    { path: '/list', component: List }

    // { path: '/', component: Index },
]


const router = new VueRouter({
    routes
})

export default router