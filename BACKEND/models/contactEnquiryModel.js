const mongoose = require('mongoose')

const contactEnquirySchema = new mongoose.Schema({
    contactEnquiryName : {
        type : String,
        required : true 
    },
    contactEnquiryNumber : {
        type : Number,
        required : true 
    },
    contactEnquiryMessage : {
        type : String,
        required : true 
    },
    contactEnquiryInterests: {
        type: [String],
        required: true,
    },
    contactEnquiryStatus: {
        type: String,
        required: true,
    },
})

const contactEnquiryModel = mongoose.model('contactenquires', contactEnquirySchema)

module.exports = contactEnquiryModel 