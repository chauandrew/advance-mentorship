const gsheetService = require('./GsheetService')

/**
 * Get main advisors, organized by campus
 * @returns {Object} with keys 'name', 'keymap', and 'advisors'
 */
const getMainAdvisors = async () => {
    // Query for advisors and campuses
    const [advisors, campuses] = await Promise.all([
        gsheetService.getRows("advisors", { "mainPage": "TRUE" }),
        gsheetService.getRows("campuses")
    ])

    // Build response: organize advisors by campus & add campus nicenames
    let mainAdvisors = {}
    mainAdvisors['keymap'] = advisors.keymap
    for (let i = 0; i < advisors.nrows; i++) { // organize advisors by campus
        const anchor = advisors.rows[i][advisors.keymap['gpCampus']]
        if (anchor in mainAdvisors) {
            mainAdvisors[anchor]['advisors'].push(advisors.rows[i])
        } else {
            mainAdvisors[anchor] = { "advisors": [advisors.rows[i]] }
        }
    }
    for (let i = 0; i < campuses.nrows; i++) { // add nicename for each campus
        const anchor = campuses.rows[i][campuses.keymap["anchor"]]
        if (anchor in mainAdvisors) {
            mainAdvisors[anchor]['campusName'] = campuses.rows[i][campuses.keymap["name"]]
        }
    }

    return mainAdvisors
}

/**
 * Get all advisors related to a specific campus
 * @param {string} campus anchor (eg 'american', 'apu', 'ucla')
 * @returns {Object} with keys 'name', 'keymap', and 'advisors'
 */
const getCampusAdvisors = async (campus) => {
    const [advisors, campuses] = await Promise.all([
        gsheetService.getRows("advisors", { "gpCampus": campus }),
        gsheetService.getRows("campuses", { "anchor": campus })
    ])

    if (campuses.nrows == 0) {
        throw new Error(`Could not find campus ${campus}`)
    } else if (campuses.nrows >= 2) {
        throw new Error(`Check campuses table for duplicate values of ${campus}`)
    } else if (advisors.nrows == 0) {
        throw new Error(`Could not find any advisors for the campus ${campus}!`)
    }

    return {
        'keymap': advisors.keymap,
        'advisors': advisors.rows,
        'campusName': campuses.rows[0][campuses.keymap['name']]
    }
}

module.exports = {
    getMainAdvisors: getMainAdvisors,
    getCampusAdvisors: getCampusAdvisors
}