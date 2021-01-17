const express = require('express');
const router =  express.Router();

router.get('/', (_, res) => {
    console.log('hello')
    res.send("hello!");
})

module.exports = router;