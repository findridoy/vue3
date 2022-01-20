<script>
import Card from "./Card.vue"
import CardGroup from "./CardGroup.vue"

export default {
    components: {Card, CardGroup}
}
</script>

<template>
    <div>
        <h1>E-WALLET</h1>

        <div>ACTIVE CARD</div>
        <Card class="card"></Card>
        <Card class="card" card-number="1234 2568 4587 8965" first-name="Nabhan"></Card>
        <CardGroup></CardGroup>

    </div>
</template>

<style scoped>
.card {
    margin-bottom: 2rem;
}
</style>