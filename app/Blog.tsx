import * as React from 'react'

interface PostProp {
    id: number
    title: string
    content: string
}

function Post(props: PostProp) {
    const { title, content } = props
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

function Blog(props: { posts: PostProp[] }) {
    const sidebar =
        <ul>
            {
                props.posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    const content = props.posts.map(post =>
        <Post key={post.id} {...post} />
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts: PostProp[] = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can instaqll React from npm.' }
]
export function BlogWarp() {
    return <Blog posts={posts} />
}