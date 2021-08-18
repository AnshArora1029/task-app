const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb+srv://ansharora:vardy3999@cluster0.5og1b.mongodb.net/task-app?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useCreateIndex : true
})

