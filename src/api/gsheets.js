const { JWT } = require('google-auth-library')
const axios = require('axios');

const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
const GOOGLE_AUTH_SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const config = require('../config/google-sheets.json')

/**
 * Get all rows from a gsheet where the first row contains column names,
 * and the rest contain data. Make sure new sheets are added to 
 * '/src/config/google-sheets.json' to query data. 
 * 
 * Gsheets api documentation here: 
 * https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
 * 
 * @param {string} sheetName - the name of the sheet to search
 * @param {Object} [filters={}] - case insensitive equality filters to match
 */
const getRows = async (sheetName, filters = {}) => {
    // check that sheet and filters exist
    if (!(sheetName in config)) {
        console.error(`Error: Could not find sheet '${sheetName}'`);
        return null;
    } else if (typeof(filters) !== 'object') {
        console.warn(`Warning: Could not filter by '${filters}'.` + 
                    ' Defaulting to {} instead.');
        filters = {};
    }

    // Authorize gsheets + query sheet for rows
    const client = new JWT({
        email: CLIENT_EMAIL,
        key: PRIVATE_KEY,
        scopes: GOOGLE_AUTH_SCOPES
    })
    await client.authorize();
    let url = "https://sheets.googleapis.com/v4/spreadsheets/" + 
        `${config[sheetName]['spreadsheetId']}/values/${sheetName}!A1:Z1000`
    let opts = {
        headers: { "authorization": `${client.credentials.token_type} ${client.credentials.access_token}`}
    }
    let rows = (await axios.get(url, opts)).data.values
    let columnNames = rows.shift() // 0th element of 'rows' holds column names

    // Build response + filter rows
    let filterIndices = {}; // map column numbers to filters
    for (const filter in filters) {
        let index = columnNames.indexOf(filter);
        if (index === -1) {
            console.error(`Error: column ${filter} does not exist in sheet ${sheetName}`);
            return null;
        }
        filterIndices[index] = filters[filter];
    }
    let response = {
        'columnNames': columnNames,
        'rows': []
    };

    for (let i = 0; i < rows.length; ++i) {
        let valid = true;
        for (const column in filterIndices) {
            if (rows[i][column] != filterIndices[column]) {
                valid = false;
                break;
            }
        }
        if (valid) {
            response['rows'].push(rows[i]);
        }
    }
    return response;
}

export default {
    getRows: getRows
}