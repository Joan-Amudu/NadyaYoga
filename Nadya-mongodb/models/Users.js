const Mongoose = require('mongoose')

const UserSchema = new Mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Phone: Number,
    Message: String
})

const UserModel = Mongoose.model("users", UserSchema)
module.exports = UserModel