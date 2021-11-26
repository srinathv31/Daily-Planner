// Source Imports
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskData from "../data/TaskData";

// Component Imports
import TaskCard from "./TaskCard";

// Design Imports


export default function DailyBoard(): JSX.Element {
    return(
        <Container data-testid="board">
            <Row data-testid="board-row-1" xs={1} md={3}>
                {TaskData.map(TaskData =>
                    <Col >
                        <TaskCard
                            task={TaskData}
                        ></TaskCard>
                    </Col>
                )}
            </Row>
        </Container>
    );
}