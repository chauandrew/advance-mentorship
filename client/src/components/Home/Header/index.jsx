import { React } from 'react'
import { Container, Row, Button } from 'react-bootstrap'

import './style.css'

const Header = () => {
    return (
        <>
            <div className="videoplayer-wrapper">
                <div className="videoplayer">
                    <iframe src="//player.vimeo.com/video/502068908?background=1" frameBorder="0" allow="autoplay; fullscreen"></iframe>
                </div>
            </div>
            <Container fluid className="full-screen homepage-header pl-5">
                <h1 className="text-theme-tan font-weight-700">ADVANCE<br />MENTORSHIP<br />PROGRAM</h1>
                <p className="text-theme-light font-weight-300">
                    Founded by college students for college students.<br />
                        Designed for your personal and professional growth.
                    </p>
                <Row className="mt-2 ml-1">
                    <Button href="/apply">APPLY FOR A MENTOR</Button>
                </Row>
                <Row className="mt-2 ml-1">
                    <Button href="/program">LEARN MORE</Button>
                </Row>
            </Container>
        </>
    )
}

export default Header;