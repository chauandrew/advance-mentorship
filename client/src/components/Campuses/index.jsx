import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import api from '../../utils/api';
import Campus from './Campus'

const Campuses = () => {
    const [campuses, setCampuses] = useState(null);

    useEffect(() => {
        api.getCampuses().then((res) => {
            let rows = res['rows']
            let keymap = res['keymap']
            let cards = []
            for (let i = 0; i < rows.length; ++i) {
                cards.push(
                    <Col sm={6} md={4} lg={3} key={i}>
                        <Campus name={rows[i][keymap['name']]} 
                            imgUrl={rows[i][keymap['imgUrl']]} 
                            anchor={rows[i][keymap['anchor']]} />
                    </Col>
                )
            }
            setCampuses(cards)
        })
    }, [])

    return (
        <Container className="mb-5">
            <h1 className="text-theme-tan font-weight-300">Our Campuses</h1>
            <h6 className="text-theme-light font-weight-300">Don’t see your 
                campus? You can still apply to get connected to a mentor 
                nearby, or request mentorship at your campus!
                <span> <a className="text-theme-yellow" href="/apply">Apply now!</a></span>
            </h6>
            <Row>
                {campuses}
            </Row>
        </Container>
    )
}

export default Campuses;