const express = require('express')
const { addService, getService, updateService, deleteService } = require('../controllers/serviceControllers')
const serviceRouter = express.Router()

serviceRouter.post('/addservice', addService)
serviceRouter.get('/getservice', getService)
serviceRouter.put('/updateservice/:id', updateService)
serviceRouter.delete('/deleteservice/:id', deleteService)


module.exports = serviceRouter 