import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Toggle } from './Toggle'
import { Clock } from './Clock'
import { ActionLink } from './ActionLink'
import { LoginControl } from './LoginControl'

function App() {
    return (
        <LoginControl />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
