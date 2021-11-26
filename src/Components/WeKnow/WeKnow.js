import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './WeKnow.css'

const WeKnow = () => {
    return(
        <div className="WeKnow">
            <Container fluid>
                <Row>
                    <Col>
                        <div className='Text1'>
                            We Know
                        </div>
                    </Col>
                    <Col>
                        <div className='Text2'>
                        That Indonesia does not lack of human resources who are able to develop electronic and machine technology
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WeKnow