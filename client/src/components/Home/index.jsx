import { React } from 'react';
// import { Container, Button, Row } from 'react-bootstrap';

import Header from './Header'
import Why from './Why'
import Companies from './Companies'
import Who from './Who'
import How from './How'
import Photostrip from './Photostrip'
import './style.css'

const Home = () => {
    return (
        <>
            <Header />
            <Why />
            <Companies />
            <Who />
            <How />
            <Photostrip />
        </>
    )
}

export default Home;