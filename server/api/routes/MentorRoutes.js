const express = require('express');
const router = express.Router();
const gsheetService = require('../../services/GsheetService');

/**
 * Return all college mentors
 */
router.get('/', (_, res) => {
    gsheetService.getRows('mentors')
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

module.exports = router;