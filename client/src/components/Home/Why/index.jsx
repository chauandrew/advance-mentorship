import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import StockPhoto from './why-advanced.jpeg'


const Why = () => {
    return (
        <Container fluid className="p-5" style={{backgroundColor: "white"}}>
            <Row>
                <Col lg={1} />
                <Col lg={5}>
                    <h1 className="font-weight-700 text-center">WHY ADVANCE?</h1>
                    <p>
                        College presents opportunities for to advance your career and form lifelong relationships – which means it isn’t meant to be done alone.
                    </p>
                    <p>
                        ADVANCE has the goal to help you:
                    </p>
                    <ul>
                        <li>Grow your network</li>
                        <li>Expand your skills</li>
                        <li>Receive 1-1 attention from a professional in your field</li>
                        <li>Connect with others on a national scale</li>
                    </ul>
                    <p>
                        No matter where you are in your academic and professional journey, we have a place for you. Our volunteer mentors are here to guide you through your college experience and walk with you along the way.
                    </p>
                </Col>
                <Col lg={5}>
                    <img className="w-100" src={StockPhoto} alt="work-photo" />
                </Col>
            </Row>
        </Container>
    )
}

export default Why;