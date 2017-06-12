import * as React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

type ScaleName = keyof typeof scaleNames

interface TemperatureInputProp {
    scale: ScaleName
}

interface TemperatureInputState {
    temperature: string
}
export class TemperatureInput extends React.Component<TemperatureInputProp, TemperatureInputState> {
    constructor(props: TemperatureInputProp) {
        super(props)
        this.state = { temperature: '' }
    }

    handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.setState({ temperature: event.target.value })
    }

    render() {
        const temperature = this.state.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text"
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export class Calculator extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                {
                    Object.keys(scaleNames).map((scale: ScaleName) =>
                        <TemperatureInput scale={scale} />
                    )
                }
            </div>
        )
    }
}