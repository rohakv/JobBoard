const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    next();
})

// @desc Get all posts
// @route GET /
// @access public
router.get("/db", (req, res) => {
    const posts = 
    [
        {
            "job_title": "Barista",
            "company": "Costa",
            "pay_hr": "10"
        },
        {
            "job_title": "Kids birthday organiser",
            "company": "Fun4Kids",
            "pay_hr": "4000"
        }
    ];

    res.send(`${posts}`);
})

module.exports = router;