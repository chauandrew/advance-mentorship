import {React} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import Photo1 from './photo1.jpg'
import Photo2 from './photo2.jpg'
import Photo3 from './photo3.jpg'
import Photo4 from './photo4.jpg'

const Photostrip = () => {
    return (
        <Container fluid className="p-5">
            <Row>
                <Col className="p-1" sm={6} md={3}>
                    <img className="w-100" src={Photo1} />
                </Col>
                <Col className="p-1" sm={6} md={3}>
                    <img className="w-100" src={Photo2} />
                </Col>
                <Col className="p-1" sm={6} md={3}>
                    <img className="w-100" src={Photo3} />
                </Col>
                <Col className="p-1" sm={6} md={3}>
                    <img className="w-100" src={Photo4} />
                </Col>
            </Row>
        </Container>
    )
}

export default Photostrip;