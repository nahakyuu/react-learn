import * as React from 'react'

function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>
}

export function Greeting(props: { isLoggedIn: boolean }) {
    const isLoggedIn = props.isLoggedIn
    return (
        <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    )
}
