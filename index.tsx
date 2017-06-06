import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface User {
    firstName: string
    lastName: string
    avatarUrl: string
}

const user: User = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'http://1.gravatar.com/avatar/6141af411a46e8732f95129f49be620b'
}

function formatName(user: User) {
    return `${user.firstName} ${user.lastName}`
}

function tick() {
    const element =
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}
setInterval(tick, 1000)