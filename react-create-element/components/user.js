import { Component, createElement } from './../lib/react/index.js'

class User extends Component {
    displayName = 'User'
    state = {
        age: this.props.age
    }
    componentDidMount(){
        console.log(`El componente ${this.displayName} se ha renderizado por primera vez`)
    }
    componentWillMount(){
        console.log(`El componente ${this.displayName}  se va renderizar por primera vez`)
    }

    componentDidUpdate(){
        console.log(`El componente ${this.displayName}  se ha actualizado`)
    }
    /*constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        console.log(this.props.name)
    }*/

    //otra forma de ahorrarse el constructor para obtener los props
    handleClick = (event) => {
        this.setState({
            age: this.state.age + 1,
        })
    }

    render() {
        const { avatar, name } = this.props
        const { age } = this.state
        return createElement('div',{
            class: 'user',
            onClick: this.handleClick,
            children: [
                createElement('div',{
                    class: 'avantar',
                    children: createElement('img', {
                        src: avatar
                    })
                }),
                createElement('h2', null, `Hola soy ${name} y mi edad es ${age}`),
            ]
        })
    }
}

export default User 

/*
Recreando React y React DOM

Seguro has usado el método render de ReactDOM o un Component de React, en esta clase no solo los vamos a usar, antes los vamos a crear con todo lo aprendido previamente en este curso. 

33.
Soporte de Eventos en componentes


Gracias a createElement podremos pasar propiedades de evento e interpretarlas internamente para volverlas eventos del DOM.
*/
