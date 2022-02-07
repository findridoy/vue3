<script>
import BookCover from "./BookCover.vue"
export default {
    components: { BookCover },
    computed: {
        bookList(){
            return this.$store.state.books
        }
    }
}
</script>

<template>
    <div class="book-list">
       <router-link :to="'/books/' + book.id" v-for="book in bookList" :key="book.id">
           <BookCover  :book="book"/>
       </router-link>
    </div>
</template>

<style scoped>
.book-list {
    display: flex;
    gap: 10px;
}
</style>