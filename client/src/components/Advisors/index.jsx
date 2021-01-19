import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import api from '../../utils/api'

const Advisors = () => {
    const { campusName } = useParams();
    const [advisors, setAdvisors] = useState(null)

    useEffect(() => {
        if (campusName) {
            api.getAdvisorsByCampus(campusName)
                .then((res) => {
                    setAdvisors(JSON.stringify(res))
                })
                .catch(() => {
                    setAdvisors("Could not find advisors for " + campusName)
                })
        } else {
            api.getAdvisors().then((res) => {
                setAdvisors(JSON.stringify(res))
            })
        }
    }, [])

    return (
        <Container>Graduate Advisors! <br />{advisors}</Container>
    )
}

export default Advisors;