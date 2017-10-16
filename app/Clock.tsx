import * as React from 'react'

export interface DateProp {
    date: Date
}

export type DateState = DateProp

function FormattedDate(props: DateProp) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

export class Clock extends React.Component<{}, DateState> {
    timerID: number
    constructor(props: {}) {
        super(props)
        this.state = { date: new Date() }
    }
    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}