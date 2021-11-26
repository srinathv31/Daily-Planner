// Source Imports
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TaskData from "../data/TaskData";
import { Task } from "../interfaces/Task";

// Component Imports
import TaskCard from "./TaskCard";

// Design Imports


export default function DailyBoard({ setTaskMap, taskMap }: {
    setTaskMap: (t: Record<string, Task[]>) => void, taskMap: Record<string, Task[]>
}): JSX.Element {
    // const [visible, setVisible] = useState<boolean>(false);
    
    function CreateTask() {
        const taskMapBuffer = {...taskMap};
        // !visible && setVisible(true);
        taskMapBuffer["Mon"].push(TaskData[TaskData.length] = {id: TaskData.length, task: "New Task", priority: "!"});
        setTaskMap(taskMapBuffer);
    }

    return(
        <div>
            <Button onClick={() => CreateTask()}>Create Task</Button>

            <Container data-testid="board">
                <Row data-testid="board-row-1">
                    {taskMap["Mon"].map(task =>
                        <Col key={task.id}>
                            <TaskCard
                                task={task}
                                setTaskMap={setTaskMap}
                                taskMap={taskMap}
                            ></TaskCard>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}