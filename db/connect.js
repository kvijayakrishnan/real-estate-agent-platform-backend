const mongoose = require('mongoose');
const colors = require('colors')


const db = async() =>{
    try {
        const conDB = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('MongoDB is connected'.bgBlack.blue )
    } catch (error) {
        console.log(`Error while connecting DB ${error}`.bgBlack.red)
    }
}


module.exports = db









