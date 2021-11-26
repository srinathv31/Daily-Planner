// Source Imports
import React, { useState } from "react";
import { Card } from "react-bootstrap";
// import TaskData from "../data/TaskData";
import { Task } from "../interfaces/Task";

// Design Imports
import "../css/TaskCard.css";
import { FcSportsMode } from "react-icons/fc";

export default function TaskCard({ task }: {
    task: Task
}): JSX.Element {

    const [headerVisible, setHeaderVisible] = useState<boolean>(false);

    return(
        <Card className="card" style= {{ width: "100%" }}>
            <Card.Header>{task.priority}</Card.Header>
            <button className="priority-button" onClick={() => setHeaderVisible(!headerVisible)}>
                <FcSportsMode></FcSportsMode>
            </button>
            <Card.Title className="card-title">{task.task}</Card.Title>
        </Card>
    );
}
