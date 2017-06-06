import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface User {
    firstName: string
    lastName: string
}

const user: User = {
    firstName: 'Harper',
    lastName: 'Perez'
}

function formatName(user: User) {
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user?: User) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
    Math.random() > 0.5 ? getGreeting(user) : getGreeting(),
    document.getElementById('root')
);
