const mongoose = require('mongoose')

const connectionToDatabase=async()=>{
    return await mongoose.connect('mongodb://localhost:27017/Netflix', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("MongoDB Connection established")).catch(() => console.log('MongoDB Connection failed'))
}

module.exports = {connectionToDatabase}