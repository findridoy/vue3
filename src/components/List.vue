<script>
import axios from 'axios'

export default {
    data: function () {
        return {
            items: []
        }
    },
    mounted() {
        axios.get('https://api.publicapis.org/entries').then(res => {
            this.items = res.data.entries
            console.log(this.items[0]);
        }).catch(err => {
            alert("there was an error on calling axios")
        })
    }
}
</script>

<template>
    <div>
        <h1>List of</h1>
        <ol>
            <li v-for="(item, index) in items" :key="index">{{item.Description}}</li>
        </ol>
    </div>
</template>