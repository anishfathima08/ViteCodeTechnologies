const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    serviceTitle: { 
        type: String, 
        required: true 
    },
    serviceOldPrice: { 
        type: String,
        required : true
    },
    serviceNewPrice: { 
        type: String, 
        required: true 
    },
    serviceDiscount: { 
        type: String,
        required: true 
    },
    serviceDescription: { 
        type: String, 
        required: true 
    },
    serviceFeatures: [{ 
        type: String,
        required : true 
    }]
});

const serviceModel = mongoose.model("servicedata", serviceSchema);

module.exports = serviceModel