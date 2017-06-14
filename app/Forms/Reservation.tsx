import * as React from 'react'

interface ReservationState {
    isGoing: boolean
    numberOfGuests: number | string
    [index: string]: number | string | boolean
}

export class Reservation extends React.Component<{}, ReservationState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
    }

    handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <div>{`${this.state.isGoing}, ${this.state.numberOfGuests}`}</div>
            </form>
        )
    }
}