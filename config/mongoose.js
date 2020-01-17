const mongoose = require("mongoose");
const { mongoURI } = require("./variables")

exports.connect = () =>  mongoose.connect(mongoURI,
    {
        useNewUrlParser: true,
        connectTimeoutMS: 30000,
        useUnifiedTopology: true,
    }).then(success => console.log("connection success to db"))
    .catch(error => console.log(error));