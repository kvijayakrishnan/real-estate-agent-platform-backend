const mongoose = require('mongoose')


const PropertySchema = new mongoose.Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        require:true,
        ref:'User'
    },
    title:{
        type:String,
        require: true,
    },
    place:{
        type:String,
        require:true,
    },
    rate:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },

})


const Property = mongoose.model('Property', PropertySchema)
module.exports = Property





