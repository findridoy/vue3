const app = Vue.createApp({
    // template: `<h1> hello from {{name}}</h1>`,
    data() {
        return {
            books: [
                {
                    title: 'the book thief',
                    url: 'http://rokomari.com',
                    isFav: false
                },
                {
                    title: 'Javascript 101',
                    url: 'http://rokomari.com',
                    isFav: true
                },
                {
                    title: 'Python Master',
                    url: 'http://amazon.com',
                    isFav: true
                },
                {
                    title: 'Habluder Jonno Programming',
                    url: 'http://amazon.com',
                    isFav: false
                },
                {
                    title: 'Programming er choddogosti',
                    url: 'http://amazon.com',
                    isFav: false
                },
            ]
        }
    },

    methods: {
    }



})

app.mount('#app')
