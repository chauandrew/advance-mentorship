import { React, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import api from '../../utils/api'

const Advisors = () => {
    const [advisors, setAdvisors] = useState(null)

    useEffect(() => {
        api.getAdvisors().then((res) => {
            setAdvisors(JSON.stringify(res))
        })
    }, [])

    return (
        <Container>Graduate Advisors! {advisors}</Container>
    )
}

export default Advisors;