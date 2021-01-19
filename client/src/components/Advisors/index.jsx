import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';

import Campus from './Campus'
import api from '../../utils/api'
import './style.css'

const Advisors = () => {
    const { campusName } = useParams();
    const [advisors, setAdvisors] = useState(null)
    const [campusDropdown, setCampusDropdown] = useState(null)

    useEffect(() => {
        // Query for advisors
        if (campusName) {
            api.getAdvisorsByCampus(campusName)
                .then((res) => {
                    setAdvisors(<Campus keymap={res.keymap}
                        advisors={res.advisors} campusName={res.campusName} />)
                })
                .catch(() => {
                    setAdvisors(
                        <h6 className="text-theme-light">
                            {`Could not find advisors for ${campusName}!`}</h6>)
                })
        } else {
            api.getAdvisors().then((res) => {
                let campuses = []
                let i = 0
                for (const property in res) {
                    if (property != "keymap") {
                        campuses.push(
                            <Campus key={i} keymap={res.keymap}
                                advisors={res[property]['advisors']}
                                campusName={res[property]['campusName']} />
                        )
                        i++
                    }
                }
                setAdvisors(campuses)
            })
        }
        // Query for campus dropdown
        api.getCampuses().then((res) => {
            let dropdownItems = []
            dropdownItems.push(
                <Dropdown.Item href="/advisors">All Campuses</Dropdown.Item>)
            for (let i = 0; i < res.nrows; ++i) {
                dropdownItems.push(
                    <Dropdown.Item href={"/advisors/" + res.rows[i][res.keymap['anchor']]}>
                        {res.rows[i][res.keymap['name']]}
                    </Dropdown.Item>
                )
            }
            setCampusDropdown(
                <Dropdown className="w-100">
                    <Dropdown.Toggle className="w-100" variant="light">
                        Select a Campus
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="scroll-dropdown">{dropdownItems}</Dropdown.Menu>
                </Dropdown>
            )

        })
    }, [])

    return (
        <Container className="p-5">
            <Row className="mb-5">
                <h1 className="text-theme-tan font-weight-400">Our Professional Advisors:</h1>
            </Row>
            <Row className="mt-5 mb-5">
                <Col md={4}>
                    {campusDropdown}
                </Col>
            </Row>
            {advisors}
        </Container>
    )
}

export default Advisors;