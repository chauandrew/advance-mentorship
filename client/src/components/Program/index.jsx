import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import journey1 from './assets/journey-01.png';
import journey2 from './assets/journey-02.png';
import journey3 from './assets/journey-03.png';
import journey4 from './assets/journey-04.png';
import allthingscollege from './assets/allthingscollege.png';
import adulting from './assets/adulting-101.png';
import careerfoundation from './assets/careerFoundation.png';
import eq101 from './assets/eq101.png';
import leadership from './assets/leadership-x.png';
import guidetograd from './assets/guide-to-grad-school.png';

import './style.css';

const Program = () => {
    return (
        <Container className="full-screen pt-7 pb-10">
            <h1 className="text-theme-tan font-weight-400 pb-3">The Mentorship Journey</h1>
            <div>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src={journey1} />   
                            </div>
                            <div style={description}>
                                <h4 className="text-theme-tan">
                                    APPLY
                                </h4>
                                <p className="text-theme-light" style={description}>
                                    Submit your application <a className="text-theme-yellow" href="/apply">here</a> and choose from one of our five personalized tracks below.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src={journey2} />   
                            </div>
                            <div style={description}>
                                <h4 className="text-theme-tan">
                                    ATTEND A MEET & GREET ORIENTATION
                                </h4>
                                <p className="text-theme-light" style={description}>
                                    After you apply, you will receive an email with the times and dates for a &quot;Meet & Greet&quot; orientation. If you do not get an email with the orientation dates within a week of applying, please <a className="text-theme-yellow" href="mailto:info@advancementorship.org">contact us</a>.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <div style={phase}>
                            <div style={iconContainer}>
                                <img style={icon} src={journey3} />   
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
                                <img style={icon} src={journey4} />   
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
            <h1 className="text-theme-tan font-weight-400 pb-3">Mentorship Tracks</h1>
            <div>
                <p className="text-theme-light">
                    We understand that everyone’s journey and needs are unique.
                    Personalize your mentorship experience by choosing one or all of our five tailored tracks below.
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
                    <Col className="hover-wrapper">
                        <p className="program-card text-theme-light" style={careerFoundations}>
                            CAREER FOUNDATIONS
                        </p>
                        <div className="overlay">
                            <div className="overlay-text">
                                <b>EXAMPLE TOPICS</b>
                                <br />Resume Review/Tips
                                <br />Interview Prep & Practice
                                <br />Job Searching
                                <br />Building Professional Relationships
                                <br />Developing Online Presence
                            </div>
                        </div>
                    </Col>
                    <Col className="hover-wrapper">
                        <p className="program-card text-theme-light" style={Adulting}>
                            ADULTING 101
                        </p>
                        <div className="overlay">
                            <div className="overlay-text">
                                <b>EXAMPLE TOPICS</b>
                                <br />5 Ingredients, 5 Meals
                                <br />Meals with a Microwave
                                <br />Groceries on a Budget
                                <br />6 Eggscellent Dishes
                                <br />Basic Home & Car Repairs
                                <br />Taxes
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row sm={1} lg={3}>
                <Col className="hover-wrapper">
                        <p className="program-card text-theme-light" style={EQ}>
                            EQ 101
                        </p>
                        <div className="overlay">
                            <div className="overlay-text">
                                <b>EXAMPLE TOPICS</b>
                                <br />How to Make Friends
                                <br />How to Deal with Roommate Conflict
                                <br />The Art of Conversation
                                <br />Dealing with Feedback Healthily
                                <br />Increasing my Emotional Intelligence
                                <br />Key to an Analytical Mind
                            </div>
                        </div>
                    </Col>
                    <Col className="hover-wrapper">
                        <p className="program-card text-theme-light" style={leadershipX}>
                            LEADERSHIPX
                        </p>
                        <div className="overlay">
                            <div className="overlay-text">
                                <b>FORMAT</b>
                                <br />Leadership talks with experts in their field
                                <br />ADVANCE Initiative (Community-Based Service Project)
                                <br />Individualized Consulting
                                <br />Growth Plans
                            </div>
                        </div>
                    </Col>
                    <Col className="hover-wrapper">
                        <p className="program-card text-theme-light" style={guide2Grad}>
                            GUIDE TO GRAD SCHOOL
                        </p>
                        <div className="overlay">
                            <div className="overlay-text">
                                <b>EXAMPLE TOPICS</b>
                                <br />Grad School Tests
                                <br />Applying
                                <br />Masters or Doctorate?
                                <br />Personal Statements
                                <br />Options for Paying
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
                <h1 className="text-theme-tan font-weight-400 pb-3">Additional Programs</h1>
                <p className="text-theme-light">Want to enhance your mentorship experience? You can work on community-based service projects with a cohort of like-minded students or complete a professional internship with us.</p>
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
    backgroundImage: `url(${allthingscollege})`,
};
const EQ = {
    backgroundImage: `url(${eq101})`,
};
const Adulting = {
    backgroundImage: `url(${adulting})`,
};
const careerFoundations = {
    backgroundImage: `url(${careerfoundation})`,
};
const leadershipX = {
    backgroundImage: `url(${leadership})`,
};
const guide2Grad = {
    backgroundImage: `url(${guidetograd})`,
};

const trackList = {
    marginTop: "2%",
    marginBottom: "2%",
};

export default Program;