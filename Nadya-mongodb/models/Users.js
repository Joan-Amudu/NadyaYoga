const Mongoose = require('mongoose')

//Model for the users
const UserSchema = new Mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Phone: Number,
    Message: String,
    Comments: String

})

const UserModel = Mongoose.model("users", UserSchema)
module.exports = UserModel