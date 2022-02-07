<script>
import BookCover from "./BookCover.vue"
export default {
    components: { BookCover },
}
</script>

<template>
    <div class="book-list">
        <BookCover />
        <BookCover />
        <BookCover />
        <BookCover />
        <BookCover />
    </div>
</template>

<style scoped>
.book-list {
    display: flex;
    gap: 10px;
}
</style>