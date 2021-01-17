const express = require('express');
const router =  express.Router();
const gsheetService = require('../../services/GsheetService')

/**
 * Get all campuses
 */
router.get('/', (_, res) => {
    gsheetService.getRows("campuses")
        .then(sheet => res.json(sheet))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

module.exports = router;