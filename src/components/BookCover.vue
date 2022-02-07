<script>
export default {
    props: ['book']
}
</script>
<template>
    <div class="book-cover">
        <h1> {{ book.title }} </h1>
        <h6> {{ book.author_name }} </h6>
    </div>
</template>

<style scoped>
    .book-cover {
        width: 200px;
        height: 300px;
        background: rgb(77, 186, 236);
    }
</style>