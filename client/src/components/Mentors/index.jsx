import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import api from '../../utils/api'
import Bio from './Bio'

const Mentors = () => {
    const [mentors, setMentors] = useState(null)

    useEffect(() => {
        api.getMentors().then((res) => {
            let rows = res['rows']
            let keymap = res['keymap']
            let cards = []
            for (let i = 0; i < rows.length; i++) {
                cards.push(
                    <Col sm={6} md={4} lg={3}>
                        <Bio name={rows[i][keymap['name']]}
                            major={rows[i][keymap['major']]}
                            college={rows[i][keymap['univ']]}
                            tagline={rows[i][keymap['tagline']]}
                            imgUrl={rows[i][keymap['imgUrl']]} />
                    </Col>
                )
            }
            // let keymap = res['keymap']
            setMentors(cards)
        })
    }, [])

    return (
        <>
            <Container style={{ "max-width": "600px" }}>
                <div className="text-center font-larger">
                    <h1 className="text-theme-yellow"
                        style={{ "font-size": "4rem" }}>
                        WHO WE ARE
                    </h1>
                    <h5 className="text-theme-blue font-weight-300">
                        Meet our college mentors!
                    </h5>
                    <h5 className="text-theme-blue font-weight-300">
                        We come from different backgrounds, attend different
                        colleges, and study different subjects - but we are united
                    in our desire to connect, develop, and <b>advance</b> as
                    professionals.
                    </h5>
                </div>
            </Container>
            <Container style={{ "max-width": "1000px" }}>
                <Row>
                    {mentors}
                </Row>
            </Container>
        </>
    )
}

export default Mentors;