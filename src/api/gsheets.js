import { GoogleSpreadsheet } from "google-spreadsheet";

/**
 * Documentation for when you have to do real work: 
 *  - https://www.npmjs.com/package/google-spreadsheet
 */

// Config variables
const config = require('../config/google-sheets.json')
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;


/**
 * Get all rows from a gsheet
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
    let filterIndices = {}; // map column numbers to filters
    for (const filter in filters) {
        let index = config[sheetName]['columns'].indexOf(filter);
        if (index === -1) {
            console.error(`Error: column ${filter} does not exist in sheet ${sheetName}`);
            return null;
        }
        filterIndices[index] = filters[filter];
    }

    // authorize and load sheet
    let doc = new GoogleSpreadsheet(config[sheetName]['spreadsheetId'])
    await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = await doc.sheetsById[config[sheetName]['sheetId']];
    const rows = await sheet.getRows(); 

    // Build response + filter rows
    let response = {
        'columnNames': config[sheetName]['columns'],
        'rows': []
    };
    for (let i = 0; i < rows.length; ++i) {
        let valid = true;
        for (const column in filterIndices) {
            if (rows[i]._rawData[column] != filterIndices[column]) {
                valid = false;
                break;
            }
        }
        if (valid) {
            response['rows'].push(rows[i]._rawData);
        }
    }
    return response;
}

export default {
    getRows: getRows
}