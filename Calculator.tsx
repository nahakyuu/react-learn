import * as React from 'react'

interface BoilingProp {
    celsius: number
}

interface CalculatorState {
    temperature: string
}

function BoilingVerdict(props: BoilingProp) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

export class Calculator extends React.Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props)
        this.state = { temperature: '' }
    }

    handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({ temperature: event.target.value })
    }

    render() {
        const temperature = this.state.temperature
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input type="text"
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}