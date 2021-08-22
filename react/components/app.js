import { Component } from './../lib/react.js'
import User from './user.js';
import Wrapper from './wrapper.js';


class App extends Component {
    render() {
        return `
            <div class="app">
                ${ new Wrapper({
                    children: `
                        <h1>React ⭐️⭐️⭐️⭐️⭐️</h1>
                        ${ new User({
                                name: 'Ash',
                                avatar: './img/ash.jpg'
                            }).render()
                        }
                    `
                }).render() }

            </div>
        `
    }   
}

export default App

/*
Renderizando Componentes

Ya que tenemos nuestro MVP de React, pongamosla a prueba creando componentes anidados

*/