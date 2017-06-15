import * as React from 'react'

export function FancyBorder(props: { children: React.ReactNode, color: string }) {
    return (
        <div className={`FancyBorder FancyBorder-${props.color}`}>
            {props.children}
        </div>
    )
}
