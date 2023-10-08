const express = require('express')
const Mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

Mongoose.connect("mongodb://127.0.0.1:27017/nadya-yoga")

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body, res)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("Server is running")
})