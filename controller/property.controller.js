
const Property = require('../model/property.model')

exports.createOneProperty = (req, res) =>{
    const userID = req.params.userId;
    console.log(req.params.userId);
    req.body.userId = userID
    Property.create(req.body)
        .then((property) =>{
            console.log(property)
            return res.json({property, msg:'Property is creted'})
        })
        .catch((err) =>{
            res.status(404).json({
                msg:'Error while create property',
                err
            })
            console.log(err)
        })
}


exports.listAllProperty = (req, res) =>{
    const userID = req.params.userId;
    req.body.userId = userID

    Property.find({userId:userID})
        .then((property) =>{
            console.log(property);
            res.json(property)
        })
        .catch((err) =>{
            res.status(404).json({
                msg: "Error while get the property",
                err
            })
        })

}


exports.updateOneProperty = (req, res) =>{
    Property.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((property) =>{
            console.log(property)
            res.json(property)
        })
        .catch((err) =>{
            res.status(404).json({
                msg:"Error while update the property",
                err
            })
        })
}


exports.deleteProperty = (req, res) =>{
    Property.findByIdAndDelete(req.params.id)
        .then((property)=>{
            console.log({property})
            res.status(201).send({msg:"Property deleted successfully"})
        })
        .catch((err)=>{
            res.status(400).send({
                msg:"Error while delete the property", 
                err
            })
        })
}