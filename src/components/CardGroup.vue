<script>
import Card from "./Card.vue"
export default {
    components: {Card}
}
</script>
<template>
    <div class="card-wrapper">
        <Card background-color="yellow" class="card" style="top: 30px;"></Card>
        <Card background-color="green" class="card" style="top: 60px;"></Card>
        <Card background-color="purple" class="card" style="top: 90px;"></Card>
    </div>
</template>

<style scoped>
.card-wrapper {
    position: relative;
}

.card {
    position: absolute;
}
</style>