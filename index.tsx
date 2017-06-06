import * as React from 'react'
import * as ReactDOM from 'react-dom'

function Welcome(props: { name: string }) {
    return <h1>Hello, {props.name}</h1>
}

function formatDate(date: Date) {
    return date.toLocaleDateString()
}

interface CommentProp {
    author: {
        name: string
        avatarUrl: string
    }
    text: string
    date: Date
}

function Comment(props: CommentProp) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
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

ReactDOM.render(
    <Comment {...comment} />,
    document.getElementById('root')
)
