import { React } from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <h2>ADVANCE<br />MENTORSHIP<br />PROGRAM</h2>
            <p>
                Make your college journey matter.<br />
                Designed for your personal and professional growth.
            </p>
            <Button href="/apply">Apply for a mentor</Button>
        </Container>
    )
}

export default Home;