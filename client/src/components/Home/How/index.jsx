import { React } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import Flowchart from './flowchart.png'

const How = () => {
    return (
        <Container fluid className="w-100 text-center p-5">
            <Row>
                <Col>
                    <h1 className="text-theme-tan font-weight-600">
                        HOW IT WORKS</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <img className="w-100" src={Flowchart} alt="mentorship-path-flowchart" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button className="mr-5 ml-5 mt-2" href="/campuses">OUR CAMPUSES</Button>
                    <Button className="ml-5 mr-5 mt-2" href="/program">OUR PROGRAM</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default How;