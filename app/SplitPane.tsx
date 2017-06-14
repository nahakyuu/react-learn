import * as React from 'react'

interface SplitPaneProp {
    left: React.ReactNode
    right: React.ReactNode
}

export function SplitPane(props: SplitPaneProp) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
