import * as React from 'react'

export const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

interface BoilingProp {
    celsius: number
}
function BoilingVerdict(props: BoilingProp) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

interface IConvert {
    (n: number): number
}

const toCelsius: IConvert = fahrenheit => {
    return (fahrenheit - 32) * 5 / 9
}

const toFahrenheit: IConvert = celsius => {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature: string, convert: IConvert) {
    const input = parseFloat(temperature)
    if (isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

export type ScaleName = keyof typeof scaleNames

export type TemperatureChangeEventHandler = (temperature: string) => void

export interface TemperatureInputProp {
    scale: ScaleName
    temperature: string
    onTemperauureceChange: TemperatureChangeEventHandler
}

export interface TemperatureInputState {
    temperature: string
}

export class TemperatureInput extends React.Component<TemperatureInputProp, TemperatureInputState> {
    constructor(props: TemperatureInputProp) {
        super(props)
        this.state = { temperature: '' }
    }

    handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.props.onTemperauureceChange(event.target.value)
    }

    render() {
        const temperature = this.props.temperature
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

export interface CalculatorState {
    temperature: string
    scale: ScaleName
}

export class Calculator extends React.Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props)
        this.state = { temperature: '', scale: 'c' }
    }

    handleCelsiusChange: TemperatureChangeEventHandler = temperature => {
        this.setState({ scale: 'c', temperature })
    }

    handleFahrenheitChange: TemperatureChangeEventHandler = temperature => {
        this.setState({ scale: 'f', temperature })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperauureceChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperauureceChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}