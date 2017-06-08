import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Greeting } from './Greeting'
import { Toggle } from './Toggle'
import { Clock } from './Clock'
import { ActionLink } from './ActionLink'

function App() {
    return (
        <div>
            <Greeting isLoggedIn={true} />
            <Clock />
            <Toggle />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
