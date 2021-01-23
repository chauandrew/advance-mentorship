import React from 'react';
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Bio from '../Bio';

const Campus = ({keymap, advisors, campusName}) => {
    // Create bios for each advisor
    let advisorsElem = []
    for (let i = 0; i < advisors.length; ++i) {
        if (advisors[i][keymap['imgUrl']]) {
            advisorsElem.push(
            <Col md={3} key={i}>
                    <Bio
                        name={advisors[i][keymap['name']]}
                        degree1={advisors[i][keymap['degree1']]}
                        school1={advisors[i][keymap['school1']]}
                        degree2={advisors[i][keymap['degree2']]}
                        school2={advisors[i][keymap['school2']]}
                        degree3={advisors[i][keymap['degree3']]}
                        school3={advisors[i][keymap['school3']]}
                        company={advisors[i][keymap['company']]}
                        title={advisors[i][keymap['title']]}
                        linkedin={advisors[i][keymap['linkedin']]}
                        imgUrl={advisors[i][keymap['imgUrl']]}
                    />
                </Col>
            )
        }
    }

    return (
        <>
            <h4 className="text-theme-blue mb-2 mt-5 font-weight-400">{campusName}</h4>
            <Row className="mb-5">{advisorsElem}</Row>
        </>
    )
}
Campus.propTypes = {
    keymap: PropTypes.object.isRequired,
    advisors: PropTypes.array.isRequired,
    campusName: PropTypes.string.isRequired
}

export default Campus;