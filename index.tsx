import * as React from 'react'
import * as ReactDOM from 'react-dom'

function Welcome(props: { name: string }) {
    return <h1>Hello, {props.name}</h1>
}

function formatDate(date: Date) {
    return date.toLocaleDateString()
}

interface AuthorProp {
    name: string
    avatarUrl: string
}
interface CommentProp {
    author: AuthorProp
    text: string
    date: Date
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

const comment: CommentProp = {
    date: new Date(),
    text: '这是一条评论',
    author: {
        name: 'aroa',
        avatarUrl: 'http://1.gravatar.com/avatar/6141af411a46e8732f95129f49be620b'
    }
}

function Clock(props: { date: Date }) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)
