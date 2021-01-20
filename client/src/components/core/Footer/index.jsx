import { React } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid className="bg-theme-orange">
            <Row className="text-center p-3">
                <Col sm={1}></Col> {/* For spacing */}
                <Col sm={2}>
                    <h3 className="font-weight-200">About Us</h3>
                    <a className="text-theme-dark font-small" href="/advisors">Professional Advisors</a><br />
                    <a className="text-theme-dark font-small" href="/mentors">College Mentors</a><br />
                </Col>
                <Col sm={2}>
                    <h3 className="font-weight-200">Learn</h3>
                    <a className="text-theme-dark font-small" href="/program">Program</a><br />
                    <a className="text-theme-dark font-small" href="/campuses">Campuses</a><br />
                </Col>
                <Col sm={2}>
                    <h3 className="font-weight-200">Legal</h3>
                    <a className="text-theme-dark font-small" href="/terms-of-use">Terms Of Use</a><br />
                    <a className="text-theme-dark font-small" href="/privacy">Privacy Policy</a><br />
                    <a className="text-theme-dark font-small" href="/code-of-conduct">Code of Conduct</a><br />
                </Col>
                <Col sm={2}>
                    <h3 className="font-weight-200">Contact</h3>
                    <a className="text-theme-dark font-small" href="mailto:info@advancementorship.org">Email Us</a><br />
                </Col>
                <Col sm={2} className="">
                    <Button className="bg-theme-dark text-theme-light my-auto"
                        href="/apply">APPLY NOW</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
