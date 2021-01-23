import React from 'react'
import PropTypes from 'prop-types'
import LinkedInLogo from '../../../assets/linkedinLogo.png'

import './style.css'

const Bio = ({name, degree1, school1, degree2, school2, company, title, imgUrl,
    linkedin, degree3, school3}) => {


    let summary = []
    const nameElement =
        <div className="advisor-header mt-3">
            <h4 className="text-theme-yellow" style={{"letter-spacing": "0.05em"}}>
                {name.toUpperCase()}</h4>
            { linkedin ? <a href={linkedin} target="blank">
                <img src={LinkedInLogo} width="30" />
            </a> : <></>}
        </div>
    summary.push(nameElement)

    let iter = [[company, title], [school3, degree3], [school2, degree2], [school1, degree1]]
    console.log(iter)
    for (let i = 0; i < iter.length; ++i) {
        if (iter[i][0] && iter[i][1]) {
            console.log(iter[i])
            summary.push(<div className="text-theme-light">
                <p className="m-0 font-small"><i>{iter[i][0]}</i></p>
                <p className="m-0">{iter[i][1]}</p>
            </div>)
        }
    }

    return (
        <div className="mt-5" style={{"vertical-align":"top"}}>
            <img src={imgUrl} className="advisor-img" alt={name + "-photo"} />
            {summary}
        </div>
    )
}
Bio.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    degree1: PropTypes.string.isRequired,
    school1: PropTypes.string.isRequired,
    degree2: PropTypes.string,
    school2: PropTypes.string,
    degree3: PropTypes.string,
    school3: PropTypes.string,
    linkedin: PropTypes.string,
}

export default Bio