export default {
    state: {
        books: [
            {
                id: 1,
                title: "One Hundred Years of Solitude",
                author_name: "Gabriel Garcia Marquez",
                content: "One of the 20th century's enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning car"
            },
            {
                id: 2,
                title: "Ulysses",
                author_name: "James Joyce",
                content: "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss"
            },
            {
                id: 3,
                title: "In Search of Lost Time",
                author_name: "Marcel Proust",
                content: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narr"
            },
        ],
    },

    actions: {
        changeBookList() {
            // call mutaion that changes book list
        }
    }
}