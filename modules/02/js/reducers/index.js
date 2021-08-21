import { BURN } from './../actions/index.js'

const reducer = (state, action) => {
  const {type, payload  } = action
  switch (type) {
    case BURN:
      state.caloriasBase += payload   
      state.caloriasFaltantes -= payload
      return state
    default:
      return state
  }
}

export default reducer