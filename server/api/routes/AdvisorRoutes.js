const express = require('express');
const router = express.Router();
const advisorService = require('../../services/AdvisorService')

/**
 * All professional advisors who should be on the homepage
 */
router.get('/', (_, res) => {
    advisorService.getMainAdvisors()
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

/**
 * All professional advisors by campus short name (eg apu, american, ucla)
 */
router.get('/campus/:campusName', (req, res) => {
    advisorService.getCampusAdvisors(req.params.campusName)
        .then(rows => res.json(rows))
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

module.exports = router;