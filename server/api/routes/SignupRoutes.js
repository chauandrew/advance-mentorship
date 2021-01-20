const express = require('express');
const router = express.Router();
const gsheetService = require('../../services/GsheetService');

/**
 * Insert a row for new mentorship signups
 */
router.post('/', (req, res) => {
    if (!('firstname' in req.body) || !('lastname' in req.body) ||
        !('email' in req.body) || !('gender' in req.body) ||
        !('school' in req.body)) {
        res.status(400)
        res.send("Body must contain firstname, lastname, email, gender, school")
    }
    const row = [
        req.body['firstname'],
        req.body['lastname'],
        req.body['email'],
        req.body['gender'],
        req.body['school'],
        req.body['otherSchool'],
        req.body['city'],
        req.body['collegeTrack'] ? true : false,
        req.body['careerTrack'] ? true : false,
        req.body['adultingTrack'] ? true : false,
        req.body['leadershipTrack'] ? true : false,
        req.body['gradSchoolTrack'] ? true : false,
        req.body['eq101Track'] ? true : false
    ]
    gsheetService.appendRows('signups', [row])
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

module.exports = router;