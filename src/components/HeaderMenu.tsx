// Source Imports
import React from "react";

// Design Imports
import { Nav } from "react-bootstrap";

export default function HeaderMenu(): JSX.Element {
    return(
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="mon">Monday</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Tuesday</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="wed">
                Wednesday
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="thurs">
                Thursday
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="fri">
                Friday
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="sat">
                Saturday
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="sun">
                Sunday
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
