const express = require('express')
const contactEnquiryRouter = express.Router()

const { addContactEnquiry, getContactEnquiry, deleteContactEnquiry, updateContactEnquiry } = require('../controllers/contactEnquiryControllers')
contactEnquiryRouter.post('/addcontactenquiry', addContactEnquiry)
contactEnquiryRouter.get('/getcontactenquiry', getContactEnquiry)
contactEnquiryRouter.delete('/deletecontactenquiry/:id', deleteContactEnquiry)
contactEnquiryRouter.put('/updatecontactenquiry/:id', updateContactEnquiry)

module.exports = contactEnquiryRouter