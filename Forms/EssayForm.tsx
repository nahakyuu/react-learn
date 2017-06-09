import * as React from 'react'

export class EssayForm extends React.Component<{}, { value: string }> {
    constructor(props: {}) {
        super(props)

        this.state = {
            value: 'Please Write an essay about your favorite DOM element.'
        }
    }

    handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        alert(`A essay was submitted:` + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}