const express = require('express')
const router = express.Router()

const campusRoutes = require('./routes/CampusRoutes')
const advisorRoutes = require('./routes/AdvisorRoutes')
const mentorRoutes = require('./routes/MentorRoutes')

router.use('/api/v1/campus', campusRoutes)
router.use('/api/v1/advisor', advisorRoutes)
router.use('/api/v1/mentor', mentorRoutes)

module.exports = router;