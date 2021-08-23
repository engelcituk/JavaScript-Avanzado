class Component {
    constructor(props = {}, state = {} ){
        this.props = props
        this.state = state
    }

    update(){}
    
    #updater(){
        this.update( this.render() )
        this.componentDidUpdate()
    }
    //Se llama antes de que se renderice el componente
    componentWillMount(){

    }
    //Se llama cuando el componente se ha renderizado
    componentDidMount(){

    }
    //Se llama cuando el componente se ha actualizado
    componentDidUpdate(){

    }

    setState(newState){
        this.state = {
            ...this.state, 
            ...newState
        }
        this.#updater()
    }
    build(){
        this.componentWillMount()
        return this.render()
    }
}

export { 
    Component 
}
/*

35.
Añadiendo el ciclo de vida

El ciclo de vida nos podrá comunicar los diversos comportamientos de un componente basados en su contexto, como saber si este componente es visible ya en el navegador o si se ha actualizado.
*/