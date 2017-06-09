import * as React from 'react'

interface WarningProp {
    warn: boolean
}

interface PageState {
    showWarning: boolean
}

function WarningBanner(props: WarningProp) {
    if (!props.warn) {
        return null
    }
    return (
        <div className="warning">Warnng!</div>
    )
}

export class Page extends React.Component<{}, PageState> {
    constructor(props: {}) {
        super(props)
        this.state = { showWarning: true }
    }

    handleToggleClick = () => {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}