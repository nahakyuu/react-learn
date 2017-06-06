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

const xssTestText = '<script>alert("xss")</script>'
function getGreeting(user?: User) {
    if (user) {
        const element = <img src={user.avatarUrl} />
        return (
            <div>
                <h1>{element}Hello, {formatName(user)}!</h1>
                <h2>Good to see you here.</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>Hello, Stranger.</h1>
            <div>{xssTestText}</div>
        </div>
    )
}

ReactDOM.render(
    Math.random() > 0.5 ? getGreeting(user) : getGreeting(),
    document.getElementById('root')
)
