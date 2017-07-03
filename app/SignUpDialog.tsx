import * as React from 'react'

import { Dialog } from './Dialog'

export class SignUpDialog extends React.Component<{}, { login: string }> {
    constructor(props: {}) {
        super(props)
        this.state = { login: '' }
    }
    render() {
        return (
            <Dialog title='Mars Exloration Program'
                message='How should we refer to you?'>
                <input value={this.state.login}
                    onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        )
    }

    handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({ login: event.target.value })
    }
    handleSignUp: React.MouseEventHandler<HTMLButtonElement> = event => {
        alert(`Welcome aboard, ${this.state.login}`)
    }
}
