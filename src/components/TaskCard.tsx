// Source Imports
import React, { useState } from "react";
import { Button, Card, FloatingLabel, FormControl, InputGroup, Form, Badge } from "react-bootstrap";
// import TaskData from "../data/TaskData";
import { Task } from "../interfaces/Task";

// Design Imports
import "../css/TaskCard.css";
import { FcSportsMode } from "react-icons/fc";
import { motion } from "framer-motion";

export default function TaskCard({ task, setTaskMap, taskMap }: {
    task: Task,
    setTaskMap: (t: Record<string, Task[]>) => void, taskMap: Record<string, Task[]>
}): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);

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
        setEditMode(false);
    }

    function togglePriority(task: Task) {
        const taskMapBuffer = {...taskMap};
        taskMapBuffer["Mon"].forEach(taskBuffer => {
            if(taskBuffer === task) {
                if (task.priority === "!!!") {
                    task.priority = " ";
                }
                else if (task.priority === " ") {
                    task.priority = "!";
                }
                else if (task.priority === "!") {
                    task.priority = "!!";
                }
                else if (task.priority === "!!") {
                    task.priority = "!!!";
                }
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
        <motion.div
            onHoverEnd={() => setEditMode(false)}
        >
            <Card className="card" style= {{ width: "25vh", height: "20vh", display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center" }}>
                <Badge
                    onClick={() => togglePriority(task)} 
                    style={
                        
                        {
                        padding: task.priority === " " ? "1em 1em" : "0.35em 0.65em",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        margin: "5%",
                        cursor: "pointer"
                    }} 
                    bg={ task.priority === " " ? "light" : task.priority === "!" ? "success" : task.priority === "!!" ? "warning" : "danger"}
                >{task.priority}</Badge>
                <button className="priority-button" onClick={() => deleteTask(task.id)}>
                    <FcSportsMode></FcSportsMode>
                </button>
                <motion.div
                    onClick={() => setEditMode(!editMode)}
                >
                    <Card.Title className="card-title">
                        { !editMode && task.task}
                        { (task.task === "" || editMode) && <Form onSubmit={handleSubmit(task.id)}>
                            <Form.Control 
                                style={{
                                    color: "black",
                                    outline: "0",
                                    border: "1px solid #fff",
                                    boxShadow: "none",
                                    textAlign: "center",
                                    
                                }}
                                autoFocus
                                size="lg" 
                                id="floatingInput" 
                                type="task" 
                                placeholder={ task.task === "" ? "Enter Task" : task.task }
                            />
                        </Form> }
                    </Card.Title>
                </motion.div>
            </Card>
        </motion.div>
    );
}
