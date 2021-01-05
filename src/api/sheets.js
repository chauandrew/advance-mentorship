import { GoogleSpreadsheet } from "google-spreadsheet";

/**
 * Documentation for when you have to do real work: 
 *  - https://www.npmjs.com/package/google-spreadsheet
 */

// Config variables
const sheets = require('../config/google-sheets.json')
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const testDoc = new GoogleSpreadsheet(sheets['testing']['spreadsheetId']);

/**
 * Insert a row into a sheet
 * @param {Object} row 
 */
const appendSpreadsheet = async (row) => {
    try {
        await testDoc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await testDoc.loadInfo();

        const sheet = testDoc.sheetsById[sheets['testing']['sheetId']];
        const result = await sheet.addRow(row);
        return result;
    } catch (e) {
        console.error('Error: ', e);
    }
};

/**
 * Get all rows from testing spreadsheet
 */
const getRows = async () => {
    await testDoc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await testDoc.loadInfo();

    const sheet = await testDoc.sheetsById[sheets['testing']['sheetId']];
    const rows = await sheet.getRows(); 
    return rows;
}

export default {
    appendSpreadsheet: appendSpreadsheet,
    getRows: getRows
}