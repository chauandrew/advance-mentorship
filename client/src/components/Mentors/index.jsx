import { React, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import api from '../../utils/api'


const Mentors = () => {
    const [mentors, setMentors] = useState(null)

    useEffect(() => {
        api.getMentors().then((res) => {
            let rows = res['rows']
            // let keymap = res['keymap']
            setMentors(JSON.stringify(rows))
        })
    }, [])

    return (
        <Container>
            College Mentors!
            {mentors}
        </Container>
    )
}

export default Mentors;