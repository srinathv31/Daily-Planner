// Source Imports
import React from "react";
import { Card } from "react-bootstrap";
// import TaskData from "../data/TaskData";
import { Task } from "../interfaces/Task";

// Design Imports
import "../css/TaskCard.css";
import { FcSportsMode } from "react-icons/fc";

export default function TaskCard({ task, setTaskMap, taskMap }: {
    task: Task,
    setTaskMap: (t: Record<string, Task[]>) => void, taskMap: Record<string, Task[]>
}): JSX.Element {

    function deleteTask(id: number) {
        const taskMapBuffer = {...taskMap};
        taskMapBuffer["Mon"] = taskMapBuffer["Mon"].filter(task => task.id !== id);
        setTaskMap(taskMapBuffer);
    }

    return(
        <Card className="card" style= {{ width: "100%" }}>
            <Card.Header>{task.priority}</Card.Header>
            <button className="priority-button" onClick={() => deleteTask(task.id)}>
                <FcSportsMode></FcSportsMode>
            </button>
            <Card.Title className="card-title">{task.task}</Card.Title>
        </Card>
    );
}
