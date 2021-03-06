import styled from './../lib/styled-components.js'
import { Component } from './../lib/react.js'

const UserStyled = styled.div`
    background-image: linear-gradient(to bottom, #f9f9f9 0%, #f9f9f9 130px,rgba(0,0,0,.15) 130px, rgba(0,0,0,.15) 131px, white 131px, white 100%);
    text-align: center;
    overflow: hidden;
    padding: 20px;
    font-family: system-ui;
    border-radius: .3rem;
    box-shadow: 0 0 1px rgba(0,0,0,.5);
    cursor: pointer;
    user-select: none;
`

const AvatarStyled = styled.img`
    max-width: 150px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 2px black;
`

class User extends Component {
    render() {
        const { avatar, name } = this.props
        return `
            ${UserStyled(`
                ${AvatarStyled(`
                    src="${avatar}"
                `)}
                <h2>${name}</h2>
            `)}
        `
    }
}

export default User 

/*
Añadiendo nuestros Styled Components

Nuestro React es un éxito, ahora añadamos a mi librería favorita para acompañar a React, Styled Components ¡Ah, ya está lista! solo es cuestión de ponerla a prueba.
*/