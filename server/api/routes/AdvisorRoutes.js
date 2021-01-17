const express = require('express');
const router = express.Router();
const gsheetService = require('../../services/GsheetService');

/**
 * All professional advisors who should be on the homepage
 */
router.get('/', (_, res) => {
    gsheetService.getRows('advisors', { "mainPage": "TRUE" })
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

router.get('/campus/:campusName', (req, res) => {
    gsheetService.getRows('advisors', { "gpCampus": req.params.campusName })
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

module.exports = router;