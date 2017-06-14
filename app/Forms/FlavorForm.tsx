import * as React from 'react'

export class FlavorForm extends React.Component<{}, { value: string }> {
    constructor(props: {}) {
        super(props)

        this.state = {
            value: 'cocount'
        }
    }

    handleChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        alert(`Your favorite flavor is:` + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}