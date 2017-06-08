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

        let button: React.ReactElement<OnClickProp<HTMLButtonElement>>
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LogoutButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}