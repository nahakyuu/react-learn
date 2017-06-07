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

interface DateProp {
    date: Date
}

type DateState = DateProp

interface ToggleState {
    isToggleOn: boolean
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
function FormattedDate(props: DateProp) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component<{}, DateState> {
    timerID: number
    constructor(props: {}) {
        super(props)
        this.state = { date: new Date() }
    }
    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

function ActionLink() {
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        alert('The link was clicked')
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

class Toggle extends React.Component<{}, ToggleState> {
    constructor(props: {}) {
        super(props)
        this.state = { isToggleOn: true }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

function App() {
    return (
        <div>
            <Toggle />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
