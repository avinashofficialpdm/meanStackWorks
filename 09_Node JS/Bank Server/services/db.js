
// importing mongoose library
const mongoose = require("mongoose")

// state connection string
mongoose.connect('mongodb://localhost:27017/bankApp',{
    useNewUrlParser:true
})

// model creation
const User =mongoose.model('User',{
    acno: Number, 
    uname: String, 
    password: String, 
    balance: Number, 
    transaction: []
})

// exporting
module.exports={
    User
}