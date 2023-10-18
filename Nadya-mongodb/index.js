const express = require('express')
const Mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

//create a connection with MongoDB
Mongoose.connect("mongodb://127.0.0.1:27017/nadya-yoga")


app.get('/Users', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//API to update user details
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Message: req.body.Message,
        Comments: req.body.Comments
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//API to create a new user - contact
app.post("/createUser", (req, res) => {
    UserModel.create(req.body, res)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

//API to create a new user via the frontend contact form
app.post("/contact", (req, res) => {
    UserModel.create(req.body, res)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

//run server
app.listen(3001, () => {
    console.log("Server is running")
})