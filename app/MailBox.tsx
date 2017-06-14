import * as React from 'react'

function MailBox(props: { unreadMessage: string[] }) {
    const unreadMessages = props.unreadMessage
    return (
        <div>
            <h1>Hello!</h1>
            {
                unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread Messages.
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'Re: React', 'Re:Re: React']

export function MailBoxWarp() {
    return (
        <MailBox unreadMessage={messages} />
    )
}