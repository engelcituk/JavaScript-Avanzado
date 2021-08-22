import { Component, createElement } from './../lib/react/index.js'

class User extends Component {
    render() {
        const { avatar, name } = this.props
        return createElement('div',{
            class: 'user',
            children: [
                createElement('div',{
                    class: 'avantar',
                    children: createElement('img', {
                        src: avatar
                    })
                }),
                createElement('h2', null, name),
            ]
        })
    }
}

export default User 

/*
Recreando React y React DOM

Seguro has usado el método render de ReactDOM o un Component de React, en esta clase no solo los vamos a usar, antes los vamos a crear con todo lo aprendido previamente en este curso. */