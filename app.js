const app = Vue.createApp({
    data() {
        return {
            movies: [
                { title: 'Kyouko Hori', img: 'assets/kyouko.jpg', likes: 0, isFav: false, comment: '', comments: ['adawd','dawdaw'], showComments: true },
                { title: 'Nino Nakano', img: 'assets/nino.jpg', likes: 0, isFav: false, comment: '', comments: [], showComments: true },
                { title: 'Burger Yum', img: 'assets/burger.jpg', likes: 0, isFav: false, comment: '', comments: [], showComments: true }
            ]
        }
    },
    methods: {
        addComment(movie){
            if(movie.comment){
                movie.comments.push(movie.comment)
                movie.showComments = true
            }
        },
        toggleFavorites(movie){
            movie.isFav = !movie.isFav
        },
        toggleComments(movie){
            movie.showComments = !movie.showComments
        }
    }
})

app.mount('#app')