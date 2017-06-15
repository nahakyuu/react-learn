import * as React from 'react'

import { FancyBorder } from './FancyBorder'

export function Dialog(props: { title: string, message: string, children?: React.ReactNode }) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}