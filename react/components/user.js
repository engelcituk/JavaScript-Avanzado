import { Component } from './../lib/react.js'

class User extends Component {
    render() {
        const { avatar, name } = this.props
        return `
            <div class="user">
                <div class="avatar">
                    <img src="${avatar}" alt="">
                </div>
                <h2>${name}</h2>
            </div>
        `
    }
}

export default User 

/*
Recreando React y React DOM

Seguro has usado el método render de ReactDOM o un Component de React, en esta clase no solo los vamos a usar, antes los vamos a crear con todo lo aprendido previamente en este curso. */