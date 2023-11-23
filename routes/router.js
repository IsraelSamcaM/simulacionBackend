const router = require('express').Router()

const InversionesController=require('../src/controllers/inversion.controller')
 

router.use('/inversiones', InversionesController)
module.exports = router

