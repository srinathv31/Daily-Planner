// Source Imports
import React from "react";

// Component Imports

// Design Imports

export default function TaskInput({ setTask }: {
    setTask: (t: string) => void
}): JSX.Element {
    return(
        <div>
            <input className="text_input" data-testId="input-title" type="title" placeholder="Enter Title" onChange={event => setTask(event.target.value)}/>
        </div>
    );
}