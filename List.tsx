import * as React from 'react'

function NumberList(props: { numbers: number[] }) {
    const numbers = props.numbers
    const listItems = numbers.map(number =>
        <li key={number.toString()}>{number}</li>
    )

    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5, 6]

export function NumberListWarp() {
    return (
        <NumberList numbers={numbers} />
    )
}

const todos: { id: number, text: string }[] = []

const todoItems = todos.map(todo =>
    <li key={todo.id}>
        {todo.text}
    </li>
)