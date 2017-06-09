import * as React from 'react'

function ListItem(props: { value: number }) {
    const value = props.value
    return (
        <li>{value}</li>
    )
}

function NumberList(props: { numbers: number[] }) {
    const numbers = props.numbers
    const listItems = numbers.map(number =>
        <ListItem key={number} value={number} />
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