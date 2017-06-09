import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Toggle } from './Toggle'
import { Clock } from './Clock'
import { ActionLink } from './ActionLink'
import { LoginControl } from './LoginControl'
import { MailBoxWarp } from './MailBox'
import { Page } from './Page'
import { NumberListWarp } from './List'
import { BlogWarp } from './Blog'
import { NameForm } from './Forms/NameForm'
import { EssayForm } from './Forms/EssayForm'
import { FlavorForm } from './Forms/FlavorForm'

function App() {
    return (
        <FlavorForm />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
