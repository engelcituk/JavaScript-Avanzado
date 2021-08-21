import store from './store/index.js'
import { BURN } from './actions/index.js'

  // store.dispatch()
  // store.getState()
  // store.subscribe()

  store.subscribe(() => {
    // console.log('ha cambiado algo en el store', store.getState())
    window.result.textContent = `Haz quemado ${store.getState().caloriasBase} calorías`
    window.faltantes.textContent = `Te faltan ${store.getState().caloriasFaltantes} calorías por quemar`

  })

  const burn = () => {
    store.dispatch({
      type: BURN,
      payload: 1.42,
    })
  }
  window.burn.addEventListener('click', burn)