const express = require('express');
const router = express.Router();
const gsheetService = require('../../services/GsheetService');

/**
 * Insert a row for new mentorship signups
 */
router.post('/', (req, res) => {
    const row = [
        req.body['firstname'],
        req.body['lastname'],
        req.body['email'],
        req.body['gender'],
        req.body['school'],
        req.body['otherSchool'],
        req.body['city'],
        req.body['collegeTrack'],
        req.body['careerTrack'],
        req.body['adultingTrack'],
        req.body['leadershipTrack'],
        req.body['gradSchoolTrack'],
        req.body['softSkillsTrack']
    ]
    gsheetService.appendRows('signups', [row])
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

module.exports = router;