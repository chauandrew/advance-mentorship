import { React } from 'react';
import PropTypes from 'prop-types'

import './style.css'

const Campus = ({name, anchor, imgUrl}) => {
    return (
        <a className="campus-img text-theme-light" href={`/advisors/${anchor}`}
            style={{"background-image": 
            "linear-gradient(rgba(0,0, 0, .50), rgba(0,0, 0, .50)), " + 
            `url(${imgUrl})`}}>
            {name.toUpperCase()}
        </a>
    )
}
Campus.propTypes = {
    name: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}

export default Campus;