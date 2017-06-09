import * as React from 'react'

export class NameForm extends React.Component<{}, { value: string }> {
    constructor(props: {}) {
        super(props)

        this.state = { value: '' }
    }

    handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        alert(`A name was submitted:` + this.state.value.toLocaleUpperCase())
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}