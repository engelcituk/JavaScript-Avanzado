import rawMovieList from './movies.js'

const movieList = rawMovieList.reduce( (list, movie)=> {
    list.set(movie.id, movie)
    return list
}, new Map() )

const all = rawMovieList.map( movie => movie.id )
// (list, movie) -> (prevValue, actualValue)
const popular = rawMovieList.reduce( (list, movie) => {
    if(movie.vote_average > 7){
        list.push(movie.id)
    }
    return list
},[])

const notPpopular = rawMovieList.reduce( (list, movie) => {
    if(movie.vote_average <= 7){
        list.push(movie.id)
    }
    return list
},[])

export {
    movieList,
    all,
    popular,
    notPpopular
}

