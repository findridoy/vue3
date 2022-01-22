<script>
import Card from "./Card.vue"
import CardGroup from "./CardGroup.vue"

export default {
    components: { Card, CardGroup },

    data: function () {
        return {
            activeCard: {}
        }
    },

    methods: {
        changeSelected(card) {
            this.activeCard = card
        }
    }
}
</script>

<template>
    <div>
        <h1>E-WALLET</h1>

        <div>ACTIVE CARD</div>
        <Card
            class="card"
            background-color="orange"
            :card-number="activeCard.number"
            :first-name="activeCard.holder_first_name"
            :last-name="activeCard.holder_last_name"
            :Logo="activeCard.logo"
            :valid-month="activeCard.valid_till_month"
            :valid-year="activeCard.valid_till_year"
            color="black"
        ></Card>
        <CardGroup @selected="changeSelected"></CardGroup>

        <button class="add-card-button" @click="$emit('change-view')">ADD A NEW CARD</button>
    </div>
</template>

<style scoped>
.card {
    margin-bottom: 2rem;
}
</style>