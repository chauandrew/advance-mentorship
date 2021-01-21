import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './style.css'

const Program = () => {
    return (
        <Container className="full-screen">
            <h1 className="text-theme-tan font-weight-500">The Mentorship Journey</h1>
            <div>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src="https://images.squarespace-cdn.com/content/v1/5fed661250339566e9b294d3/1609673277171-CMHPTYSC4I5F68SC4XYP/ke17ZwdGBToddI8pDm48kN3T9SxbiRQr1PJzz7qdcyBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI0haGQu8WJ9ULU6PALUsEJErEd1hR55W9Bq4Q0kxRInQ/journey-01.png" />   
                            </div>
                            <div style={description}>
                                <h4 className="text-theme-tan">
                                    APPLY
                                </h4>
                                <p className="text-theme-light" style={description}>
                                    Submit your application here and choose from one of our five personalized tracks below.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src="https://images.squarespace-cdn.com/content/v1/5fed661250339566e9b294d3/1609673280319-DOE1FZULRAWUP9XMHLL5/ke17ZwdGBToddI8pDm48kN3T9SxbiRQr1PJzz7qdcyBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI0haGQu8WJ9ULU6PALUsEJErEd1hR55W9Bq4Q0kxRInQ/journey-02.png" />   
                            </div>
                            <div style={description}>
                                <h4 className="text-theme-tan">
                                    ATTEND A MEET & GREET ORIENTATION
                                </h4>
                                <p className="text-theme-light" style={description}>
                                    After you apply, you will receive an email with the times and dates for a &quot;Meet & Greet&quot; orientation. If you do not get an email with the orientation dates within a week of applying, please contact us.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src="https://images.squarespace-cdn.com/content/v1/5fed661250339566e9b294d3/1609673309876-ZAVLRKT3AR597L0103WD/ke17ZwdGBToddI8pDm48kN3T9SxbiRQr1PJzz7qdcyBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI0haGQu8WJ9ULU6PALUsEJErEd1hR55W9Bq4Q0kxRInQ/journey-03.png" />   
                            </div>
                            <div style={description}>
                                <h4 className="text-theme-tan">
                                    MEET YOUR MENTOR AND PROFESSIONAL ADVISOR
                                </h4>
                                <p className="text-theme-light" style={description}>
                                    After orientation, you will be paired with a professional advisor and, depending on your track, a college mentor. Meet with your advisor once a week for 6 weeks, in person or online.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src="https://images.squarespace-cdn.com/content/v1/5fed661250339566e9b294d3/1609673323990-ZJKU5DXFZ4IJXAP0EMEC/ke17ZwdGBToddI8pDm48kN3T9SxbiRQr1PJzz7qdcyBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI0haGQu8WJ9ULU6PALUsEJErEd1hR55W9Bq4Q0kxRInQ/journey-04.png" />   
                            </div>
                            <div style={description}>
                                <h4 className="text-theme-tan">
                                    YOU DECIDE!
                                </h4>
                                <p className="text-theme-light" style={description}>
                                    After 6 weeks, you and your advisor can decide how frequently you want to meet. You can also consider getting involved in our community service projects or internships, or end your mentorship journey here.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <h1 className="text-theme-tan font-weight-500">Mentorship Tracks</h1>
            <div>
                <p className="text-theme-light">
                    We understand that everyone’s journey and needs are unique. \
                    Personalize your mentorship experience by choosing one or all of our five tailored tracks below. \
                    If you’d like to mix topics from 2 or more tracks, please let your advisor know at your meet & greet orientation.
                </p>
                <div style={trackList}>
                <Row sm={1} lg={3}>
                    <Col className="hover-wrapper">
                        <p className="program-card text-theme-light" style={allThingsCollege}>
                            ALL THINGS COLLEGE
                        </p>
                        <div className="overlay">
                            <div className="overlay-text">
                                <b>EXAMPLE TOPICS</b>
                                <br />Getting Rec. Letters
                                <br />On-Campus Job
                                <br />Deciding My Major 
                                <br />Finding an Internship
                                <br />Finding Housing
                                <br />Time Management
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <p className="programCard text-theme-light" style={allThingsCollege}>
                            ALL THINGS COLLEGE
                        </p>
                    </Col>
                    <Col >
                        <p className="programCard text-theme-light" style={allThingsCollege}>
                            ALL THINGS COLLEGE
                        </p>
                    </Col>
                </Row>
                <Row sm={1} lg={3}>
                    <Col >
                        <p className="programCard text-theme-light" style={allThingsCollege}>
                            ALL THINGS COLLEGE
                        </p>
                    </Col>
                    <Col >
                        <p className="programCard text-theme-light" style={allThingsCollege}>
                            ALL THINGS COLLEGE
                        </p>
                    </Col>
                    <Col >
                        <p className="programCard text-theme-light" style={allThingsCollege}>
                            ALL THINGS COLLEGE
                        </p>
                    </Col>
                </Row>
                </div>
            </div>
        </Container>
    )
}

const phase = {
    width: "100%",
};

const icon = {
    width: "100%",
    height: "auto",
};

const iconContainer = {
    padding: "1em",
};

const description = {
    textAlign: "center",
    padding: "10%",
    width: "100%",
};

const allThingsCollege = {
    backgroundImage: "url('https://static1.squarespace.com/static/5fed661250339566e9b294d3/t/5ffec29f72238a5c80eaa4a8/1610531489103/allthingscollege.png')",
}

const trackList = {
    marginTop: "2%",
    marginBottom: "2%",
}

export default Program;