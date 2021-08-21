import movies from './movies.js'
import render from './render.js'

const $button = window.recommended
// const $button = document.querySelector('#recommended')
// const $button = document.getElementById('recommended')

$button.addEventListener('click', ()=> {
    render( setRecommendedMovies(movies) ) 
})

function setRecommendedMovies(movies) {
    //map retorna un array diferente
    return movies.map( (movie, index) => {
        //spread operator, porque creo nuevo objeto con todo lo que ya trae y un nuevo key recommended:true
        return { ...movie, recommended: movie.vote_average > 7 } 
    })
    // console.table(newMoviews, ['id','title','vote_average','recommended'])
}