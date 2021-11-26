// Source Imports
import React from "react";
import { Button, Card, FloatingLabel, FormControl, InputGroup, Form } from "react-bootstrap";
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

    function defineTask(id: number, enteredTask: string) {
        const taskMapBuffer = {...taskMap};
        taskMapBuffer["Mon"].forEach(task => {
            if(task.id === id) {
                task.task = enteredTask;
            }
        });
        setTaskMap(taskMapBuffer);
    }

    const handleSubmit = (id: number) => (event: { preventDefault: () => void; stopPropagation: () => void; currentTarget: any; }) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        defineTask(id, form.floatingInput.value)
      };

    return(
        <Card className="card" style= {{ width: "100%" }}>
            <Card.Header>{task.priority}</Card.Header>
            <button className="priority-button" onClick={() => deleteTask(task.id)}>
                <FcSportsMode></FcSportsMode>
            </button>
            <Card.Title className="card-title">
                <Form onSubmit={handleSubmit(task.id)}>
                    <Form.Control 
                        style={{
                            color: "black",
                            outline: "0",
                            border: "1px solid #fff",
                            boxShadow: "none",
                            textAlign: "center"
                        }} 
                        id="floatingInput" 
                        type="task" 
                        placeholder={ task.task === "" ? "Enter Task" : task.task }
                    />
                </Form>
            </Card.Title>
        </Card>
    );
}
