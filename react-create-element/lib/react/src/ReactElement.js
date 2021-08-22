
function setProperties(prop, value, element) {
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
    Object.keys(props).forEach( prop => setProperties(prop, props[prop], element ) )
    // console.log(Object.keys(props))
    return element
    //return `${element}`
}

/*

31.
Creando un CreateElement

Nuestro MVP de React no es suficientemente robusto para lograr un estado, eventos o ciclo de vida completo por depender 100% de los template literals, con el dolor de mi corazón debemos dejarlo ir para darle paso a una segunda API de React: CreateElement.

*/