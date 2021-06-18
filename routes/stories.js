const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')

// @desc Show add Page
// @route GET /stories/add

router.get('/add', ensureAuth, (req, res) => {
    res.render("stories/add")
})

// @desc Process Add Form
// @route POST /stories

router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (err) {
        console.error(error)
        res.render('error/500')
    }
})
module.exports = router