const express = require('express');
const {register, login, signout} = require('../controller/user.controller')




const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('logout', signout)

module.exports = router



