function renderElement(movie) {
    const element = buildElement(movie)
    window.container.append(element)
}

function buildElement({title, poster_path, vote_average, id, recommended}) {
    const template = `
        <article class="movie ${recommended ? 'recommended':''}">
            <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="">
            <p class="movie-title">${title}</p>
            <p class="movie-id">${id}</p>
            <span class="movie-rate">${vote_average}</span>
        </article>
    `
    const movie = document.createElement('div') //necesario el div sino no puedo usar createElement
    movie.innerHTML = template // pongo el html template generado
    return movie.firstElementChild //no quiero el div, pero si su primer hijo, osea el tag article
}
function cleanMovieList() {
    window.container.innerHTML = ''
}
export default function renderMovieList(list) {
    cleanMovieList() //limpio lo que hay dentro de #container
    // console.table(list,['id','original_title','poster_path','poster_path'])
    list.forEach( renderElement ) //forEach permite la ejecución de una función pero retorna los mismos elementos
}