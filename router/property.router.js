

const express = require('express')

const router = express.Router()

const {createOneProperty, listAllProperty, updateOneProperty, deleteProperty} = require('../controller/property.controller')


router.post('/property/:userId', createOneProperty)

router.get('/property/:userId', listAllProperty)
router.put('/property/:id', updateOneProperty)
router.delete('/property/:id', deleteProperty)


module.exports = router




