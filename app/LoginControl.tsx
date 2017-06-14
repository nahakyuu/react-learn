import * as React from 'react'

import { Greeting } from './Greeting'

interface OnClickProp<T> {
    onClick: React.MouseEventHandler<T>
}

function LoginButton(props: OnClickProp<HTMLButtonElement>) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props: OnClickProp<HTMLButtonElement>) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

export class LoginControl extends React.Component<{}, { isLoggedIn: boolean }> {
    constructor(props: {}) {
        super(props)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LogoutButton onClick={this.handleLoginClick} />
                }
            </div>
        )
    }
}