<script>
import Card from "./Card.vue"
export default {
    components: { Card },

    computed: {
        month() {
            let dateArray = this.card.valid_till.split('-');
            return dateArray[1];
        },

        year() {
            return this.card.valid_till.split('-')[0];
        }
    },

    data: function () {
        return {
            card: {
                number: '',
                holder_first_name: '',
                holder_last_name: '',
                valid_till: '',
                ccv: null,
                vendor: null
            }
        }
    },

    methods: {
        handleSubmit() {
            const card = {
                number: this.card.number,
                holder_first_name: this.card.holder_first_name,
                holder_last_name: this.card.holder_last_name,
                valid_till_month: this.month,
                valid_till_year: this.year,
                logo: this.card.vendor,
            }


            this.$emit('change-view')

        }
    }
}
</script>
<template>
    <div>
        <h1>ADD A NEW BANK CARD</h1>
        <p>NEW CARD</p>
        <Card
            :card-number="card.number"
            :first-name="card.holder_first_name"
            :last-name="card.holder_last_name"
            :valid-month="month"
            :valid-year="year"
            :Logo="card.vendor"
        ></Card>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for>CARD NUMBER</label>
                <input type="text" name id v-model="card.number" />
            </div>
            <div>
                <label for>CARDHOLDER FIRST NAME</label>
                <input type="text" name id v-model="card.holder_first_name" />
            </div>
            <div>
                <label for>CARDHOLDER LAST NAME</label>
                <input type="text" name id v-model="card.holder_last_name" />
            </div>
            <div>
                <div>
                    <label for>VALID TILL</label>
                    <input type="month" name id v-model="card.valid_till" />
                </div>
                <div>
                    <label for>CCV</label>
                    <input type="number" name id v-model="card.ccv" />
                </div>
            </div>
            <div>
                <label for>VENDOR</label>
                <select name id v-model="card.vendor">
                    <option value="visa">VISA</option>
                    <option value="mastercard">MASTERCARD</option>
                </select>
            </div>
            <button type="submit">ADD CARD</button>
        </form>
    </div>
</template>