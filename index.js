const express = require('express')
const dotenv = require('dotenv')
const db = require('./db/connect')
const userRoute = require('./router/user.router.js')
const property = require('./router/property.router.js')
// const {requireSignIn, isAuth} = require('./utility/auth.js')



const app = express()
app.use(express.json())
dotenv.config()
db()

app.use('/api', userRoute)

app.use('/api', property)


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>
    console.log(`server is running on ${PORT}`)
)






