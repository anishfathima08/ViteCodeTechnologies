const serviceModel = require('../models/serviceModel')

const addService = async (req, res) => {
    try{
        const serviceData = await serviceModel({
            serviceTitle : req.body.serviceTitle,
            serviceOldPrice : req.body.serviceOldPrice,
            serviceNewPrice : req.body.serviceNewPrice,
            serviceDiscount : req.body.serviceDiscount,
            serviceDescription : req.body.serviceDescription,
            serviceFeatures : req.body.serviceFeatures,
        })
        await serviceData.save()
        res.status(200).send('Data is Added')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const getService = async (req, res) => {
    try{
        const serviceList = await serviceModel.find()
        res.status(200).send(serviceList)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const updateService = async (req, res) => {
    try{
        const updateServiceData = await serviceModel.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.status(200).send(updateServiceData)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const deleteService = async (req, res) => {
    try{
        await serviceModel.findByIdAndDelete(req.params.id)
        res.status(200).send('Data is Deleted')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

module.exports = { addService, getService, updateService, deleteService } 