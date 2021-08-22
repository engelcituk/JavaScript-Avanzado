import { renderMovieListFromMap } from './render.js';

import { movieList, all, popular as mostValued, notPpopular as leastValued} from './normalize.js';

window.filter.addEventListener('change', function () {
    switch (this.value) {
        case 'most-valued':
            return renderMovieListFromMap(mostValued, movieList)
        case 'least-valued':
            return renderMovieListFromMap(leastValued, movieList)
        default:
            return renderMovieListFromMap(all, movieList)
    }
})

/*
Array.prototype.reduce - Normalizando datos

Ejecuta una función reductora sobre cada elemento del array devolviendo un único valor, puede ser un booleano, objeto, número, string o array

*/