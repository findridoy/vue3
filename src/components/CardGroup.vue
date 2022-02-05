<script>
import Card from "./Card.vue"
export default {
    components: { Card },

    data: function () {
        return {
            colors: ['black', 'purple', 'darkred'],
            cards: []
        }
    },

    methods: {
        // getCards() {
        //     const cards = JSON.parse(window.localStorage.getItem('cards'))
        //     return cards
        // },
    }
}
</script>
<template>
    <div class="card-wrapper">
        <Card
            v-for="(card, index) in cards"
            :key="index"
            :background-color="colors[Math.floor(Math.random() * 3)]"
            :card-number="card.number"
            :first-name="card.holder_first_name"
            :last-name="card.holder_last_name"
            :Logo="card.logo"
            :valid-month="card.valid_till_month"
            :valid-year="card.valid_till_year"
            @click.native="$emit('selected', card)"
        ></Card>
    </div>
</template>

<style scoped>
.card-wrapper {
    position: relative;
}

.card {
}
</style>