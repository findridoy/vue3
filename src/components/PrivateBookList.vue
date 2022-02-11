<script>
export default {
    computed: {
        isAuthenticated(){
            return this.$store.state.auth.isAuthenticated
            // return this.$store.auth.state.isAuthen
        }
    },

    mounted(){
        
    }
}
</script>
<template>
    <div>
        <h1 v-if="isAuthenticated">This is Private book list</h1>
        <h1 v-else>You are not authenticated</h1>
    </div>
</template>