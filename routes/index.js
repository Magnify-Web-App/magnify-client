const express = require('express')
const router = express.Router()

const passport = require('passport')
const passport_Linkedin = require('../config/passport')
passport_Linkedin(passport)

router.get('/', function(req, res) {
  res.send('dashboard') //for testing
})

router.get('/auth/linkedin', passport.authenticate('linkedin'))
router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin'),
  async function(req, res) {
    if (req.isAuthenticated()) {
      //   res.redirect('/') //for testing
      res.send({
        email: req.user.email,
        displayName: req.user.displayName,
        photo: req.user.photo
      })
    } else {
      res.send(err)
    }
  }
)

module.exports = router
