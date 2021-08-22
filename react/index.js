import { render } from './lib/react-dom.js'
import User from './components/user.js';
const container = document.querySelector('#root')

render(new User({
    avatar: './img/ash.jpg',
    name: 'Ash',
}), container)
