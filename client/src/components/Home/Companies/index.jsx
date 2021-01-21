import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CompaniesPhoto from './companies-v2-01.png'

const Companies = () => {
    return (
        <Container className="pt-5 pb-5 text-center">
            <Row>
                <Col>
                    <h1 className="text-center text-theme-tan font-weight-600">
                        INDUSTRY PROFESSIONALS FROM</h1>
                    <img className="w-100" src={CompaniesPhoto} />
                </Col>
            </Row>
        </Container>
    )
}

export default Companies;