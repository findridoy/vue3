const app = Vue.createApp({
    // template: `<h1> hello from {{name}}</h1>`,
    data() {
        return {
            name: 'Nabhan',
            age: 23,
            fruitsShowing: false,
        }
    },

    methods: {
        changeName() {
            this.name = 'Mohona'
        }
    }



})

app.mount('#app')
