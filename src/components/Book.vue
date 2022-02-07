<script>
export default {
    computed: {
        book(){
            const books = this.$store.state.books
            const id = this.$route.params.id
            const book =  books.find(item => item.id == id)
            if (book) {
                return book
            } else {
                return {}
            }
        }
    }    
}
</script>
<template>
    <div>
        <Button>Back</Button>
        <h1>{{book.title}}</h1>
        <h6>{{book.author_name}}</h6>
        <p> {{ book.content }} </p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla culpa rerum quo qui totam id delectus iusto unde! Sequi aperiam, provident ducimus quam atque perspiciatis odit nobis cum natus reiciendis?</p>

        <Button>Read Later</Button>
    </div>
</template>