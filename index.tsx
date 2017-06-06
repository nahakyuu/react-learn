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

const element =
    <h1>
        Hello, {formatName(user)}!
    </h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);
