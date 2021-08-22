
import { render } from './../../react-dom.js'


function renderChildren(children, container) {
    if(Array.isArray(children) ){
        return children.forEach( child => render(child, container) )
    }
   return  render(children, container)
}
function setProperties(prop, value, element) {
    //support por childrens
    if( prop === 'children'){
        return renderChildren(value, element)
    }
    //support for attributtes
    const attribute = value
    return element.setAttribute(prop, attribute) 
}

export function createElement(type, props, content) {
    //creando tipo de elemento
    const element = document.createElement(type)
    //Contenido
    if(content){
        element.textContent = content
    }
    //Propiedades
    if(props){
        Object.keys(props).forEach( prop => setProperties(prop, props[prop], element ) )
    }
    // console.log(Object.keys(props))
    return element
    //return `${element}`
}

/*

31.
Creando un CreateElement

Nuestro MVP de React no es suficientemente robusto para lograr un estado, eventos o ciclo de vida completo por depender 100% de los template literals, con el dolor de mi corazón debemos dejarlo ir para darle paso a una segunda API de React: CreateElement.

32.
Refactorizando React y React-DOM

El método render() de nuestros componentes ahora va a implementar nuestro createElement y volveremos a hacer funcionar la propiedad children para lograr asegurar la lógica de componentización.


*/

