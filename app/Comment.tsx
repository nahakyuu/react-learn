import * as React from 'react'

interface AuthorProp {
    name: string
    avatarUrl: string
}

interface CommentProp {
    author: AuthorProp
    text: string
    date: Date
}

function formatDate(date: Date) {
    return date.toLocaleDateString()
}

const comment: CommentProp = {
    date: new Date(),
    text: '这是一条评论',
    author: {
        name: 'aroa',
        avatarUrl: 'http://1.gravatar.com/avatar/6141af411a46e8732f95129f49be620b'
    }
}


function Avatar(author: AuthorProp) {
    return (
        <img className="Avatar"
            src={author.avatarUrl}
            alt={author.name}
        />
    )
}

function UserInfo(author: AuthorProp) {
    return (
        <div className="UserInfo">
            <Avatar {...author} />
            <div className="UserInfo-name">
                {author.name}
            </div>
        </div>
    )
}

function Comment(comment: CommentProp) {
    return (
        <div className="Comment">
            <UserInfo {...comment.author} />
            <div className="Comment-text">
                {comment.text}
            </div>
            <div className="Comment-date">
                {formatDate(comment.date)}
            </div>
        </div>
    )
}

function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>
}

export function Greeting(props: { isLoggedIn: boolean }) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}
