import { React, useState, useEffect } from 'react';
import { Container, Row, Col, Toast, Form, Button } from 'react-bootstrap';

import api from '../../utils/api'

const Apply = () => {
    const [submitted, setSubmitted] = useState(false)
    const [showError, setShowError] = useState(null)
    const [errorText, setErrorText] = useState(null)
    const [campusDropdown, setCampusDropdown] = useState([])

    // Display Error toast at bottom of page for 3 sec
    useEffect(() => {
        if (showError) {
            setTimeout(() => { setShowError(false) }, 3000)
        }
    }, [showError])

    // Get campuses for campus dropdown
    useEffect(() => {
        api.getCampuses().then((res) => {
            let rows = res['rows']
            let keymap = res['keymap']
            let opts = []
            for (let i = 0; i < res.nrows; ++i) {
                opts.push(
                    <option value={rows[i][keymap['anchor']]}>
                        {rows[i][keymap['name']]}</option>
                )
            }
            setCampusDropdown(opts)
        })
    }, [])

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, email, male, female, school,
            otherSchool, city, collegeTrack, careerTrack, adultingTrack,
            leadershipTrack, gradSchoolTrack, eq101Track, 
            termsOfUse, privacyPolicy, codeOfConduct
        } = event.target.elements

        // front end value checking
        if (!firstname.value || !lastname.value) {
            setErrorText("Please input your first and last name")
            setShowError(true)
            return
        }
        else if (!email.value || email.value.search(".edu") == -1) {
            setErrorText("Please input a .edu email")
            setShowError(true)
            return
        }
        else if ((!male.checked && !female.checked) | (male.checked && female.checked)) {
            setErrorText("Please select one gender")
            setShowError(true)
            return
        }
        else if (school.value == "other" && !otherSchool.value) {
            setErrorText("Please select a school or 'other'")
            setShowError(true)
            return
        } else if (!collegeTrack.checked && !careerTrack.checked && !adultingTrack.checked &&
            !leadershipTrack.checked && !gradSchoolTrack.checked && !eq101Track.checked) {
            setErrorText("Please select at least 1 mentorship track")
            setShowError(true)
            return
        } else if (!termsOfUse.checked || !privacyPolicy.checked || !codeOfConduct.checked) {
            setErrorText("You must agree to the Terms of Use, Privacy Policy, and Code of Conduct before continuing.")
            setShowError(true)
            return
        }

        // Build request
        let request = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            gender: male.checked ? "male" : "female",
            school: school.value,
            otherSchool: otherSchool.value,
            city: city.value,
            collegeTrack: collegeTrack.checked,
            careerTrack: careerTrack.checked,
            adultingTrack: adultingTrack.checked,
            leadershipTrack: leadershipTrack.checked,
            gradSchoolTrack: gradSchoolTrack.checked,
            eq101Track: eq101Track.checked,
        }
        api.userSignup(request)
            .then(() => setSubmitted(true))
            .catch((err) => {
                setErrorText(err)
                console.log(err)
                setShowError(true)
            })
    }

    if (submitted) {
        return (
            <Container className="full-screen ">
                <h1 className="text-theme-yellow">Thank you for applying!</h1>
                <h4 className="text-theme-light font-weight-300">
                    We&apos;ll get back to you within a week.
                </h4>
            </Container>
        )
    }

    return (
        <Container className="full-screen mb-5 mt-5 p-5">
            <Row>
                <Col md={12} lg={5}>
                    <h1 className="text-theme-yellow"><i>Apply Now</i></h1>
                    <p className="text-theme-light">
                        Thank you for your interest in AMP! Please fill out
                        the quick form and we will reach out to you shortly.
                    </p>
                </Col>
                <Col md={12} lg={7}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="firstname">
                                    <Form.Label className="text-theme-light">
                                        First Name *</Form.Label>
                                    <Form.Control name="firstname" placeholder="Jane" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="lastname">
                                    <Form.Label className="text-theme-light">
                                        Last Name *</Form.Label>
                                    <Form.Control name="lastname" placeholder="Doe" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="email">
                            <Form.Label className="text-theme-light">
                                Email Address *</Form.Label>
                            <Form.Control name="email" placeholder="example123@university.edu" />
                        </Form.Group>
                        <Form.Group controlId="gender" className="text-theme-light">
                            <Form.Label>Gender *</Form.Label>
                            <Form.Check type="checkbox" id="male" label="Male" />
                            <Form.Check type="checkbox" id="female" label="Female" />
                        </Form.Group>

                        <Form.Group controlId="school">
                            <Form.Label className="text-theme-light">
                                School/University *</Form.Label>
                            <Form.Control as="select" name="school" placeholder="">
                                <option value="other">Other / Not Listed</option>
                                {campusDropdown}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="otherSchool">
                            <Form.Label className="text-theme-light">
                                If other, what school / university?</Form.Label>
                            <Form.Control name="otherSchool" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label className="text-theme-light">
                                City of Residence</Form.Label>
                            <Form.Control name="city" placeholder="Los Angeles" />
                        </Form.Group>

                        <Form.Group controlId="tracks" className="text-theme-light">
                            <Form.Label>What tracks are you interested in? *</Form.Label>
                            <Form.Check type="checkbox" id="collegeTrack" label="All Things College" />
                            <Form.Check type="checkbox" id="careerTrack" label="Career Foundations" />
                            <Form.Check type="checkbox" id="adultingTrack" label="Adulting 101" />
                            <Form.Check type="checkbox" id="leadershipTrack" label="LeadershipX" />
                            <Form.Check type="checkbox" id="gradSchoolTrack" label="Guide to Grad School" />
                            <Form.Check type="checkbox" id="eq101Track" label="EQ 101" />
                        </Form.Group>

                        <Form.Group controlId="legal" className="text-theme-light">
                            <Form.Label>
                                I agree to the <a target="_" href="/terms-of-use">Terms of Use</a>, <a target="_" href="/privacy">Privacy Policy</a>, and <a target="_" href="/code-of-conduct">Code of Conduct</a>.
                            </Form.Label>
                            <Form.Check type="checkbox" id="termsOfUse" label="Terms of Use" />
                            <Form.Check type="checkbox" id="privacyPolicy" label="Privacy Policy" />
                            <Form.Check type="checkbox" id="codeOfConduct" label="Code of Conduct" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit Application!
                        </Button>
                    </Form>
                    <Toast show={showError} onClose={() => setShowError(false)}>
                        <Toast.Header>Error submitting form:</Toast.Header>
                        <Toast.Body>{errorText}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    )
}

export default Apply;