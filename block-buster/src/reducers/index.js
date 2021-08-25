import { ADD_MOVIES, SET_FILTER } from './../actions/index.js'
import { movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds} from './../normalize.js';

const reducer = (state, action) => {
  const {type, payload  } = action
  switch (type) {
    case ADD_MOVIES: {
      const movieList = movieListAsMap(payload, state.movieList)
      const all = getAllIds(payload, state.list.all)
      const leastValued = getLeastValuedIds(payload, state.list.leastValued)
      const mostValued = getMostValuedIds(payload, state.list.mostValued)
      return {
        ...state, 
        movieList,
        list:{ 
          ...state.list,
          all,
          mostValued,
          leastValued
        }
      }
    }

    case SET_FILTER:
      return {
        ...state,
        filter: payload
      }
    default:
      return state
  }
}

export default reducer