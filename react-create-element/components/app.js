import { Component, createElement } from './../lib/react/index.js'
// import User from './user.js'
// import Wrapper from './wrapper.js';
// import UserStyled from './user-styled.js'
const element = createElement('h1', {
    class: 'title',
},'Hola mundo')
console.log(element)

class App extends Component {
    render() {
        return `
            <div class="app">
                <h1>hola mundo</h1>
            </div>
        `
    }   
}

export default App

/*
${ new Wrapper({
                    children: `
                        <h1>React ⭐️⭐️⭐️⭐️⭐️</h1>
                        ${ new User({
                                name: 'Ash',
                                avatar: './img/ash.jpg'
                            }).render()
                        }
                        ${ new UserStyled({
                                name: 'Ash',
                                avatar: './img/ash.jpg'
                            }).render()
                        }
                    `
                }).render() }

Renderizando Componentes
Ya que tenemos nuestro MVP de React, pongamosla a prueba creando componentes anidados
*/