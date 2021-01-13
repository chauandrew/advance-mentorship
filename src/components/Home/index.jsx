import { React, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import sheets from '../../api/gsheets';


const Home = () => {
    const [rows, setRows] = useState(null);

    const displayRows = async () => {
        sheets.getRows('testing', {"Value": "Chen"}).then((res) => {
            if (res) {
                let output = <ul>
                    {
                        res['rows'].map((row, i) => <li key={i}>{row}</li>)
                    }
                </ul>
                setRows(output);
            }
        })
    }

    return (
        <Container>
            <h2>ADVANCE<br />MENTORSHIP<br />PROGRAM</h2>
            <p>
                Make your college journey matter.<br />
                Designed for your personal and professional growth.
            </p>
            <Button onClick={displayRows}>Display Rows!</Button>
            {rows}

        </Container>
    )
}

export default Home;