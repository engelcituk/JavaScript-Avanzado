import movies from './movies.js'
import render from './render.js'

const search = window['search-form']

search.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(this)
    const query = formData.get('title')
    if(query != "" ){
        const movies = searchMovie(query) 
        if(movies){
            return render(movies) 
        }
        return alert('no se encontraron resultados')
    } 
})

function filtersByTitle(title) {
    return movies.filter( (movie) => {
        return movie.title.toLowerCase().includes( title.toLowerCase())
    })
}

function findById(id) {
    return movies.find( (movie) => {
        return movie.id === parseInt(id, 10) 
    })
}


function searchMovie(query) {
    
    if( isNaN(query) ){
        return filtersByTitle(query)
    }
    const movie = findById(query)
    return movie ? [ movie ] : []
}

/*
Array.prototype.filter - Buscando películas por nombre

Crear un nuevo array con los elementos que cumplan la condición de la función dada.

-----------
Array.prototype.find - Buscando películas por ID

Find te ayuda a encontrar un elemento dentro de una lista, el iterador terminará luego de encontrar la primer coincidencia.
*/