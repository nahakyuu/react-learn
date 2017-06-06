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

function Welcome(props: { name: string }) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="aroa" />
            <Welcome name="aoi" />
            <Welcome name="apple" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
