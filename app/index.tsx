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
import { Reservation } from './Forms/Reservation'
import { Calculator } from './Calculator'
import { WelcomeDialog } from './WelcomeDialog'
import { SplitPane } from './SplitPane'
import { SignUpDialog } from './SignUpDialog'

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function App() {
    return (
        <SignUpDialog />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
