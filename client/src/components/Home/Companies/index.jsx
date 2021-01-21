import { React } from 'react'
import {Container} from 'react-bootstrap'
import CompaniesPhoto from './companies-v2-01.png'

const Companies = () => {
    return (
        <Container className="p-5">
            <h1 className="text-center text-theme-tan font-weight-600">
                INDUSTRY PROFESSIONALS FROM</h1>
            <img className="w-100" src={CompaniesPhoto} />
        </Container>
    )
}

export default Companies;