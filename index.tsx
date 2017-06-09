import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Toggle } from './Toggle'
import { Clock } from './Clock'
import { ActionLink } from './ActionLink'
import { LoginControl } from './LoginControl'
import { MailBoxWarp } from './MailBox'
import { Page } from './Page'
import { List } from './List'

function App() {
    return (
        <List />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
