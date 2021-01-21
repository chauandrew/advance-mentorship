import {React} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import AdvisorsIcon from './advisors-icon.png'
import MentorsIcon from './mentors-icon.png'

const Who = () => {
    return (
        <Container fluid className="w-100 p-5 text-center" style={{backgroundColor: "white"}}>
            <Row>
                <Col>
                    <h1 className="font-weight-700">WHO WE ARE</h1>
                </Col>
            </Row>
            <Row>
                <Col md={2} /> {/* for spacing */}
                <Col className="mt-3" md={3}>
                    <img className="" src={AdvisorsIcon} />
                    <h5 className="font-weight-600 mt-3">ADVISORS</h5>
                    <p>
                        Our professional advisors are graduates from universities such as UC Berkeley, UCLA, UT Austin, University of Minnesota, University of Washington, and Harvey Mudd who are now working professionals at well-respected companies. Each mentor has several years of experience advising students.
                    </p>
                    <Button href="/advisors" className="bg-theme-dark text-theme-light">
                        MEET OUR ADVISORS</Button>
                </Col>
                <Col md={2} /> {/* for spacing */}
                <Col className="mt-3" md={3}>
                    <img className="" src={MentorsIcon} />
                    <h5 className="font-weight-600 mt-3">COLLEGE MENTORS</h5>
                    <p>
                        Our college mentors are current upperclassmen who are passionate about mentorship, sharing their knowledge, and building meaningful relationships. We are all here to support you on your college journey.
                    </p>
                    <Button href="/mentors" className="bg-theme-dark text-theme-light">
                        MEET OUR MENTORS</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Who;