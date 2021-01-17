import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import gsheets from '../../api/gsheets';
import './style.css'

const Campuses = () => {
    const [campuses, setCampuses] = useState(null);

    useEffect(() => {
        gsheets.getRows("campuses").then((res) => {
            let rows = res['rows']
            let keymap = res['keymap']
            let cards = []
            for (let i = 0; i < rows.length; ++i) {
                cards.push(
                    <Col sm={3} key={i}>
                        <div className="position-relative">
                            <img className="campus-img" src={rows[i][keymap['imgUrl']]} />
                            <div className="campus-txt">
                                <b>{rows[i][keymap['name']]}</b>
                                <p>Anchor: {rows[i][keymap['anchor']]}</p>
                            </div>
                        </div>
                    </Col>
                )
            }
            setCampuses(cards)
        })
    }, [])

    return (
        <Container>Campuses!
            <Row>
                {campuses}
            </Row>
        </Container>
    )
}

export default Campuses;