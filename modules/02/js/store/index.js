
import { createStore } from './../redux/index.js'
import reducer from './../reducers/index.js'
const initialState = { caloriasBase:0, caloriasFaltantes:1360563}
const store = createStore(reducer, initialState)
export default store 
