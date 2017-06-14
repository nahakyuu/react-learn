import * as React from 'react'

export function ActionLink() {
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