import movies from './movies.js'
import render from './render.js'

const search = window['search-form']

search.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(this)
    const title = formData.get('title')
    const movies = filtersByTitle(title)
    render( movies ) 
})

function filtersByTitle(title) {
    return movies.filter( (movie) => {
        return movie.title.toLowerCase().includes( title.toLowerCase())
    })
}

/*
Array.prototype.filter - Buscando películas por nombre

Crear un nuevo array con los elementos que cumplan la condición de la función dada.
*/