import { React } from 'react';
import PropTypes from 'prop-types';

import './style.css'

const Bio = ({ name, major, college, tagline, imgUrl }) => {
    return (
        <div className="hover-wrapper mt-3 mb-3">
            <img className="mentor-card" src={imgUrl} />
                <div className="overlay">
                    <div className="overlay-text mentor-card-text">
                        <b className="pl-2 pr-2">{name}</b>
                        <i className="pl-2 pr-2">{major} @ {college}</i>
                        <p className="pl-2 pr-2 font-small">{tagline}</p>
                    </div>
                </div>
        </div>
    )
}
Bio.propTypes = {
                name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default Bio;